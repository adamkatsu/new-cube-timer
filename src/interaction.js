// Tab Interaction

const btnSession = document.querySelector('#current-session');
const btnStats = document.querySelector('#statistics');
const btnTable = document.querySelector('#all-session');
const contSession = document.querySelector('#cont-session');
const contStats = document.querySelector('#cont-stats');
const contTable = document.querySelector('#cont-table');
const contMain = document.querySelector('.side-cont-wrapper');
const wrapperCont = document.querySelector('.body-main');

btnSession.addEventListener('click', () => {
    checkCont(contSession, contStats, contTable);
    setTimeout(() => {
        checkPanel();
    }, '300');
});
btnStats.addEventListener('click', () => {
    checkCont(contStats, contTable, contSession);
    setTimeout(() => {
        checkPanel();
    }, '300');
});
btnTable.addEventListener('click', () => {
    checkCont(contTable, contSession, contStats);
    setTimeout(() => {
        checkPanel();
    }, '300');
});

function checkCont(current, hideOne, hideTwo) {

    if(
        hideOne.classList.contains('cont-hide') == false ||
        hideTwo.classList.contains('cont-hide') == false) {
            setTimeout(() => {
                current.classList.toggle('cont-hide');
            }, "300");
        } else {
            current.classList.toggle('cont-hide');
        }

    hideOne.classList.add('cont-hide');
    hideTwo.classList.add('cont-hide');
}

function checkPanel() {
    
    if(
        contSession.classList.contains('cont-hide') &&
        contTable.classList.contains('cont-hide') &&
        contStats.classList.contains('cont-hide')) {
            wrapperCont.classList.remove('panel-active');
        } else {
            wrapperCont.classList.add('panel-active');
        }
    
}


// Breakpoint Check

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


