function showTitle() {
    const title = document.getElementById('title');

    title.style.display = 'flex';

    setTimeout(() => {
        title.style.opacity = '1';
    }, 100);
}

function main() {
    const title = document.getElementById('title');

    title.style.opacity = '0';

    setTimeout(showMain, 500);
    setTimeout(() => {
        title.style.display = 'none';        
    }, 1000);
}