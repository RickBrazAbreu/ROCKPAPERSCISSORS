const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}


const choices = ["ROCK", "PAPER", "SCISSORS"];
//player.currentChoice = choices[0];


//GETTING THE BUTTONS FROM HTML
document.getElementById('Lapis').onclick = choiceLapis;
document.getElementById('Paper').onclick = choicePaper;
document.getElementById('Scissors').onclick = choiceScissors;



//HERE CALLING ALL THE AVAILABLES BUTTONS TO CLICK  
function choiceLapis(){
  //displayResult("Waiting Player and Computer");
  player.currentChoice = choices[0];
  
  compareChoices();
  resetGame();
}
function choicePaper(){
  //displayResult("Waiting Player and Computer");
  player.currentChoice = choices[1];
  
  compareChoices();
  resetGame();
}
function choiceScissors(){
  //displayResult("Waiting Player and Computer");
  player.currentChoice = choices[2];
  
  compareChoices();
  resetGame();
}


//CREATING THE RANDOM FUNCTION "COMPUTER USE IT TO MAKE IT OWN CHOICES"
function computerChooses(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}


// Here, we removed the console.logs, and instead, stored the message in the displayResult function. We'll declare the displayResult function later, which we'll use to add the text to the HTML.
function compareChoices(){
  computerChooses();
  
  
  //ALL POSSIBLITIES IN THE GAME
  if(computer.currentChoice === player.currentChoice){
    displayResult("It's a tie! The computer and player both chose " + computer.currentChoice);
  }else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else {
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }
}

// The displayResult function creates a new paragraph element, called resultText, that adds the results from the compareChoices function above.
function displayResult(result){ 
  const resultText = document.createElement('p');
  resultText.innerText = result;
  document.body.appendChild(resultText);//appendChild creates an element at the end of the list...
}


setTimeout(function resetGame(){
  window.location.reload(true);
}, 9000);//here you setting up a timer in seconds to do an action!




