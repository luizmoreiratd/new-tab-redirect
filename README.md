# New Tab Redirect

A Firefox extension that redirects new tabs to a specific website.

## Description

The extension listens for the `tabs.onCreated` event and redirects new tabs that have a blank page URL (`about:blank`) to a specific website. By default, new tabs are redirected to https://www.google.com.

## Installation

1. Clone the repository or download the source code.
2. Open Firefox and enter `about:debugging` in the address bar.
3. Click on "Load Temporary Add-on".
4. In the file explorer, navigate to the cloned/downloaded folder and select the `manifest.json` file.
5. The extension will be loaded and active in your Firefox browser.

## Usage

Simply open a new tab, and if the new tab has a blank page URL (`about:blank`), it will be automatically redirected to the desired website.

**Important: Make sure your Firefox browser is configured to open a blank page on a new tab for the extension to work correctly.**

## Customization

If you want to change the URL to a different page, you can modify the `background.js` file in the extension's folder. Look for the line of code that updates the tab URL, and change the URL to your desired page.

## Contributing

Contributions to this extension are welcome! If you have any suggestions, bug reports, or improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
