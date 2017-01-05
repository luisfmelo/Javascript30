//  select all keys
const keys = document.querySelectorAll('.key');

// for each key, when transition end... call removeTransition() function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);



function playSound(e) {
    // i'll go to audio tag and get the data-key attribute (ES6 syntax)
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    // select the correspondent key element
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    // Don't run if there is no sound associated
    if (!audio) return;

    // Play song
    audio.currentTime = 0; // rewind to the start before playing (allow multiple taps in a row)
    audio.play();

    // Style that square
    key.classList.add('playing');
    // Watchout... we need to remove the style after animation
}

function removeTransition(e) {
    // We have multiple transitions ending ( we can see typing:
    // console.log(e)
    // So... we choose one of the transitions (in this case... transform )
    if (e.propertyName !== 'transform') return

    // Remove Class (== Remove style)  ----> if we want to change times -> change in style.css
    this.classList.remove('playing');
}
