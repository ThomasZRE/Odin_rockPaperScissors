alert("Hello, there!\nPlease go check the console");

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
    for (let i = 0; i < 5; i++) {
        console.log("Welcome!\nThis is Rock Paper Scissors!\nLet's play 5 rouunds!");
        console.log("Round " + (i + 1));
        let pc = getComputerChoice();
        let player = parseInt(prompt("What's your choice? 1. Rock 2. Paper 3. Scissors"));
        let winner = playRound(pc, array[player - 1]);
        score[winner]++;    
        console.log(score["pc"]);
        console.log(score["player"]);
        winner === "Draw" ? console.log("Draw!") : console.log("The winner is " + winner);
    }

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