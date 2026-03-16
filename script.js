let player1, player2;
let currentPlayer;
let symbol = "X";
let gameActive = false;

const submit = document.getElementById("submit");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

submit.onclick = function(){

player1 = document.getElementById("player1").value;
player2 = document.getElementById("player2").value;

if(player1 === "" || player2 === "") return;

currentPlayer = player1;
gameActive = true;

message.textContent = `${currentPlayer}, you're up`;
};

cells.forEach(cell=>{
cell.addEventListener("click",handleClick);
});

function handleClick(e){

if(!gameActive || e.target.textContent !== "") return;

e.target.textContent = symbol;

checkWinner();

symbol = symbol === "X" ? "O" : "X";
currentPlayer = currentPlayer === player1 ? player2 : player1;

if(gameActive){
message.textContent = `${currentPlayer}, you're up`;
}

}

function checkWinner(){

const winPatterns = [
["1","2","3"],
["4","5","6"],
["7","8","9"],
["1","4","7"],
["2","5","8"],
["3","6","9"],
["1","5","9"],
["3","5","7"]
];

for(let pattern of winPatterns){

let a = document.getElementById(pattern[0]).textContent;
let b = document.getElementById(pattern[1]).textContent;
let c = document.getElementById(pattern[2]).textContent;

if(a && a === b && b === c){

gameActive = false;

let winner = symbol === "X" ? player1 : player2;

message.textContent = `${winner} congratulations you won!`;
}

}

}