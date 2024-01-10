const openMenu = document.querySelector('.menu-btn');
const sideCont = document.querySelector('.side-cont');
const wrapperCont = document.querySelector('.body-main');

openMenu.addEventListener('click', () => {
    sideCont.classList.toggle('cont-hide');
    wrapperCont.classList.toggle('panel-active');
});

const checkWindow = function() {
    let warningDisplay = document.querySelector(".breakpoint-warning");

    if(window.matchMedia("(min-width: 1280px)").matches) {
        warningDisplay.style.display = 'none';
    } else {
        warningDisplay.style.display = 'flex';
    }
}

checkWindow();
 
window.addEventListener('resize', () => {
    checkWindow();
})


