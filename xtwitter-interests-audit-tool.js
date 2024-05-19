// ==UserScript==
// @name         X/Twitter Interests audit tool
// @namespace    http://tampermonkey.net/
// @version      2024-04-10
// @description  A slightly convenient way to spot and deactivate the ghoulishly irrelevant stuff added by X/Twitter to this continuously growing list.
// @author       SandorHQ
// @match        https://x.com/settings/your_twitter_data/twitter_interests
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	console.log('X/Twitter Intrests audit tool')

	const interestListQuery = 'section[aria-label="Section details"] label'
	const storageKey = 'TwitterInterests'
	let reportElement

	let interval = setInterval(() => {
		if (document.querySelector(interestListQuery)) {
			clearInterval(interval)
			manageInterestList()
		}
	}, 100)

	function manageInterestList() {
		const storedData = localStorage.getItem(storageKey)
		const storedInterests = storedData ? JSON.parse(storedData) : []
		const newInterests = []
		document.querySelectorAll(interestListQuery).forEach((label) => {
			const topic = label.querySelector('span')?.innerText
			const checkbox = label.querySelector('input[type=checkbox]')
			checkbox.addEventListener('click', () => setTimeout(() => {
				markLabel(label, false)
				storeInterestState()
			}, 10))
			const checked = checkbox.checked
			const data = { topic, checked }
			const foundIdx = storedInterests.findIndex(elem => elem.topic === data.topic && elem.checked == data.checked)
			const isNew = foundIdx < 0
			if (!isNew) {
				storedInterests.splice(foundIdx, 1)
			} else {
				newInterests.push(topic)
			}

			markLabel(label, isNew)
		})
		storeInterestState()
		// if (newInterests.length > 0) {
		// 	alert(`${newInterests.length} new interest${newInterests.length > 1 ? 's' : ''} detected.`)
		// }
		generateReport(`X/Twitter has found ${newInterests.length} new interest${newInterests.length === 1 ? '' : 's'}.`)
		console.log(`X/Twitter has found ${newInterests.length} new interest${newInterests.length === 1 ? '' : 's'}.`)
	}

	function markLabel(label, isNew) {
		if (isNew) {
			label.setAttribute('style', 'outline:2px dashed red; opacity: 1')
		}
		else {
			label.setAttribute('style', 'outline: none; opacity: 0.8')
		}
	}

	function generateReport(message) {
		if (reportElement === undefined) {
			reportElement = document.createElement('div')
			reportElement.setAttribute('style', 'background:yellow; padding:1rem; position:fixed; right:0; top:0')
			document.body.appendChild(reportElement)
		}
		reportElement.innerHTML = message
	}

	function storeInterestState() {
		const currentInterests = []
		document.querySelectorAll(interestListQuery).forEach((label) => {
			const topic = label.querySelector('span')?.innerText
			const checked = label.querySelector('input[type=checkbox]')?.checked
			const data = { topic, checked }
			currentInterests.push(data)
		})
		localStorage.setItem(storageKey, JSON.stringify(currentInterests))
	}
})()
