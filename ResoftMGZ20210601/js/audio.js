$(".bless").each(function (index, item) {
  var currAudio = $(this).find('.audio')[0];
  var bg = $(this).data('bg');
  currAudio.wave = new AudioWave({
    id: 'wave' + (index + 1),
    barColor: bg
  })
})
var clock = true;
var index = 0;

function audioAutoPlay(id) {
  var audio = document.getElementById(id);
  var play = function () {
    audio.play();
    audio.wave.waveStart();
    $(audio).parent().addClass("active");
    document.removeEventListener("touchstart", play, false);
  };
  document.addEventListener("WeixinJSBridgeReady", function () {
    play();
  }, false);
  document.addEventListener('YixinJSBridgeReady', function () {
    play();
  }, false);
  document.addEventListener("touchstart", play, false);
  audio.addEventListener('ended', function () {
    $(this).parent().removeClass("active");
    audio.wave.waveStop();
    index++;
    if (clock) {
      audios($($('.bless')[index]).find('audio')[0]);
    }
  }, false);
}
audioAutoPlay('audio1');
$(".bless").click(function () {
  // $(this).toggleClass("active");
  var audio = $(this).find('audio');
  clock = false;
  index = 0;
  audios(audio[0], 'click');
})

function audios(el) {
  if (index > 12) {
    return;
  }
  if (el.paused) {
    $(".bless").find('audio').each(function () {
      $(this)[0].pause();
      $(this).parent().removeClass("active");
      $(this)[0].wave.waveStop();
    })
    $(el).parent().addClass("active")
    el.currentTime = 0;
    var audioAll = $(el).data("src");
    $(el).attr("src", audioAll);
    el.wave.waveStart();
    el.play();
  } else {
    $(el).parent().removeClass("active")
    el.wave.waveStop();
    el.pause();
  }
  el.addEventListener('ended', function () {
    $(this).parent().removeClass("active");
    this.wave.waveStop();
    index++;
    if (clock) {
      audios($($('.bless')[index]).find('audio')[0]);
    }
  }, false);
}
