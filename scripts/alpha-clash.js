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
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;// event 1ta perameter disi jate ami ki chap disi dekhar jonno
    console.log('player pressed: ',playerPressed)
    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver()
    }
    // get the expected to press
    // konta chap deyar kotha sheta niye ashlam
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText ;
    const expectedAlphabet = currentAlphabet.toLowerCase(); //compare korte gele 2tai shoman case er hote hobe.
    // console.log(playerPressed, expectedAlphabet)
    // check matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('you get a point')
        // console.log('you have pressed correctly', expectedAlphabet)
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)
    //----------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText =currentScoreElement.innerText;
        // // console.log(currentScoreText)
        // const currentScore = parseInt(currentScoreText);
        // console.log(typeof currentScore, currentScore)
        // // 2. increase the score by 1
        // const newScore = currentScore + 1 ;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore ;
        // // start a new round
        removeBackgroundColorElementById(expectedAlphabet) //jei letter ta press korbo tar color ta chole jabe .
        continueGame();
    }
    else{
        console.log('you lost a life')
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);
        //--------------------------
        // // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeElementText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeElementText);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1 ;
        // // step-3: display the updated life count
        // currentLifeElement = newLife ;
        if(updateLife === 0){
            console.log('Game over')
            gameOver()
        }
    }
}
// capture keyboard press 
document.addEventListener('keyup', handleKeyboardKeyUpEvent) // etake bola hoy call back function,keyup hoile ei function ke call korba whole document er moddhe


function continueGame(){
// step-1: generate a random alphabet
const alphabet = getARandomAlphabet();
// console.log('your random alphabet', alphabet)

// set randomly generated alphabet to the screen(show it)
const currentAlphabetElement = document.getElementById('current-alphabet')
currentAlphabetElement.innerText =alphabet;

// set background Color
    setBackgroundColorElementById(alphabet);

}


function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score'); //same funtion apply korar jonne final-score page ta play-ground e dekhasse tai hide kore dilam.
    showElementById('play-ground');
    // reset score and life
    //jotobar khelte ashbo life 5 ta kore pabo & score start hobe 0 theke.
    setTextElementValueById('current-life', 5);
    getTextElementValueById('current-score', 0);
    continueGame()
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    // update final score
    // step-1: get the final score
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore); 
    setTextElementValueById('last-score', lastScore)
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet) // current-alphabet wala id ta jodi clear kore dite pari tahole play again dile notun alphabet er color ta pabo. aager ta add hoa thakbe na
    removeBackgroundColorElementById(currentAlphabet);
}