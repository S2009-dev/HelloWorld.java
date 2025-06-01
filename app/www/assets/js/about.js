let selectedVideo = 1;
let isBusy = false

function selectVideo(number = selectedVideo){
    if(isBusy) return;

    selectedVideo = number;
    selectedVideo++;
    if(selectedVideo > 3) selectedVideo = 1;

    const span = document.getElementById(`sp-${number}`);
    const video = document.getElementById(`vid-${number}`);
    const activeElems = document.getElementsByClassName('active');

    while (activeElems.length > 0) {
        activeElems[0].classList.remove('active');
    }

    span.classList.add('active');
    video.classList.add('active');
}

window.addEventListener('load', function(){
    const main = document.getElementById('main');
    main.style.opacity = 1;

    selectVideo();
    setInterval(selectVideo, 5000);
});

function onYouTubeIframeAPIReady() {
    const svg = document.getElementById('svg');
    const player1 = new YT.Player('vid-1', {
        height: '100%',
        width: '100%',
        videoId: 'yup8gIXxWDU',
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
            'enablejsapi': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    const player2 = new YT.Player('vid-2', {
        height: '100%',
        width: '100%',
        videoId: 'A8b7HFUXPqk',
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
            'enablejsapi': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    const player3 = new YT.Player('vid-3', {
        height: '100%',
        width: '100%',
        videoId: 'C13QPka-nb4',
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
            'enablejsapi': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            isBusy = true;
        } else {
            isBusy = false;
        }
    }

    svg.style.display = 'none';
}