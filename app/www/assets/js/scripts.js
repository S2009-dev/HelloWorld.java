document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && 'U' || event.ctrlKey && event.shiftKey && event.key === 'I' || event.ctrlKey && event.shiftKey && event.key === 'C' || event.key === 'F12') {
        event.preventDefault();
    }
});

document.addEventListener('dragstart', function(event) {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
        event.preventDefault();
    }
});