'use strict';

    // function moveBar() {
    //   $('.bar').each(function () {
    //     console.log("scaleY("+2 * Math.random() + 0.5+")")
    //     $(this).css({
          
    //       transform:"scaleY("+20 * Math.random() + 0.5+")"
    //     })
    //   });
    // }
    // moveBar()
    //window.requestAnimationFrame(moveBar);
    // var tl = new TimelineMax();
    // tl.staggerTo($('.bar'), 0.4, { scaleY: 1.8, repeat: -1, yoyo: true }, 0.2);
    // tl.stop();
    // var isActive = true;
    // $('.visualizer').click(function () {
    //   if (isActive == false) {
    //     tl.stop();
    //     TweenMax.to($('.bar'), 0.6, { scaleY: 1 });
    //     isActive = true;
    //   } else {
    //     tl.restart();
    //     isActive = false;
    //   }
    // });

    function AudioWave (opts) {
      this.tl = new TimelineMax();
      this.id = opts.id;
      this.barColor = opts.barColor || '#000'
      this.init()
    }
    AudioWave.prototype = {
      init: function () {
        for(var i=0;i<12;i++) {
          $('#'+this.id).append($('<div class="bar"></div>'))
        }
        $('#'+this.id).find('.bar').css({
          backgroundColor:this.barColor
        })
        this.tl.staggerTo($('#'+this.id).find('.bar'), 0.4, { scaleY: 1.8, repeat: -1, yoyo: true }, 0.2);
        this.tl.stop();
      },
      waveStop:function () {
        console.log('stop')
        this.tl.stop();
        TweenMax.to($('#'+this.id).find('.bar'), 0.6, { scaleY: 1 });
      },
      waveStart:function () {
        console.log('start')
        this.tl.restart();
      }

    }