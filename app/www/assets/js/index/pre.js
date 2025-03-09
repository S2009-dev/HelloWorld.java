window.addEventListener('load', () => {
    const pre = document.getElementById('pre');
    const preA = document.getElementById('pre-a');
    const preImg  = document.getElementById('pre-img');
    const preH2 = document.getElementById('pre-h2');

    preA.style.transform = 'translateY(0)';
    preImg.style.opacity = '1';
    preH2.style.transform = 'translateY(0)';

    setTimeout(() => {
        pre.style.opacity = '0';    
    }, 2000);
    
    setTimeout(showTitle, 2500);
    setTimeout(() => {
        pre.style.display = 'none';
    }, 3000);
});