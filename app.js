//twenty game
let userTotal = 0;
let compTotal = 0;
let userWins = 0;
let compWins = 0;
let pot = 0;
let userNum;
let compNum;
let userBet;
let userMoney = 100;

function userBetting() {

    if (userMoney > 0) {
        userBet = parseInt(prompt(`how much would you like to bet? You currently have $${userMoney} if you don't want to bet enter 0.`));
        if ((userMoney - userBet) < 0) {
            userBet = parseInt(prompt(`you don't have enough money for that. How much would you like to bet? you currently have ${userMoney}.`))
        }
    }else {
        alert("you're out of money and can no longer bet.");
    }
    

    pot = pot + userBet;
    userMoney = userMoney - userBet;
    userBet = 0;
    toString(userMoney);
    toString(pot);
}



function userNumber() {
    

    do{
        userNum = Math.floor(Math.random() * 10);


        if ((userNum == 1) && (userTotal < 21)) {
            userNum = 11;
        }else if ((userNum == 1) && (userTotal > 21)) {
            userNum = 1;
        }

        userTotal = userTotal + userNum;

        if (userTotal < 21) {
            redraw = prompt(`you drew ${userNum}. Your total is ${userTotal} would you like to draw another card? enter 'y' or 'n'`)
        } else {
            alert("you can no longer draw cards.");
            break;
        }

        userBetting();


    }while (userTotal < 21 && redraw == "y");

    alert(`your final total is ${userTotal}`);
    alert(`you currently have $${userMoney}. The pot is at $${pot}.`)

}

function computerNumber() {
    

    do {
        compNum = Math.floor(Math.random() * 10) + 1

        if ((compNum == 1) && (compTotal < 21)) {
            compNum = 11;
        }

        if ((compNum == 11) && (compTotal>21)) {
            compTotal = compTotal - 10 
        }

        compTotal = compTotal + compNum;
        alert(`The computer drew ${compNum}. The computers current total is ${compTotal}.`)

        if (compTotal == 17) {
            alert(compTotal);
            break
        }

    } while (compTotal < 18)

}

function winner() {

    toString(userMoney);
    toString(pot);

    if (((userTotal > compTotal) && (userTotal < 21))  || ((compTotal > 21) && (userTotal < compTotal))) {
        alert(`Congrats you won! Your total was ${userTotal} and the computer total was ${compTotal}.`);
        userWins++;
        userMoney = userMoney + pot;
        alert(`The current score is user: ${userWins} computer: ${compWins}. You currently have ${userMoney}`)

    } else if (userTotal == 21) {
        parseInt(pot);
        parseInt(userMoney);

        alert(`Congrats you won! Your total was ${userTotal} and the computer total was ${compTotal}.`);

        userWins++;
        userMoney = userMoney + (pot + (pot/2));
        toString(userMoney);
        alert(`The current score is user: ${userWins} computer: ${compWins}. You currently have $${userMoney}`)
    } else if((compTotal == 21) || ((compTotal > userTotal) && (compTotal < 21)) || ((userTotal > 21) && (compTotal < userTotal))) {

        alert("Dealer won.");
        compWins++;
        alert(`The current score is user: ${userWins} computer: ${compWins}. You currently have ${userMoney}`);

    } else if(userTotal == compTotal) {
        parseInt(pot);
        parseInt(userMoney);
        alert("It was a draw");
        userWins++;
        compWins++;
        userMoney = userMoney + (pot/2);
        toString(userMoney);
        alert(`The current score is user: ${userWins} computer: ${compWins}. You currently have ${userMoney}`)

    }
}

function playAgain() {
    if(userMoney == 0) {
        alert(`You're out of money. Thank you for playing!`);
        alert(`The final score is user: ${userWins} computer: ${compWins}.`)
    }else {
        var again = prompt("would you like to play again? enter 'y' or 'n'.");
    }

    if (again == 'y') {
        userTotal = 0;
        compTotal = 0;
        pot = 0
        game();
    }else {
        alert(`Thank you for playing!`);
        alert(`The final score is user: ${userWins} computer: ${compWins}.`)
    }
}


function game() {
    userNumber();
    computerNumber();
    winner();
    playAgain();
}



game();



