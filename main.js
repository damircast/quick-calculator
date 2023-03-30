    // Creating HTML

    const divParent = document.createElement("div");
    const divHistory = document.createElement("div");
    // const spanSingleNumber = document.createElement("span");
    const div1 = document.createElement("div");
    const divResult = document.createElement("div");
    
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const button4 = document.createElement("button");
    
    divParent.setAttribute("id","calc-parent");
    divHistory.setAttribute("id","calc-history");
    // spanSingleNumber.setAttribute("class","calc-digit");
    div1.setAttribute("id","calc-button");
    divResult.setAttribute("id","finalResult");
    
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
    // divHistory.appendChild(spanSingleNumber)
    divParent.appendChild(div1)
    divParent.appendChild(divResult)
    div1.appendChild(button1)
    div1.appendChild(button2)
    div1.appendChild(button3)
    div1.appendChild(button4)

// Buttons
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");

// States
let selection, finalResult, calculation, sum
let allSelections = []

divParent.classList.add("hidden")

const createDigitSelectionElement = (sum) => {
    // Create for each selection one element
    const div = document.createElement("div");
    div.classList = 'calc-digit'
    div.innerText = sum
    divHistory.appendChild(div)
}
const createResultElementOnly = (num) => {
    // Remove all existing elements before creating single result element
    divHistory.innerHTML = '';
    const div = document.createElement("div");
    div.classList = 'calc-digit'
    div.innerText = num
    divHistory.appendChild(div)
}

// Get selection
document.addEventListener('mouseup', function() {
    selection = window.getSelection().toString() // Get Selection as a string
    if (selection && !isNaN(selection)) {
        // Hide calculator first
        divParent.classList.remove("hidden")
        let selectionToNumber = Math.floor(selection * 100) / 100 // Convert string to number and use also dot-decimals of 2 (comma-decimals following)
        allSelections.push(selectionToNumber)
        console.log(allSelections)

        // Create always a div element and add new number in each div
        createDigitSelectionElement(selectionToNumber)
        // spanSingleNumber.innerText += selectionToNumber
        window.getSelection().empty(); // Remove selection (in Chrome only?)
    }
});

// Addition
add.addEventListener('click', () => {
    window.getSelection().empty(); // Remove selection (in Chrome only?)
    sum = allSelections.reduce((a, b) => a + b, 0) // Summarize all numbers in the array
    divResult.innerText = sum
    // Create always a div element and add new number in each div
    // createResultElementOnly(sum)
    createDigitSelectionElement(sum) // Solution for showing Zwischenschritt 
    allSelections.length = 0 // Clear array before summarizing previous to avoid double value
    allSelections.push(sum)
    divHistory.lastElementChild.style.border = '2px solid #749fe4' // Styling Zwischenschritt, is optional, only if createDigitSelectionElement(sum) is used
})

// Substraction
subtract.addEventListener('click', () => {
    window.getSelection().empty(); // Remove selection (in Chrome only?)
    let firstNumber = allSelections.shift()
    sum = allSelections.reduce((a, b) => a + b, 0) // Summarize all numbers in the array without the first
    calculation = firstNumber - sum
    divResult.innerText = calculation
    // Create always a div element and add new number in each div
    // createResultElementOnly(sum)
    createDigitSelectionElement(calculation) // Solution for showing Zwischenschritt 
    // divHistory.innerText = calculation
    allSelections.length = 0
    allSelections.push(calculation)
    divHistory.lastElementChild.style.border = '2px solid #749fe4' // Styling Zwischenschritt, is optional, only if createDigitSelectionElement(sum) is used
})

// Multiplication
multiply.addEventListener('click', () => {
    window.getSelection().empty(); // Remove selection (in Chrome only?)
    let firstNumber = allSelections.shift()
    sum = allSelections.reduce((a, b) => a + b, 0) // Summarize all numbers in the array without the first
    calculation = firstNumber * sum
    divResult.innerText = calculation
    divHistory.innerText = calculation
    allSelections.length = 0
    allSelections.push(calculation)
})

// Division
divide.addEventListener('click', () => {
    window.getSelection().empty(); // Remove selection (in Chrome only?)
    let firstNumber = allSelections.shift()
    sum = allSelections.reduce((a, b) => a + b, 0) // Summarize all numbers in the array without the first
    calculation = firstNumber / sum
    divResult.innerText = calculation
    divHistory.innerText = calculation
    allSelections.length = 0
    allSelections.push(calculation)
})

// selectionOne has to be an array with ALL numbers multiplied together. If one number is only in array, use just one. 
// e.g. selectionOne = [2014, 20, 8], remove first number, e.g. selectionOne = [20, 8] and multipliy remaining
// e.g. selectionOne = [28], e.g. calculation = numbersToCalculate - selectionOne