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

// Get the calculator elements
let finalResult = document.getElementById("finalResult");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");

// Initialize the calculator state
let selectionOne, substractingNumber, dividingNumber, multiplyNumber = null;
let selection, mainSelection

let numbersToCalculate = []

document.addEventListener('mouseup', function() {
    mainSelection = window.getSelection();
    selection = mainSelection.toString();
    if (selection && !isNaN(selection)) {
        numbersToCalculate.push(selection)
        console.log(`numbers to calculate: ${numbersToCalculate}`);
        selectionOne = selection
        substractingNumber = selection
        dividingNumber = selection
        multiplyNumber = selection
        console.log(`selectionOne: ${selectionOne}`);
        divHistory.innerText += selectionOne + ', '
    }
});

add.addEventListener('click', () => {

    let calculation = numbersToCalculate.reduce((a, b) => {return parseInt(a) + parseInt(b)}, 0)
    console.log(calculation);
        finalResult.innerText = calculation

        console.log('finalresult: ', finalResult.innerText);
        selectionOne = null;

        substractingNumber = null;
        dividingNumber = null;
        multiplyNumber = null;
        numbersToCalculate = []
        divHistory.innerText = ''

    })

// selectionOne has to be an array with ALL numbers multiplied together. If one number is only in array, use just one. 
// e.g. selectionOne = [2014, 20, 8], remove first number, e.g. selectionOne = [20, 8] and multipliy remaining
// e.g. selectionOne = [28], e.g. calculation = numbersToCalculate - selectionOne

subtract.addEventListener('click', () => {
    
    // numbersToCalculate.pop()
        numbersToCalculate.reduce((a, b) => {return parseInt(a) - parseInt(b)}, 0)
        const allSelectedNumbersAfterTheFirst = numbersToCalculate.shift()
        console.log(allSelectedNumbersAfterTheFirst);
        parseInt(substractingNumber)
        let calculation = allSelectedNumbersAfterTheFirst - substractingNumber
        console.log(calculation);
        finalResult.innerText = calculation
        numbersToCalculate = []
        substractingNumber = null;

        console.log('finalresult: ', finalResult.innerText);
        selectionOne = null;
        dividingNumber = null;
        multiplyNumber = null;
        divHistory.innerText = ''

})

multiply.addEventListener('click', () => {

    // numbersToCalculate.pop()
        numbersToCalculate.reduce((a, b) => {return parseInt(a) - parseInt(b)}, 0)
        const allSelectedNumbersAfterTheFirst = numbersToCalculate.shift()
        parseInt(dividingNumber)
        let calculation = allSelectedNumbersAfterTheFirst * dividingNumber
        console.log(calculation);
        finalResult.innerText = calculation

        console.log('finalresult: ', finalResult.innerText);

        selectionOne = null;
        substractingNumber = null;
        dividingNumber = null;
        multiplyNumber = null;
        numbersToCalculate = []
        divHistory.innerText = ''

})

divide.addEventListener('click', () => {

    // numbersToCalculate.pop()
        numbersToCalculate.reduce((a, b) => {return parseInt(a) - parseInt(b)}, 0)
        const allSelectedNumbersAfterTheFirst = numbersToCalculate.shift()
        parseInt(dividingNumber)
        let calculation = allSelectedNumbersExceptTheFirst / dividingNumber
        console.log(calculation);
        finalResult.innerText = calculation

        console.log('finalresult: ', finalResult.innerText);
        selectionOne = null;
        substractingNumber = null;
        dividingNumber = null;
        multiplyNumber = null;
        numbersToCalculate = []
        divHistory.innerText = ''

})
