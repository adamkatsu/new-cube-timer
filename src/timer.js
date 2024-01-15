let num = document.getElementById("timer");
let btnReset = document.getElementById('btn-reset')
const timeList = document.getElementById('results');
let count = 0;
let minutes = 0;
let sec = 0;
let secMinOne = 0;
let int = null;
let avgList = [];


function startTimer() {
    // Disable reset button focus
    btnReset.blur();
  
    if (int !== null) {
      // If Timer is Running, STOP.
      clearInterval(int);
      console.log(`timer stopped, time is = ${minutes}:${sec}.${secMinOne}${count}`);
  
      // Store Result in avglist array
      if (sec < 10) {
        avgList.push(`${minutes}:0${sec}.${secMinOne}${count}`);
      } else {
        avgList.push(`${minutes}:${sec}.${secMinOne}${count}`);
      }
  
      // Save avgList in LocalStorage
      localStorage.setItem('session', avgList);
      let avgStorage = localStorage.getItem('session');
      let newList = avgStorage.split(','); // Temporary array to print new list.
  
    //   printSolves(newList);
    //   newScramble(3);
    //   printAvg(avgList);
    //   console.log(typeof calculateAverageTime(avgList));
  
      // Reset Timer 
      count = 0;
      sec = 0;
      secMinOne = 0;
      minutes = 0;
      int = null;
  
    } else {
      // If timer is not running, START.
      int = setInterval(addNum, 10);
      console.log(`timer started`);
    }
  }

  function addNum() {
    count += 1;
  
    // Check if under 1 minute
    if(minutes < 1) {
  
      num.innerHTML = `${sec}.${secMinOne}${count}`;
  
      if (count === 10) {
        secMinOne ++;
        count = 0;
        num.innerHTML = `${sec}.${secMinOne}${count}`;
    
        if (secMinOne === 10) {
          sec ++;
          secMinOne = 0;
          num.innerHTML = `${sec}.${secMinOne}${count}`;
    
          if(sec === 60) {
            minutes ++;
            sec = 0;
            num.innerHTML = `${minutes}:${sec}.${secMinOne}${count}`;
          }
        }
      }
    } else {
  
      // Over 1 Minute
      if(sec < 10) {
        num.innerHTML = `${minutes}:0${sec}.${secMinOne}${count}`;
      } else {
        num.innerHTML = `${minutes}:${sec}.${secMinOne}${count}`;
      }
  
      if (count === 10) {
        secMinOne ++;
        count = 0;
  
        if(sec < 10) {
          num.innerHTML = `${minutes}:0${sec}.${secMinOne}${count}`;
        } else {
          num.innerHTML = `${minutes}:${sec}.${secMinOne}${count}`;
        }
    
        if (secMinOne === 10) {
          sec ++;
          secMinOne = 0;
  
          if(sec < 10) {
            num.innerHTML = `${minutes}:0${sec}.${secMinOne}${count}`;
          } else {
            num.innerHTML = `${minutes}:${sec}.${secMinOne}${count}`;
          }
    
          if(sec === 60) {
            minutes ++;
            sec = 0;
            
            if(sec < 10) {
              num.innerHTML = `${minutes}:0${sec}.${secMinOne}${count}`;
            } else {
              num.innerHTML = `${minutes}:${sec}.${secMinOne}${count}`;
            }
          }
        }
      }
    }
  }
  

  // Event Listeners

// Space key to start timer
window.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
    //   document.getElementById("app-timer").classList.toggle("timer-on");
      startTimer();
    }
  });