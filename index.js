import LocationFinder, { LocationFind } from './Location.js';

const searchButton = document.querySelector("button");
const entrySpace = document.querySelectorAll("input")[0];
const entrySpaceTwo = document.querySelectorAll("input")[1];
const facts = document.querySelectorAll("div")[0];
searchButton.addEventListener("click",()=>{
    let info = entrySpace.value;
    let infoTwo = entrySpaceTwo.value;
    

    if(info == "" || infoTwo ==""){
        alert("Please fill in the blank");
    }
    const firstPlace = new LocationFind(info,'start');
    const secondPlace = new LocationFind(infoTwo,'end');
    console.log(info);
    console.log(LocationFind.getDistanceBetween(info,infoTwo));
})
