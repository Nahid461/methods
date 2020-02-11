//methods

//Function without parameter and does not return the value

//Define the function

function add1() {
    let value1 = 10;
    let value2 = 20;

    console.log(value1 + value2);
}

// calling function
add1();

//function without parameter and return the value
//define the function

function add2(){
    let value1 = 10;
    let value2 = 20;

    let result = value1 + value2;
     return result;
} 

let result = add2();
console.log(result);
console.log(add2());

//function with parameter and does not return the value
//define the function

function add3(numValue1, numValue2){

    console.log(isNaN(numValue1));
//using type of operator to check data type
    if(typeof(numValue1)==="number"&& typeof(numValue2)==="number"){
        console.log(numValue1*numValue2);
        }
         else{
           console.log("Argument should be a number"); 
             }
 //using isNan function to check weather string or not   
    if(!isNaN(numValue1) && !isNaN(numValue2)){
       console.log(numValue1 * numValue2);
     }
     else{
       console.log("argument should be a number");    
     }
}

//calling function
add3(10,20);

add3("nahid","fatima");

//function with parameter and with return the value
//define the function

function add4(numValue1,numValue2){

    if(typeof(numValue1)==="number" && typeof(numValue2)==="number"){
      return numValue1 + numValue2;  
    }
    else{
        return("argument should be number");
    }
}

result = add4(10,20);
result = add4("hate","javascript");

if(typeof(result)==="number"){
console.log(result*12);
}
else if(typeof(result)==="string"){
    console.log(result); 
}

//User Login Functionality
function login(strUsername,strPassword){
    let tempUsername ="fatimanahid04";
    let tempPassword ="1234";
    if(strUsername===tempUsername && strPassword===tempPassword){
        return true;
    }
    else{
        return "user name and password does not match.";
    }
}

result =login("fatimanahid04","1234");
console.log(result);


///////////////

function add5(numValue1,numValue2){
    if(typeof(numValue1)==="number" && typeof(numValue2)==="number"){
        return numValue1 + numValue2;
    }
    else{
        return "argument should be a number";
    }
}

function multi12(resultObj){
    if(typeof(resultObj)==="number"){
        return resultObj * 12;
    }
    else{
        return "argument should be a number";
    }
}

function add10(resultObj){
    if(typeof(resultObj)==="number"){
        return resultObj + 10;
    }
    else{
        return "argument should be a number";
    }
}


function onButtonClickEvent(){
    let result = add5(10,20);
    result = multi12(result);
    console.log(add10(result));

}



