// Tab Interaction

const btnSession = document.querySelector('#current-session');
const btnStats = document.querySelector('#statistics');
const btnTable = document.querySelector('#all-session');
const contSession = document.querySelector('#cont-session');
const contStats = document.querySelector('#cont-stats');
const contTable = document.querySelector('#cont-table');
const contMain = document.querySelector('.side-cont-wrapper');
const wrapperCont = document.querySelector('.body-main');


// Button on Click

btnSession.addEventListener('click', () => {
    checkCont(btnSession, contSession, contStats, contTable);
    setTimeout(() => {
        checkPanel();
    }, '300');
});
btnStats.addEventListener('click', () => {
    checkCont(btnStats, contStats, contTable, contSession);
    setTimeout(() => {
        checkPanel();
    }, '300');
});
btnTable.addEventListener('click', () => {
    checkCont(btnTable, contTable, contSession, contStats);
    setTimeout(() => {
        checkPanel();
    }, '300');
});


// Functions

function checkCont(btn, current, hideOne, hideTwo) {
// main side panel show/hide function
    if(
        hideOne.classList.contains('cont-hide') == false ||
        hideTwo.classList.contains('cont-hide') == false) {
            // wait for existing panel to finish animation
            setTimeout(() => {
                current.classList.toggle('cont-hide');
            }, "300");
        } else {
            // switch panel immediately
            current.classList.toggle('cont-hide');
        }

        // hide other panels
        hideOne.classList.add('cont-hide');
        hideTwo.classList.add('cont-hide');

        // set active nav button
        setTimeout(() => {
            if(current.classList.contains('cont-hide') == false) {
                for (const item of document.querySelectorAll('.nav-menu-item')) {
                    item.classList.remove('nav-current')
                }
                btn.classList.add('nav-current');
            } else {
                for (const item of document.querySelectorAll('.nav-menu-item')) {
                    item.classList.remove('nav-current')
                }
            }
        }, '300');

    // Shrink main panel in correlation to checkPanel function
    if(wrapperCont.classList.contains('panel-active') == false) {
        wrapperCont.classList.add('panel-active');
        contMain.classList.remove('cont-hide');
    }
}

function checkPanel() {
// Expand main panel if side panel is hidden
    if(
        contSession.classList.contains('cont-hide') &&
        contTable.classList.contains('cont-hide') &&
        contStats.classList.contains('cont-hide')) {

            wrapperCont.classList.remove('panel-active');
            contMain.classList.add('cont-hide');
            
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


