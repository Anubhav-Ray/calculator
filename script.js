const btn = document.querySelectorAll('.calculator__key');
const output = document.querySelector('.calculator__output');
let displayNum='';
let result=0;
let lenght=0;
let operator='';
let operatorIndex
let firstOperand=0;
let secondOperand=0;
function init() {



    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (event) => {
            lenght=displayNum.length;
           let target = event.target.textContent;

            if(!isNaN(Number(target)))
            {
                let digit=target;
               addDigits(digit);
            }
            if(target==='Del')
            {
               deleteDigits(displayNum);
            }
            if(target==='+'||target==='-'||target==='x'||target==='÷'){
                displayNum+=target;
                operator=target;
                 operatorIndex=displayNum.indexOf(target);
                firstOperand=Number(displayNum.substring(0,operatorIndex));
                output.textContent = displayNum;
            }
            if(target==='='){
                secondOperand=displayNum.substring(operatorIndex+1);
                displayCal(operator,Number(firstOperand),Number(secondOperand));
            }
            if(target==='AC'){
                displayNum='0';
                output.textContent = displayNum;
            }

        })
    }
}



function displayCal(tar,num1,num2) {
    switch (tar){
        case '+':
            result=num1+num2;
            displayNum=String(result);
            output.textContent = displayNum;
            break;
        case '-':
             result=num1-num2;
             displayNum=String(result);
             output.textContent = displayNum;
            break;
        case 'x':
             result=num1*num2;
             displayNum=String(result);
             output.textContent = displayNum;
            break;
        case '÷':
            if(num2!=0)
            {
                result=num1/num2;
                displayNum=String(result);
                output.textContent = displayNum;
            }
            else{
                output.textContent = 'Math Error';
            }

        default:
            output.textContent=displayNum;
    }
}
function addDigits(num) {
    displayNum+= num;
    output.textContent= displayNum;
}

function deleteDigits(num){
    let len=num.length;

    displayNum=num.substring(0,len-1);

    output.textContent= displayNum;
}


init();
