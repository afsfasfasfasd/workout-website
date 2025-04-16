let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-player', {
    height: '450',
    width: '800',
    videoId: 'qVek72z3F1U',
    playerVars: {
      autoplay: 1,
      controls: 1
    }
  });
}

function loadVideo(time) {
  if (player) {
    player.seekTo(time, true);
    player.playVideo();
  }
}
