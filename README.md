# X-Twitter-Interests-audit-tool
> TLDR: A TamperMonkey script to help notice new topics added to your X/Twitter Interests.

# Overview

If you use X (formerly known as Twitter), you should periodically check [Your Twitter Data Interests Page](https://twitter.com/settings/your_twitter_data/twitter_interests) to see a list of topics. These topics are what X/Twitter believes might be relevant to you. Often, these topics can be surprisingly irrelevant and may even appear multiple times. Although X/Twitter allows you to uncheck topics via checkboxes, unchecked topics may still remain listed, and it is unknown if this feedback is considered at all.

Since on X/Twitter's admin page there's no way to monitor the changes and the list can be quite long, this browser user script (originally designed to be used with the [TamperMonkey browser extension](https://www.tampermonkey.net/)) highlights topics that have been added since your last visit.

# Privacy

All data is stored in your browser's LocalStorage, ensuring your privacy as no data leaves your system.

# Features

Currently the only feature is the highlighting of the new topics with an ugly, dashed, red outline, as well as displaying the number of detected changes in a yellow box.

For the feature changes and bug fixes between versions of this project, please see [CHANGELOG.md](CHANGELOG.md).

# Installation

1. **Install TamperMonkey:** First, install the TamperMonkey extension from [TamperMonkey's website](https://www.tampermonkey.net/) for your browser.
2. **Add the Script:** Click here to see the [raw script page](https://raw.githubusercontent.com/sszigeti/X-Twitter-Interests-audit-tool/master/xtwitter-interests-audit-tool.js). Copy everything, then click the "Create New Script" command in the TamperMonkey extension's menu. Paste the copied script to the editor, replacing the default template text.
3. **Visit the Interests Page:** Navigate to [Your Twitter Data Interests Page on X/Twitter](https://twitter.com/settings/your_twitter_data/twitter_interests). Any new topics added since your last visit will now be highlighted. (You don't need to reinstall this script, it'll keep on working each time you visit your Twitter Interests page.)

# Contributing

Contributions to the X-Twitter-Interests-Audit-Tool are welcome! Here are some ways you can contribute:

* Bug Reports: Report issues and bugs on the [GitHub Issues](https://github.com/sszigeti/X-Twitter-Interests-audit-tool/issues) page.
* Feature Suggestions: Have an idea to make this script better? Open an issue to suggest new features.
* Code Contributions: Submit pull requests with improvements or new features.

# License

This project is licensed under the MIT License -- see the [LICENSE](LICENSE) file for details.
