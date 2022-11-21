import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(throttle);

const iframe = document.querySelector('iframe');    
const player = new Player(iframe);

player.on('timeupdate', throttle((e) => { console.log(e) }, 1000));




// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });