// Listen for the "tabs.onCreated" event
browser.tabs.onCreated.addListener(function (tab) {
    // Check if the new tab is a blank page
    if (tab.url == "about:blank") {
        // Update the tab URL to the desired website (e.g., Google)
        browser.tabs.update(tab.id, { url: "https://www.google.com" });
    }
});
