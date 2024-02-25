chrome.browserAction.onClicked.addListener(() => {
    chrome.storage.local.get('enabled', (data) => {
        chrome.storage.local.set({ enabled: !data.enabled });
    });
});

chrome.webNavigation.onHistoryStateUpdated.addListener((changes) => {
    chrome.storage.local.get('enabled', (data) => {
        chrome.storage.local.set({ enabled: !data.enabled });
        chrome.storage.local.set({ enabled: data.enabled });
    });
});