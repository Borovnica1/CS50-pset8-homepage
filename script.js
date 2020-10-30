var colors = ['red', 'blue', 'yellow', 'green', 'purple']
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

    var myVar = setInterval(changeColor, 1000);
})
let i = 0;
var changeColor = () => {
    document.body.style.backgroundColor = colors[i];
    i++;
}

document.querySelector('.person3').addEventListener('mouseout', () => {

})