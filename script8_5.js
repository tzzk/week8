//Arrays and index calling
//Presidence (++ , --, (),)
//Operators (+ ,- , * , % ,remainder)





var student = [];
var cars = new Array();
student = ["Maung Maung", "Hla Hla", "Thiri"];

//alert("Number of students \n " + student.length);

alert(`Number of students ${student.length}`);
//document.getElementById("students").innerHTML = student[0] + ","+ student[1]+ ","+ student[2];
document.getElementById("students").innerHTML =`${student[0]},${student[1]},${student[2]}`;

// index number (array) mha string(array -text)  calling
cars[0]="Bitz";
cars[1]="Kia";
cars[2]="Marcedes";
document.getElementById("cars").innerHTML=cars[0];

//string(array -text) ko index calling
document.getElementById("students").innerHTML="Index "+student.indexOf("Thiri");


//sum two elements (total array)
console.log(student.concat(cars));



var names=student.concat(cars);
//Removing (hnote chin the last var) from array
names.pop();
console.log(names);
//adding (adding one or more) into array
names.push("end");
console.log(names);
//sorting
names.push(40);
console.log(names);
console.log(names.sort());

//Exercise
var products=["apple","samsung","Mi"];
var items=["book","pen","clip"];
console.log(products.concat(items));
document.getElementById("products").innerHTML="Index of samsung is "+products.indexOf("samsung")+"<br>"+"Product are "+products+"<br>"+"Items are "+items+"<br>"+"Merge is "+ (products.concat(items))+"<br>"+"Printout items rooms are"+products.indexOf("samsung");


//calculating imply x sum and substract(-) and divided by

var item_price=15000;
var qty=50;
var total=item_price*qty;
console.log("total cost is "+total);

var sub1=78;
var sub2=20;
var sub3=66;
var totalmark=sub1+sub2+sub3;
console.log("Total mark is "+totalmark);
console.log("Avg mark is "+(totalmark/3.0));

var formula=22+(5-3)/2;
console.log("Result is "+formula);
var formula1=2*3/2+3;
console.log("Result of formula1 is "+formula1);

var mark=[10,20,30];
console.log(mark[0]+mark[1]+mark[2]);
var totalmark = mark[0] + mark[1] + mark[2]/2;


//prefix or postfix ++ or --
var x=100;
x++;
console.log("postfix of x = "+x);
++x;
console.log("prefix of x "+x);
var y=2;
var result=++x*y;
console.log("result is "+result);// ++ ko ayin sum tal p ma 2 nae x;
var result1=x++*y;
console.log("result1 "+result1)

var z=50;
z--;
console.log("postfix of z="+z);
--z;
console.log("prefix of z "+z);
var a=3
var result2=z--*a;
console.log("result2 "+result2);

var num1=5;
var result=num1--*2;
console.log("num1 "+result);
console.log("num 1---"+num1);

//remainder
var even=15;
var remainder=15%2;
console.log("remainder is "+remainder);

//using assignment with variable
even%=2;
console.log("remainder is "+even);

x+=y--;
console.log("x "+x);
console.log("y is "+y);
x -= y;
console.log("x " + x);
x *= y;
console.log("x  " + x);




