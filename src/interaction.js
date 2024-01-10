const btnSession = document.querySelector('#current-session');
const btnStats = document.querySelector('#statistics');
const btnTable = document.querySelector('#all-session');
const contSession = document.querySelector('#cont-session');
const contStats = document.querySelector('#cont-stats');
const contTable = document.querySelector('#cont-table');
const wrapperCont = document.querySelector('.body-main');

btnSession.addEventListener('click', () => {
    checkPanel();

    if(
        contStats.classList.contains('cont-hide') == false ||
        contTable.classList.contains('cont-hide') == false) {
            setTimeout(() => {
                contSession.classList.toggle('cont-hide');
            }, "300");
        } else {
            contSession.classList.toggle('cont-hide');
        }

    contStats.classList.add('cont-hide');
    contTable.classList.add('cont-hide');

});
btnStats.addEventListener('click', () => {
    checkPanel();

    if(
        contSession.classList.contains('cont-hide') == false ||
        contTable.classList.contains('cont-hide') == false) {
            setTimeout(() => {
                contStats.classList.toggle('cont-hide');
            }, "300");
        } else {
            contStats.classList.toggle('cont-hide');
        }

    contSession.classList.add('cont-hide');
    contTable.classList.add('cont-hide');

});
btnTable.addEventListener('click', () => {
    checkPanel();

    if(
        contSession.classList.contains('cont-hide') == false ||
        contStats.classList.contains('cont-hide') == false) {
            setTimeout(() => {
                contTable.classList.toggle('cont-hide');
            }, "300");
        } else {
            contTable.classList.toggle('cont-hide');
        }

    contSession.classList.add('cont-hide');
    contStats.classList.add('cont-hide');

});

const checkPanel = function() {
    if(
        contSession.classList.contains('cont-hide') &&
        contTable.classList.contains('cont-hide') &&
        contStats.classList.contains('cont-hide')) {
            wrapperCont.classList.remove('panel-active');
        } else {
            wrapperCont.classList.add('panel-active');
        }
}

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


