
let cardarray = [];
let sum =0;
let hasblackjack = false;
let isAlive = false;
let message ="";
let displaymsg = document.getElementById("message");

let total = document.getElementById("sum");
let cards= document.getElementById("cards");
let newcard= document.getElementById("new");

let player ={
   name: "Pragati",
   points : 142
}

document.getElementById("player").textContent = player.name +": $" + player.points;


function start(){
    let firstCard = getRandomCard();
let secondCard =getRandomCard();
cardarray=[firstCard, secondCard];
let sum = firstCard + secondCard;
isAlive = true;
}
function StartGame(){
    renderGame();
}

function renderGame(){

    cards.textContent = "Cards: "
    for(i =0; i<cardarray.length; i++){
        cards.textContent += cardarray[i] +" ";
    }

    total.textContent = "Sum:"+ " " + sum; 
    
    if(sum === 21){
        message = "Wohoo !! You Won Congratulations";
        hasblackjack = true;
    }else if(sum < 21){
        message = "Do you want to draw a new card?";
    
    }else{
        message = "You're out of the game!";
        isAlive= false;
    }
    
    displaymsg.textContent = message;
    console.log(hasblackjack);
    console.log(message);
}

function newc(){
    
    console.log("Drawing a new card from the deck!");
    if(sum <=21){
    let c = getRandomCard();
    sum +=c; 
    cardarray.push(c);
    console.log(cardarray);
    renderGame();
    }
}

function getRandomCard(){
    num = Math.floor(Math.random() * 13) + 1;
    if(num ===1) return 11;
    else if(num>=11 ) return 10;
    else return num;
}
/*let age=22;

if(age >=21){
    console.log("Welcome");
}else{
    console.log("not eligible");
}
  
#array

arr= [20, "Pragati", true]

###array 
let sen = ["hello", "my", "name", "is", "Pragati"];
let greeting = document.getElementById("greet");

for(i=0; i<=sen.length; i++){
    greeting.textContent += sen[i] + " ";
}

*/