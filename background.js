// Listens to extension icon click
chrome.action.onClicked.addListener(() => {
    chrome.storage.local.get('enabled', (data) => {
        chrome.storage.local.set({ enabled: !data.enabled });
        chrome.action.setBadgeText({
            text: data.enabled ? 'OFF' : 'ON',
        });
    });
});
