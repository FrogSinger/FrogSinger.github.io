$(function () {
    function moveGo() {
        setTimeout(moveGoReal,1200)
    }
    function moveGoReal() {
        $('#pig').animate({
            left: $(window).width() / 4,
            top: 30,
        }, 1000, function () {
            $('#pig').animate({
                left: $(window).width() / 2,
                top: 50,
            }, 1000, function () {
                $('#birthday').show().css({
                    left: $(window).width() / 2 + 130,
                    top: 130,
                    width: 3,
                    height: 2
                }).animate({
                    left: $(window).width() / 2 + 120,
                    top: 10,
                    height: 180,
                    width: 270
                }, 1000,moveBack())
            })
        })
    }
    function moveBack() {
        setTimeout(moveBackReal,1000)
    }
    function moveBackReal() {
        $('#pig').animate({
            left: $(window).width() / 4,
            top: 30,
        }, 1000, function () {
            $('#pig').animate({
                left: 10,
                top: 50
            }, 1000)
            $('#birthday').fadeOut(1000)
            moveGo()
        })
    }
    moveGo()
})


