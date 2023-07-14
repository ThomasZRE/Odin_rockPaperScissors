document.write("Hello, there!");

const array = ["Rock", "Paper", "Scissors"];

function playRound(pc, player) {
    let round = [pc, player];
    let winner;
    if (pc === player) {
        return "Draw";
    }
    else if (round.includes("Rock") && round.includes("Paper")) {
        winner = round.indexOf("Paper");
    }
    else if (round.includes("Paper") && round.includes("Scissors")) {
        winner = round.indexOf("Scissors");
    }
    else if (round.includes("Scissors") && round.includes("Rock")) {
        winner = round.indexOf("Rock");
    }
    console.log("PC: " + pc);
    console.log("You: " + player);
    return (winner ? "player" : "pc");
}

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 10) / 3);
    if (choice >= 3){
        return array[2];
    }
    return array[choice];
}

function game() {
    let score = {"pc": 0, "player": 0};
    
    console.log("Round ");
    let pc = getComputerChoice();
    let player;         // Player's choice (ongoing)
    // buttons for UI
    const btn1 = document.createElement("button");
    btn1.innerText = "Rock";

    const btn2 = document.createElement("button");
    btn2.innerText = "Paper";

    const btn3 = document.createElement("button");
    btn3.innerText = "Scissors";

    document.body.append(btn1, btn2, btn3);

    const buttons = document.querySelectorAll("button");
        
    buttons.forEach(button => button.addEventListener("click", function() {
        player = button.innerText;
    }));

    let winner = playRound(pc, player);
    score[winner]++;    
    console.log(score["pc"]);
    console.log(score["player"]);
    winner === "Draw" ? console.log("Draw!") : console.log("The winner is " + winner);

    console.log(`Total score\nPC: ${score.pc}\nYou: ${score.player}`);

    if (score.pc === score.player) {
        console.log("It's a Draw!");
    } else if (score.pc > score.player) {
        console.log("PC won!");
    } else {
        console.log("You won!");
    }
}

game();