/*Variables Start */
const scrollBG = document.querySelector('.scrollmagic-pin-spacer');
const subHeroBG = document.getElementById('scrollMagicSceneOne');
const textToChange = document.getElementById('changingTextOne');
const textOne = "I have been in the real estate industry for over 3 years and have been in customer service for over a decade.";
const textTwo = "My real world skills translate to you getting the best possible deal for buying a home or the most money when selling a home.";
const textThree = "I have multiple customer and client testimonials of my humble service to the fantastic people I serve."
/*Variables End */

/**ScrollMagic Scene One */
/*
const controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: '#scrollMagicSceneOne',
        duration: 300,
        offset: 150,
        reverse: true,
    })
    .setPin('#scrollMagicSceneOne')
    .addTo(controller)
    .on("progress", function (e) {
        if ((e.progress > 0) && (e.progress < 0.33)) {
            changeTextOne();
        } else if ((e.progress > 0.34) && (e.progress < 0.66)) {
            changeTextTwo();
        } else if ((e.progress > 0.67) && (e.progress <= 1)) {
            changeTextThree();
        }
        console.log(`progress:${e.progress}`);
    });
var progress = scene.state();
var end = scene.scrollOffset() + scene.duration();

function changeTextOne() {
    textToChange.innerHTML = textOne;
    //Any colors are tests
    textToChange.style.color = 'red';
    subHeroBG.style.backgroundColor = 'black';
    scrollBG.style.backgroundColor = 'black';
}   

function changeTextTwo() {
    textToChange.innerHTML = textTwo;
    textToChange.style.color = 'green'; 
    subHeroBG.style.backgroundColor = 'yellow';
    scrollBG.style.backgroundColor = 'yellow';

}   

function changeTextThree() {
    textToChange.innerHTML = textThree;
    textToChange.style.color = 'purple';
    subHeroBG.style.backgroundColor = 'green';
    scrollBG.style.backgroundColor = 'green';
}
*/

$('#exampleModal').on('shown.bs.modal', function () {
    $('#exampleModal').trigger('focus')
  })