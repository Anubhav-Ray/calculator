const btn = document.querySelectorAll('.calculator__key');
const output = document.querySelector('.calculator__output');
let displayNum='';
let result=0;
let lenght=0;
// let operator='';
// let operatorIndex
let firstOperand=0;
let secondOperand=0;


function init() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (event) => {
            // lenght=displayNum.length;
           let target = event.target.textContent;

            if(!isNaN(Number(target))) // results in true  as NaN means it returns false if something is  number so negation of it is true.
         {
                let digit=target;
               addDigits(digit);
            }
            if(target==='Del')
            {
               deleteDigits(displayNum);
            }
            if(target==='+'||target==='-'){
                displayNum+=target;

// Self implementation for solving complex expression 
                // operator=target;
                //  operatorIndex=displayNum.indexOf(target);
                // firstOperand=Number(displayNum.substring(0,operatorIndex));
                output.textContent = displayNum;
            }
            if(target==='x')
            {
                displayNum+='*';
                output.textContent = displayNum;
            }
            if(target==='÷')
            {
                displayNum+='/';
                output.textContent = displayNum;
            }
            if(target==='='){

               try{
                 result=eval(displayNum);
                 output.textContent=result;
                 displayNum=result; // Used to store the value after calculation or result of previous calculation
               }
               catch(error){
                output.textContent='error';
                displayNum='';
               }
                
                


// Self implementation for solving complex expression : not able to achieve it...


                // lenght=displayNum.length;
                // secondOperand=displayNum.substring(operatorIndex+1);
                // for(let  j=0;j<lenght;j++)
                // {
                //     if(displayNum[j]=='+'||displayNum[j]=='-'|| displayNum[j]=='x'||displayNum[j]=='÷')
                //     {
                //         firstOperand=Number(displayNum.substring(0,j));
                //        for(let k=j;k<lenght;k++)
                //        {
                //         if(displayNum[k]=='+'||displayNum[k]=='-'|| displayNum[k]=='x'||displayNum[k]=='÷')
                //         {
                //             secondOperand=Number(displayNum.substring(j+1,k));
                //             displayCal(displayNum[j],Number(firstOperand),Number(secondOperand));
                //             j=k;
                //             break;
                //         }
                        
                       
                //     }
                //      }
                // }
                // displayCal(operator,Number(firstOperand),Number(secondOperand));
            }
            if(target==='AC'){
                displayNum='';
                output.textContent = 0;
            }

        })
    }
}
// function displayCal(tar,num1,num2) {
//     switch (tar){
//         case '+':
//             result=num1+num2;
//             displayNum=String(result);
//             output.textContent = displayNum;
//             break;
//         case '-':
//              result=num1-num2;
//              displayNum=String(result);
//              output.textContent = displayNum;
//             break;
//         case 'x':
//              result=num1*num2;
//              displayNum=String(result);
//              output.textContent = displayNum;
//             break;
//         case '÷':
//             if(num2!=0)
//             {
//                 result=num1/num2;
//                 displayNum=String(result);
//                 output.textContent = displayNum;
//             }
//             else{
//                 output.textContent = 'Math Error';
//             }

//         default:
//             output.textContent=displayNum;
//     }
// }
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
