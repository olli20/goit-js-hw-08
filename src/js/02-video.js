import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    
const player = new Player(iframe);

let currentTime = {};

const onPlayTimeUpdate = (e) => {
    // console.log("time1", e);
    currentTime = e;
    console.log(currentTime);
};

player.on('timeupdate', onPlayTimeUpdate);



// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });