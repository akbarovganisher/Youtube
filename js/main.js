let menu = document.querySelector('.menus');
let spans = document.querySelectorAll('.menuSpan');
let navOne = document.querySelector('.nav-one');
let navTwo = document.querySelector('.nav-two');


menu.onclick = function () {
    navOne.classList.toggle('ss2');
    navTwo.classList.toggle('ss3');

    for (i = 0; i < spans.length; ++i) {
        spans[i].classList.toggle('ss1');
    }

}