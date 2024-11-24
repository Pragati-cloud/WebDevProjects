/*let country = ["India","usa", "indonesia","monaco","tuvalu"]

console.log(country);
country.push("pakistan");
console.log(country);

country.pop()
console.log(country);


let hands =["rocks", "paper","scissor"];

function getHand(){
    let ram = Math.floor(Math.random() *3);
    return hands[ram];
    
}
console.log(getHand())
*/

let arr =[]
let input = document.getElementById("input");

let btn= document.getElementById("input-btn");
const ul = document.getElementById("UL");
let deletebtn= document.getElementById("delete-btn")
let savetab= document.getElementById("save-btn")

const ls = JSON.parse(localStorage.getItem("myLeads"))

console.log(ls)

//truthy
if(ls){
    arr= ls;
    render()
}

const tabs =[
    {url: "www.google.com"}
]

savetab.addEventListener("click" , function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        arr.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(arr))
        render(arr)
    })
     console.log(tabs)
})

deletebtn.addEventListener("click", function(){
    console.log("Delete")
    localStorage.clear();
    arr=[]
    render()
})

btn.addEventListener("click", function() {
    console.log("button")
    arr.push(input.value);
    input.value=null

    console.log(arr)

    //saving array to localstorage
    localStorage.setItem("myLeads", JSON.stringify(arr))

    render()
    console.log(localStorage.getItem("myLeads"))
})
function render(){
let listitem =""
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
    listitem += `
    <li>
        <a target='_blank' href='${arr[i]}'>
        ${arr[i]}
    </li>` ;
}
ul.innerHTML =listitem
}