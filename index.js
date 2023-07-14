let head = document.createElement("h1");
head.innerText = "Welcome!\nThis is Rock Paper Scissors!";
document.body.append(head);

document.body.append("Which is your choice?");

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
    document.body.append(createP("PC: " + pc));
    document.body.append(createP("You: " + player));
    return (winner ? "player" : "pc");
}

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 10) / 3);
    if (choice >= 3){
        return array[2];
    }
    return array[choice];
}

function game(player) {
    pc = getComputerChoice();
    let winner = playRound(pc, player);
    score[winner]++;    
    document.body.append(createP(score["pc"]));
    let focus = createP(score["player"]);
    document.body.append(focus);
    winner === "Draw" ? document.body.append(createP("Draw!\n")) : document.body.append(createP("The winner is " + winner + "\n"));
    focus.scrollIntoView();
}

function createP(s) {
    let el = document.createElement("p");
    el.innerText = s;
    return el;
}

let score = {"pc": 0, "player": 0};
let pc;
let player; 

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
    game(player);

    if (score.pc === 5 || score.player === 5) {
        document.body.append("Total score") 
        document.body.append(createP(`PC: ${score.pc}`));
        document.body.append(createP(`You: ${score.player}`));
    
        if (score.pc === score.player) {
            document.body.append("It's a Draw!");
        } else if (score.pc > score.player) {
            document.body.append("PC won!");
        } else {
            document.body.append("You won!");
        }
    }
}));

