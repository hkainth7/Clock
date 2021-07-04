// invoke funtion every 1000ms or 1s 
setInterval(setClock, 1000);

// grab the second hand <div> element
const secondHand = document.getElementById("second-hand");
// grab the minute hand <div> element
const minuteHand = document.getElementById("minute-hand");
// grab the hour hand <div> element
const hourHand = document.getElementById("hour-hand");



// declare setClock function
// this function is responible for getting the rotation ratio for 
// seconds, minutes and hours
function setClock() {
    // create new date object 
    const currentDate = new Date();
    // from new date object, get the seconds and divide by 60 to 
    // calculate the seconds ratio 
    // ex. if current.getSeconds() returns a value of 1 second dividing by
    // 60 will give us a ratio value of 0.0166667  
    const secondsRatio = currentDate.getSeconds() / 60;

    // from new date object, get the minutes
    // we add the secondsRatio to the current minute
    // allows for slow and steady rotation minutes hand
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

    // from new date object, get the hours
    // we add the minutesRatio to the current minute
    // allows for slow and steady rotation of hour hand 
    const hoursRation = (minutesRatio + currentDate.getHours()) / 12;

    // call setRotation passing in two arguements
    // first argument is the element 
    // second argument is the seconds/minutes/hours ratio
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRation);
}

// declare setRotation function
// takes two parameters dom element and rotationRatio
// function is responsible for setting the --rotation property in css 
// to the received rotationRatio multiplied by 360 degrees
function setRotation(element, rotationRatio) {

    // set element's property '--rotation' to the rotationRatio * 360 degrees
    element.style.setProperty('--rotation', rotationRatio * 360);
}

// invoke setClock() function as soon as page loads 
// so the current time is displayed right away 
setClock();