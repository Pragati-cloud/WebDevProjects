/*document.getElementById("count").innerText = 5

let count =0;

console.log(count)

let myage =19;
let humanDogRatio =7
let mydog = myage *humanDogRatio
console.log(mydog)



let bonusPoints =50;
bonusPoints = bonusPoints +50 ;
console.log(bonusPoints);
bonusPoints = bonusPoints -75 ;
console.log(bonusPoints);
bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

//creating function 
function no(){
console.log(42);
}

no()

#function that logs out the sum of all the lap times
let lap1 =34 
let lap2 = 33
let lap3 =36

function total(){
    let sum = lap1 + lap2 + lap3;
    console.log(sum);
}

total()

#create a func that incre the laps var with one, run three times

function lap(){
    let i=0;
    i=i+1;
    console.log(i)
}

lap()
lap()
lap()



*/
let count =0;
let countEl = document.getElementById("count")

function increment() {
    
    countEl.innerText = count;
    count = count +1;
    console.log(count);
}


increment();

function save(){
    let text1= count +" - "; 
    let sen = document.getElementById("text");
    sen.innerText += text1;

    console.log(count);
}

function refresh(){
     countEl.innerText = 0;
     count=0;    
}




