function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function setBackgroundColorElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    // get or create an alphabet array
    // const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ; // evabeo kora jay. ekhane length 26 kintu index 25
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets)
    // get a random index between 0-25
     const randomNumber = Math.random()*25;
     const index = Math.round(randomNumber);
    //  console.log(index);
    const alphabet = alphabets[index];
    /* alphabets array te rounded index er man gula pathao 
    */
//    console.log(index ,alphabet)
   return alphabet;
}