console.log("From my external files");

document.write("Hello ........Welcome to our group");
document.getElementById("greeting").innerHTML="Hello------------"

var price=200;
var quanity=10;
console.log("price is "+price);
document.getElementById("greeting").innerHTML="price---"+price;
document.getElementById("greeting").innerHTML="quanity---"+quanity;
document.getElementById("greeting").innerHTML="multiplication is"+price*quanity;


document.getElementById("greeting").innerHTML="<h2>price..."+price+"</h2>";
document.getElementById("greeting").innerHTML="<br><h2>quanity..."+price+"<h2>";


var price=300;
var quanity=10;
var str1="price is "+price;
var str2="qty is "+quanity;
var str3="total is " +(price*quanity);
console.log("str1");
console.log("str2");
document.getElementById("greeting").innerHTML = str1 + "<br>" + str2;
document.getElementById("greeting").innerHTML = "<p>"+str1 + "<br>" + str2+"<br>"+str3+"</p>";
document.getElementById("greeting").style.color="red";

//boolean usiing

var check=true;
var unchecked=false;
console.log("condition is "+check);
console.log("Radio button is "+unchecked);


//constant 
const pivalue=3.14;
console.log("pi value is "+pivalue);


{
    let people = 10;
    var apple = 100;
    console.log("number of people" + people);
}

//console.log("number of people"+people);
console.log("number of apples "+apple);

//Array [0,1,2,3]
var items=["apple","orange","grape"];
console.log("array length"+items.length);
console.log(items[1]);



