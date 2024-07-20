const className = 'nes';

// Adds a class to the body to enable custom cursor icon
function addCursorClass() {
    if (!document.body.classList.contains(className)) {
        document.body.classList.add(className);
        console.info('\x1b[32m%s\x1b[0m', 'NES Cursor has been successfully injected!');
    }
}

// Remove class to the body to disable custom cursor icon
function removeCursorClass() {
    if (document.body.classList.contains(className)) {
        document.body.classList.remove(className);
        console.info('\x1b[33m%s\x1b[0m', 'NES Cursor has been securely removed.');
    }
}

// Checks status on page load
function checkStatus() {
    chrome.storage.local.get('enabled', function (data) {
        if (data.enabled) {
            addCursorClass();
        } else {
            removeCursorClass();
        }
    });
}

checkStatus();

// Detects flag change
chrome.storage.onChanged.addListener((changes) => {
    const isEnabled = changes.enabled.newValue;
    if (isEnabled) {
        addCursorClass();
    } else {
        removeCursorClass();
    }
});
