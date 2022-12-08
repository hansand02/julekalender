const date24 = document.getElementById("date-24");
const countdownTimer = document.getElementById("countdown-timer");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
var daysleft;

const christmasColors = [
    "#009900",
    "#33cc33",
    "#66ff66",
    "#006600",
    "#339933",
    "#66cc66",
    "#003300",
    "#336633",
    "#669966",
    "#000033"
  ];


date24.addEventListener("click", () => {
    //alert("heilo");
    return setFarge(date24)
});

function setFarge(luke) {
    var color = christmasColors[Math.floor(Math.random() * christmasColors.length)]
    luke.style.background = color
    luke.style.opacity = "0.7"
}

function setAlleFarge() {
    for(let i = 1; i<24 ; i++) {
        var luke = document.getElementById(i.toString())
        
        /* var days(Math.floor(((new Date((new Date()).getFullYear(), 11, 24, 0, 0, 0)).getTime()- (new Date()).getTime())/(1000 * 60 * 60 * 24))); */
        
        if (i == 23-(Math.floor(((new Date((new Date()).getFullYear(), 11, 24, 0, 0, 0)).getTime()- (new Date()).getTime())/(1000 * 60 * 60 * 24)))) {
            luke.style.background = 'red'
            
            luke.addEventListener("click", () =>
            alert("luke" + i + " har knulla moren din")
            )
            continue;
        }
        
        setFarge(luke)
    }
}

function updateCountdown() {
    // Get current date and time
    const currentDate = new Date();
    
    // Set Christmas date and time
    const christmasDate = new Date(currentDate.getFullYear(), 11, 24, 0, 0, 0);
    
    // Get time difference in milliseconds
    let timeDifference = christmasDate.getTime() - currentDate.getTime();
    
    // Calculate days, hours, minutes, and seconds
    const daysUntilChristmas = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    timeDifference -= daysUntilChristmas * (1000 * 60 * 60 * 24);
    
    const hoursUntilChristmas = Math.floor(timeDifference / (1000 * 60 * 60));
    timeDifference -= hoursUntilChristmas * (1000 * 60 * 60);
    
    const minutesUntilChristmas = Math.floor(timeDifference / (1000 * 60));
    timeDifference -= minutesUntilChristmas * (1000 * 60);
    
    const secondsUntilChristmas = Math.floor(timeDifference / 1000);
    
    // Update countdown timer
    days.innerHTML = daysUntilChristmas.toString().padStart(2, "0")
    hours.innerHTML = hoursUntilChristmas.toString().padStart(2, "0");
    minutes.innerHTML = minutesUntilChristmas.toString().padStart(2, "0");
    seconds.innerHTML = secondsUntilChristmas.toString().padStart(2, "0");
}

// Update countdown timer every seconds

setInterval(updateCountdown, 1000);
setAlleFarge()
