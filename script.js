const secondPlate = document.getElementsByClassName("second-palate")[0];
const minutePlate = document.getElementsByClassName("minute-palate")[0];
const hourPlate = document.getElementsByClassName("hour-palate")[0];
const secondIndicator = document.getElementsByClassName("second-indicator")[0];
const minuteIndicator = document.getElementsByClassName("minute-indicator")[0];
const hourIndicator = document.getElementsByClassName("hour-indicator")[0];


setInterval(()=>{
    const now = new Date();
    secondPlate.style.rotate = `${(now.getSeconds() * 6)}deg`;
    secondIndicator.style.rotate = `${(now.getSeconds() * 6)}deg`;
    minutePlate.style.rotate = `${(now.getMinutes() * 6)}deg`;
    minuteIndicator.style.rotate = `${(now.getMinutes() * 6)}deg`;
    hourPlate.style.rotate = `${(now.getHours() * 30)}deg`;
    hourIndicator.style.rotate = `${(now.getHours() * 30)}deg`;
}, 1000);
