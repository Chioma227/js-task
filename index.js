// if (a string with zero)

let myStr = "0"

if ("0"){
    alert("hello!")
}


//the name of javascript 

let message = prompt("\"What is the \"official\" name of JavaScript?\"")
if (message == "ECMAScript"){
    alert("Right!")
}
else{
   alert("You don't know? ECMAScript!")
}


//show the sign

let num = prompt("enter number!")

if (num > 0){
    alert("1")
}
else if(num < 0){
    alert("-1")
}
else{
    alert("0")
}


//re-writing "if" into "?"

let result = (a + b < 4)? "below" : "over";


// re-writing "if else" into "?"
let login = prompt("who are you??")
let message2 = (login == "Employee") ? "Hello" : (login == "Director") ? "Greetings" : (login == "") ? "no login" : "";
