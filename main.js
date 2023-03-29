    // Creating HTML

    const divParent = document.createElement("div");
    const divHistory = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const button4 = document.createElement("button");
    
    divParent.setAttribute("id","calc-parent");
    divHistory.setAttribute("id","calc-history");
    div1.setAttribute("id","calc-button");
    div2.setAttribute("id","finalResult");
    
    button1.setAttribute("id","add");
    button2.setAttribute("id","subtract");
    button3.setAttribute("id","multiply");
    button4.setAttribute("id","divide");

    button1.innerHTML = "+";
    button2.innerHTML = "-";
    button3.innerHTML = "*";
    button4.innerHTML = "/";
    
    document.body.appendChild(divParent)
    divParent.appendChild(divHistory)
    divParent.appendChild(div1)
    divParent.appendChild(div2)
    div1.appendChild(button1)
    div1.appendChild(button2)
    div1.appendChild(button3)
    div1.appendChild(button4)

// States
let selection, finalResult
let allSelections = []

document.addEventListener('mouseup', function() {
    selection = window.getSelection().toString() // Get Selection as a string
    if (selection && !isNaN(selection)) {
        let selectionToNumber = Math.floor(selection) // Convert string to number
        allSelections.push(selectionToNumber)
        console.log(allSelections)
        window.getSelection().empty();
    }
});

add.addEventListener('click', () => {
    // if (window.getSelection().empty) {  // Chrome
        window.getSelection().empty();
    // }
    sum = allSelections.reduce((a, b) => a + b, 0) // Summarize all numbers in the array
    div2.innerText = sum
})

// selectionOne has to be an array with ALL numbers multiplied together. If one number is only in array, use just one. 
// e.g. selectionOne = [2014, 20, 8], remove first number, e.g. selectionOne = [20, 8] and multipliy remaining
// e.g. selectionOne = [28], e.g. calculation = numbersToCalculate - selectionOne