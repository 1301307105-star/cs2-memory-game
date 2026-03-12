console.log("Script started")

//Guesses variables
let guesses = 0;

// Variable to store the first choice id (empty to start)
let firstCardId ="";

//Var to store 2nd choice id

let secondCardId = "";

//flips card to reval text
function flipCard(cardId) {
//tests to see if everything works
    //console.log("click");

    //Gets a card element by the given id 
    let card = document.getElementById(cardId);

    card.style.color = "black";
    
    card.style.backgroundColor = "darkblue";

    //Check which pick it is 
    if (firstCardId == "") {
        //remebers their first choice
        firstCardId = cardId;
        //console.log(firstCardId);
    }
    else{
        //remeber their second choice
        secondCardId = cardId;
        guesses = guesses + 1;
        //console.log(secondCardId);
        //console.log("guesses = " + guesses)
        let guesseDisplay = document.getElementById("Guesses")
        guesseDisplay.innerText = "Guesses " + guesses;
        //checkForMatch();
        setTimeout(checkForMatch, 1000);
    }
    
}

function checkForMatch() {
    // Get HTMl card elements that were clicked
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);

    //Check if the card text matches
    if(card1.innerText == card2.innerText) {
        card1.style.backgroundColor = "lightgreen";
        card2.style.backgroundColor = "lightgreen";

    }
    else{
        card1.style.color = "navyblue";
        card1.style.backgroundColor = "navyblue";
        card2.style.color = "navyblue";
        card2.style.backgroundColor = "navyblue";
    }
    firstCardId = "";
    secondCardId = "";
}