let output=document.querySelector("#display");
let operation="";
let num1=0;
let num2=0;
let result=0;

function appendToDisplay(value){
    // console.log(value);
    output.value+=value;
}


function addListener(){
    console.log("adding listener");
    const nums = document.querySelectorAll('.number');
    // console.log(nums[0]);
    nums.forEach((num)=>{
        console.log("adding listener to nums");
        num.addEventListener('click',()=>{
            if(output.value==result){
                output.value="";
            }
            // console.log(num.value);
            appendToDisplay(num.value);
        })
    })
    const ops = document.querySelectorAll('.op');
    console.log(ops[4]);
    ops.forEach((op)=>{
        console.log("adding listener to ops");
        op.addEventListener('click',()=>{
            if(op.value=="="){
                if(output.value==""){
                    output.value=num1;
                    return;
                }
                num2=parseFloat(output.value);
                console.log(`num2 is ${num2}`);
                console.log("calling the calculating ${num1} ${num2} ${operation}");
                calculate(num1,num2,operation);
                return;
            }
            operation=op.value
            num1=parseFloat(output.value);
            console.log(`num1 is ${num1}`);

            output.value="";
        })
    })
}

function calculate(num1,num2,operation){
    console.log("calculating ${num1} ${num2} ${operation}");
    switch(operation){
        case "+":
            result=num1+num2;
            num1=0;
            num2=0;
            break;
        case "-":
            result=num1-num2;
            num1=0;
            num2=0;
            break;
        case "*":
            result=num1*num2;
            num1=0;
            num2=0;
            break;
        case "/":
            result=num1/num2;
            num1=0;
            num2=0;
            break;
        case "C":
            output.value="";
            num1=0;
            num2=0;
            break;
        default:
            break;
    }
    output.value=result;
}

addListener();