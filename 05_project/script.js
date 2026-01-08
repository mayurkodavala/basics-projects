const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());

let intervalId;
const StartChangeingColors = function() {
    if(!intervalId) {
        intervalId = setInterval(changeBGcolor, 1000);
    }
    function changeBGcolor() {
        document.body.style.backgroundColor = randomColor();
    }
}
const StopChangeingColors = function() {
    clearInterval(intervalId);
    intervalId = null;
}


document.querySelector('#Start').addEventListener('click',StartChangeingColors);
document.querySelector('#Stop').addEventListener('click',StopChangeingColors);