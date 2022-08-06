import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//отслеживаем событие timeupdate вызываем функцию onPlay раз в секунду
// и сохраняем время в localStorage

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

// возобновляем воспроизведения с сохраненной позиции.

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
