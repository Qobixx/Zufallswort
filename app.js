const wordEL = document.querySelector(".word")
const oldWordsEl = document.querySelector(".old-words");


let word=[];
let currentWords ="";
let previousWords =[];

fetch("words.txt")
.then(function (response) {
   return response.text();
})
.then(function (text) {
    
    words = text.split(",");
});


// Das hier passiert wenn man auf denn Button klickt
function onClick() {
    if(currentWords){
    // Wenn ein Wort gerade angezeigt wird wird es zu denn vorherigen wörter hinzugefügt
    previousWords.push(currentWords)
    // Danach aktuallieren wir unsere Website um denn das neue Wort anzuzeigen
    oldWordsEl.innerHTML = previousWords.join(", ")

    }
    // Neues Wort generieren und als aktuelles Wort speichern
    currentWords = getRandomWord()
    // Danach aktualliert sich die Website um das neue Wort anzuzeigen
    wordEL.innerHTML = currentWords
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
}

function getRandomWord() {
    return words[getRandomNumber(words.length)];
}
