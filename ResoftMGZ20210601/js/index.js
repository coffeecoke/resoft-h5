$(function () {
    $('.menu-container').load('menu.html',function () {
        $('.pop-menu').on('click',function (e) {
            $('.menu').animate({
                left:0
            },1000)
            e.stopPropagation()
        })
        $('.wrapper').click(function (e) {
            $('.menu').animate({
                left:'-100%'
            },1000)
        });
        audioAutoPlaybg('audio13');
    });

    $('.text-container img，.fm img').addClass('animated bounceIn')

//解决移动端 视频，音频 不能自动播放的问题
    function audioAutoPlaybg(id){

        var audio = document.getElementById(id);
        var play = function(){
        		audio.play()
            document.removeEventListener("touchstart",play, false);
        };
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function() {
            play();
        }, false);
        document.addEventListener("touchstart",play, false);
    }
})

title='6月 宜孩子气—《鑫声》第二十一期'; // 分享标题
desc='六一快乐呀~'; // 分享描述
link = 'http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20210601/pages/page1.html';
imgUrl='http://weixin.chinaresoft.com/resoftwechat/pages/ResoftMGZ20210601/imgs/share.png'; // // 分享图标
