chrome.browserAction.onClicked.addListener(() => {
    chrome.storage.local.get('enabled', (data) => {
        chrome.storage.local.set({ enabled: !data.enabled });
    });
});

chrome.webNavigation.onHistoryStateUpdated.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        if (currentTab) {
            chrome.tabs.sendMessage(tabs[0].id, { message: "Check status" });
        }
    });
});
