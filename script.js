var colors = ['red', 'blue', 'yellow', 'green', 'purple']
var myVar;

let entered = false;
document.querySelector('.person3').addEventListener('mouseover', () => {
    const markup = `
      <audio
           autoplay
           loop
        src="img/gucci-gang.mp3">
            Your browser does not support the
            <code>audio</code> element.
     </audio>
    `;
    if (!entered) document.querySelector('.music-box').innerHTML = markup;
    entered = true;

    myVar = setInterval(changeColor, 0200);
})
let i = 0;
var changeColor = () => {
    if (i == colors.length - 1) i = 0;
    document.documentElement.style.setProperty('--main-bg-color', colors[i]);
    i++;
}

document.querySelector('.person3').addEventListener('mouseout', () => {
    clearInterval(myVar);
})