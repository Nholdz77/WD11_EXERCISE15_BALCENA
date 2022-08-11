

// function firstFunction (){
//     let num1 = 12;
//     let num2 = 11;
//     let result = num1 + num2;
//     alert(result);
// }

// firstFunction();




// function firstFunction (num1, num2){
//     let result = num1+ num2;
//     alert(result);
// }


// firstFunction(12, 11);

// function with parameters

// function firstFunction (num1, num2){
//     let result = num1+ num2;
//     return result;
// }


// alert(firstFunction(12, 11));

// declaration with parameters and return



// const sumFunction = function(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = Number(num1) + Number(num2);
//     return result;
// };
// const minusFunction = function(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = Number(num1) - Number(num2);
//     return result;
// };
// const multiplyFunction = function(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = Number(num1) * Number(num2);
//     return result;
// };
// const divideFunction = function(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = Number(num1) / Number(num2);
//     return result;
// };

// alert(firstFunction(12, 11));

// sample function expression
// const tempConvertFunction = function(){
//     let num1 = document.getElementById("num1").value;
//     let result = (Number(num1) * 9/5) + 32 + " F";
//     // return result;
//     document.getElementById("tempOutput").innerHTML = result;
// }
// arrow function
// const tempConvertFunction = () => {
//     let num1 = document.getElementById("num1").value;
//     let result = (Number(num1) * 9/5) + 32 + " F";
//     // return result;
//     // document.getElementById("tempOutput").innerHTML = result;
//     document.getElementById("answerNum").innerHTML = result;
// }

// comparison operators
// let sample1 = 10;
// let sample2 = 10;
// let compare = sample1 == sample2 equal to
// let compare = sample1 != sample2 not equal to
// let compare = sample1 < sample2  less than
// let compare = sample1 > sample2  greater than
// let compare = sample1 >= sample2  less than or equal to
// let compare = sample1 <= sample2  greater than or equal to
// let compare = sample1 === sample2  absolute equal to

// logical operators
// let compare = sample1 && sample2  AND statement
// let compare = sample1 || sample2  OR statement
// let compare = sample1 || sample2  absolute equal to

// alert(compare);
 

// conditional statement
// if and else statement
// let age = "ere";
// if(age >= 18){
// alert("Your are now an adult");
// }else if (age >= 15){
//     alert("You are a teenager");
// }else if(age < 15){
//     alert("You are still a kid");
// }else{
//     alert("please enter a valid number")
// }

// let day;
// let selector = "August 8, 2022";


// // alert (new Date().getDay)

// switch (selector) {
// case 1:
//     day= "monday";
//     alert(day);
//     break;
// case 2:
//     day= "Tuesday";
//     alert(day);
//     break;
// case 3:
//     day= "Wednesday";
//     alert(day);
//     break;
// case 4:
//     day= "Thursday";
//     alert(day);
//     break;
// case 5:
//     day= "Friday";
//     alert(day);
//     break;
// case 6:
//     day= "Saturday";
//     alert(day);
//     break;
// case 7:
//     day= "Sunday";
//     alert(day);
//     break;
// default: 
// alert("please enter valid option");
// break;
// }




const evenNumberFunction = function(){
let inputnum = document.getElementById("num1").value;
if (inputnum%2 == 0){
    alert(`${inputnum} is an even number`);
} else {
    alert(`${inputnum} is not an even number`);
}
}