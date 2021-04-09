
// p = playerscore
let p = 0;
// c =playerscore
let c=0;
let playerSelection;
let result;
let score;

function roundResult() {
    document.getElementById("result").innerHTML = result;
}

function currentScore() {
    document.getElementById("score").innerHTML = score;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.id;

      game();

    switch (true) {
        case (p==3):
            alert ("You win the game");
            break;
        case (c==3):
            alert ("You lost the game");
             break;
}
    });


   //button.addEventListener('click', game);

});

function game() {
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

}

function computerPlay() {
        let x = (Math.random());

       if (x <=1 && x>=.67)
       return "rock";

       else if (x <=.66 && x >=.33)
       return "paper";

       else
       return "scissors"
    }

function playRound(playerSelection, computerSelection) {
        switch (true) {
    
         case (playerSelection == "rock" && computerSelection == "paper"):
         result = "You lose! Paper beats rock"; 
    return score = "Player score =" + p + " computer score =" + ++c;
        break;

        case (playerSelection == "paper" && computerSelection == "paper"):
         result = "Tie. Both chose paper";
        return score = "player score =" + p + " computer score=" + c;
        break;

        case (playerSelection == "scissors" && computerSelection == "paper"):
         result = "You win! Scissors beats paper";
        return score = "player score =" + ++p + " computer score =" + c;
        break;

        case (playerSelection =="rock" && computerSelection == "rock"):
        result = "Tie. Both chose rock.";
        return score =  "player score =" + p + " computer score=" + c;
        break;

        case (playerSelection =="paper" && computerSelection == "rock"):
        result = "You win! Paper beats rock.";
        return score = "player score =" + ++p + " computer score =" + c;
        break;

        case (playerSelection == "scissors" && computerSelection == "rock"):
        result = "You lose! Rock beats scissors.";
        return score = "Player score =" + p + " computer score =" + ++c;
        break;

        case (playerSelection == "rock" && computerSelection == "scissors"):
        result = "You win! Rock beats scissors.";
        return score = "player score =" + ++p + " computer score =" + c;
        break;

        case (playerSelection == "paper" && computerSelection == "scissors"):
         result = "You lose! Scissors beats paper.";
        return score = "Player score =" + p + " computer score =" + ++c;
        break;

        case (playerSelection == "scissors" && computerSelection == "scissors"):
        result = "Tie. Both scissors.";
        return score = "player score =" + p + " computer score=" + c;
        break;
    
}
}