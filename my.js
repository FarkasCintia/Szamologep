//Állapotok. konstatnsokat
const STATUS_FIRSTNUM = "firstnum";
const STATUS_SECONDNUM  = "secondnum";
const STATUS_OPERAND = "operand";
const STATUS_DONE = "done";

//Változók
let number1 = null;
let number2 = null;
let operand = null;
let status = STATUS_FIRSTNUM;


// Az elemek összegyűjtése
//kijelzők
let displayNumber1 = document.getElementById("displayNumber1");
let displayNumber2 = document.getElementById("displayNumber2");
let displayOperand = document.getElementById("displayOperand");

//operandus gombok
let buttonAdd = document.getElementById("buttonAdd");
let buttonMinus = document.getElementById("buttonMinus");
let buttonTimes = document.getElementById("buttonTimes");
let buttonDivide = document.getElementById("buttonDivide");
let buttonEquals = document.getElementById("buttonEquals");
const buttonTorol = document.getElementById("buttonTorol");


//szám gombok
let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

//Események, esemény kezelés: Fliratkozunk az eseményre
//operandus click
buttonAdd.addEventListener("click", function(){OnOperandClick("+")});
buttonMinus.addEventListener("click", function(){OnOperandClick("-")});
buttonTimes.addEventListener("click", function(){OnOperandClick("*")});
buttonDivide.addEventListener("click", function(){OnOperandClick("/")});
buttonEquals.addEventListener("click", function(){OnOperandClick("=")});
buttonTorol.addEventListener("click", TorolClick);

//number click
button0.addEventListener("click", function(){OnNumberClick(0)});
button1.addEventListener("click", function(){OnNumberClick(1)});
button2.addEventListener("click", function(){OnNumberClick(2)});
button3.addEventListener("click", function(){OnNumberClick(3)});
button4.addEventListener("click", function(){OnNumberClick(4)});
button5.addEventListener("click", function(){OnNumberClick(5)});
button6.addEventListener("click", function(){OnNumberClick(6)});
button7.addEventListener("click", function(){OnNumberClick(7)});
button8.addEventListener("click", function(){OnNumberClick(8)});
button9.addEventListener("click", function(){OnNumberClick(9)});


//Eseménykezelő függgvények

//Műveletek kezelése
function OnOperandClick(currentOperand){

    switch (status) {
        case STATUS_DONE:
            if (currentOperand=="=") {
                break;
            }
            status = STATUS_OPERAND;
            SetOperand(currentOperand);
            break;
    
        case  STATUS_FIRSTNUM:
            if (currentOperand=="=") {
                break;
            } 
            status = STATUS_OPERAND;
            SetOperand(currentOperand);
            break

        case STATUS_OPERAND:
            if (currentOperand=="=") {
                break;
            }
            SetOperand(currentOperand);
            break;

        case STATUS_SECONDNUM: 
            //számold ki
            let answer = Math.round(eval(number1 + operand + number2)*1000)/1000;
            //berakni az első helyre
            SetNumber1(answer);
            //2. szám ürítése
            SetNumber2(null);
            if (currentOperand == "=") {
                status= STATUS_DONE
                SetOperand(null)
            }else{
                SetOperand(currentOperand)
                status = STATUS_OPERAND;
            }

    }

    console.log(status, currentOperand);
}

//számok bevitele
function OnNumberClick(currentNumber){
    //állapot vizsgálat
    switch (status) {
        case STATUS_FIRSTNUM:
            SetNumber1(number1 * 10 + currentNumber)

            break;

        case STATUS_OPERAND:
            status = STATUS_SECONDNUM;
        
        case  STATUS_SECONDNUM:
            SetNumber2(number2 * 10 + currentNumber);
            break;   

        case STATUS_DONE:
            SetNumber1(currentNumber);
            status = STATUS_FIRSTNUM;
            break;  
    }
    
    console.log(status, currentNumber);
}




//Értékadó függvények
//number1
function SetNumber1(value){
    number1 = value;
    displayNumber1.innerText = value;
}
//number1
function SetNumber2(value){
    number2 = value;
    displayNumber2.innerText = value;
}
//operand
function SetOperand(value){
    operand = value;
    displayOperand.innerText = value;
}

function TorolClick() {
    switch (status) {
        case STATUS_FIRSTNUM:
            const újérték = Math.floor(number1/10);
            displayNumber1.innerHTML = újérték;
            number1 = újérték;
            break;

            case STATUS_SECONDNUM:
                const újújérték = Math.floor(number2/10);
                displayNumber2.innerHTML = újújérték;
                number2 = újújérték;
                break;

        default:
            alert("Nemműködik")
            break;
    }
}