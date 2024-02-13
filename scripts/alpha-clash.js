// function play(){
//     // Step-1 : Hide the home screen. To hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList)
//     homeSection.classList.add('hidden');
//     // Step-2: Show the playground 
//     const playgroundSection = document.getElementById('play-ground')
//     // console.log(playgroundSection.classList)
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
// step-1: generate a random alphabet
const alphabet = getARandomAlphabet();
console.log('your random alphabet', alphabet)
// set randomly generated alphabet to the scren(show it)
const currentAlphabetElement = document.getElementById('current-alphabet')
currentAlphabetElement.innerText =alphabet;

// set background Color
    setBackgroundColorElementById(alphabet);

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
