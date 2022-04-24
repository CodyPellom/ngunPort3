const scrollElements = document.querySelectorAll(".js-scroll");
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
        duration: 500, // the scene should last for a scroll distance of 100px
        offset: 450, // start this scene after scrolling for 50px
        reverse: true,
        start: function light(event) {
            console.log(event.progress)
            lightFigure1()
            if (event.progress >= 0.24) {
                lightFigure2();
            }
            if (event.progress >= 0.50) {
                lightFigure3();
            }
        }
    })
    .setPin('#scroll-container') // pins the element for the the scene's duration
    .addTo(controller) // assign the scene to the controller
    .on("progress", function (e) {
        if ((e.progress > 0) && (e.progress < 0.33)) {
            //lightFigure1();
        } else if ((e.progress > 0.34) && (e.progress < 0.66)) {
            //lightFigure2();
        } else if ((e.progress > 0.67) && (e.progress <= 1)) {
            //lightFigure3();
        }
        console.log(`progress:${e.progress}`);
    });
var progress = scene.state();
var end = scene.scrollOffset() + scene.duration();

