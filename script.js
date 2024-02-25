// Adds a class to the body to enable custom cursor icon
function addCursorClass() {
    document.body.classList.add('nes');
    console.info('\x1b[32m%s\x1b[0m', 'NES Cursor has been successfully injected!');
}

// Remove class to the body to disable custom cursor icon
function removeCursorClass() {
    document.body.classList.remove('nes');
    console.info('\x1b[33m%s\x1b[0m', 'NES Cursor has been securely removed.');
}

// Checks status on page load
chrome.storage.local.get('enabled', function (data) {
    if (data.enabled) {
        addCursorClass();
    }
});

// Detects flag change
chrome.storage.onChanged.addListener((changes) => {
    console.log('change detected!');

    const isEnabled = changes.enabled.newValue;
    if (isEnabled) {
        addCursorClass();
    } else {
        removeCursorClass();
    }
});
