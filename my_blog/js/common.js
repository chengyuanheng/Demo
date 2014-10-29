// JavaScript Document

$(function () {
    var oMenu = document.getElementById('dock');
    var aImg = oMenu.getElementsByTagName('img');
    var iWid = 128;
    var iWidth = 64;
    var i = 0;
    var posLeft = 0;
    var flag = false;
    var scale = "scale(1)";
    $('body').removeClass("blur");
    var left = 0;
    $('#dock').css({"margin-left": left / 2});

    $(window).resize(function () {
        var size = $(window).width();
        if (size < 1024) {
            flag = true;
        }
        else {
            flag = false;
        }
        left = $(window).width() - $('#dock img').size() * 70;
        $('#dock').css({"margin-left": left / 2});

    });


    for (i = 0; i < aImg.length; i++) {
        aImg[i].width = iWidth;
    }

    //$('img').css({"width":iWidth});

    $('*').mousemove(function (e) {
        if (flag) {
        }
        else {

            var oEvent = e || event;


            for (i = 0; i < aImg.length; i++) {

                var imgX = aImg[i].offsetLeft + oMenu.offsetLeft + aImg[i].offsetWidth / 2;
                var imgY = aImg[i].offsetTop + oMenu.offsetTop + aImg[i].offsetHeight / 2;

                var a = imgX - oEvent.clientX;
                var b = imgY - oEvent.clientY;

                var c = Math.sqrt(a * a + b * b);

                var scale = 1 - c / 300;

                if (scale < 0.5) {
                    scale = 0.5;
                }
                aImg[i].width = Math.ceil(iWid * scale);
            }
        }
    });


    $('#dock img').hover(function () {
            posLeft = $(this).offset().left;

            var icon = $(this).attr("title");
            $('.title').css({"left": posLeft, "bottom": 135}).html(icon).show();
        },
        function () {
            $('.title').hide();
        })


    $('#dock img').click(function () {
        if (flag) {
        }
        else {
            flag = true;
            var y = 90;

            $(this).animate({"margin-bottom": 90}, 200, vibrant);

        }


        function vibrant() {

            if (y > 5) {
                y -= y * 0.45
                $(this).animate({"margin-bottom": 0}, 90)
                    .animate({"margin-bottom": y}, 90, vibrant);
            }
            else {
                $(this).animate({"margin-bottom": 0})

                flag = false;
            }
        }
    })

});