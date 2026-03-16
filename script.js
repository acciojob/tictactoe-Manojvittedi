//your JS code here. If required.
let player1, player2;
let currentPlayer;
let currentSymbol = "X";
let gameActive = true;

const winPatterns = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
];

const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");

submitBtn.onclick = function(){

player1 = document.getElementById("player-1").value;
player2 = document.getElementById("player-2").value;

if(player1==="" || player2==="") return;

document.getElementById("player-form").style.display="none";
document.getElementById("game").style.display="block";

currentPlayer = player1;

message.textContent = `${currentPlayer}, you're up`;
};

const cells = document.querySelectorAll(".cell");

cells.forEach(cell=>{
cell.addEventListener("click",handleClick);
});

function handleClick(e){

if(!gameActive || e.target.textContent!=="") return;

e.target.textContent = currentSymbol;

checkWinner();

currentSymbol = currentSymbol==="X" ? "O" : "X";
currentPlayer = currentPlayer===player1 ? player2 : player1;

if(gameActive){
message.textContent = `${currentPlayer}, you're up`;
}

}

function checkWinner(){

for(let pattern of winPatterns){

let a = document.getElementById(pattern[0]).textContent;
let b = document.getElementById(pattern[1]).textContent;
let c = document.getElementById(pattern[2]).textContent;

if(a && a===b && b===c){

gameActive = false;

let winner = currentSymbol==="X" ? player1 : player2;

message.textContent = `${winner} congratulations you won!`;

}
}

}