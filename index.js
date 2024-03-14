//document.getElementById("count-el").innerText = 5;
// store count somewhere
//initialize the counter as zero
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {

    let countStr = count + "-"

    saveEl.innerText += countStr

    countEl.innerText = 0
    count = 0

  
}





