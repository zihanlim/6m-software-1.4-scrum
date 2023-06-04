//This is a sketchbook used for my personal study of freecodecamp's Learn JavaScript - Full Course for Beginners.

//Coaching Session 03-06-2023

//01.Boolean Operators
let isDark = false;
let isTall = true;
let isHandsome = true;

console.log(isDark && isHandsome)//&&AND
console.log(isDark || isHandsome)//||OR
console.log(!isHandsome)//!NOT
console.log((!isDark||isHandsome)&& isTall)

//02.Control Flow
let x = 10;
let y = 4;

//method 1 Conditional operator
if(x-y>5){
    console.log("x-y is greater than 5");
}
else{console.log("x-y is less than or equal to 5")} // else block is optional

//method2 Conditional (ternary) operator
let result=(x-y>5)?"Greater tha n 5":"Less than or equal to 5"; 
console.log(result)

//03.Switch-Case (Discrete values for our pattern)
let direction ="N"; //case sensitive
switch(direction){
    case"N":
        console.log("You chose North");
        break;
    case"E":
        console.log("You chose East");
        break;
    case"W":
        console.log("You chose West");
        break;
    case"S":
        console.log("You chose South");
        break;
    default:
        console.log("No corresponding direction");
}

//04.Loops 
//while(//while check first before looping)
while (condition) {
    // code block to be executed
  }
//do while
do {
    // code block to be executed
  }
  while (condition);
//for loop
for (statement 1; statement 2; statement 3) {
    // code block to be executed
  }
//do-while runs first before checking
let x= 1;
    console.log("Counting up...")
while (x<=15){
    console.log(x)
    x++;
}
console.log("15!")

//count all odd numbers less than 15
for(let count= 1;count<=15;count++)
{
    if (count % 2 !==0)
    {
    console.log(count);
    }
}

******************//count all odd numbers less than 15
let x=1;
while (x<=15) {
    x++      
  }
  if(count % 2 !==0){console.log(x)} 

*****************//Arrays
const beatlesMember = ['John','Paul','George','Ringo'];
console.log(beatlesMember[1]);

for(let counter = 0;counter)



//5.Objects
const pet = {
    name:"Cheddar",
    species:"Cat",
    age: 5,
    isPlayful: true,
    hobbies: ['playful','cuddling','eating treats']
}

console.log(pet.name)
console.log(pet.age)
console.log(pet['age'])//if we know the specific property we use

let word='age'
console.log(pet.word)






//-------------------------------------------------------------------------------------------------------------------


//1.Escape sequence
var myStr="FirstLine\n\theader\n\tcontents\n\tconclusion\n\rSecondLine\"\n\r'Thirdline'\b\f"
console.log (myStr)


//2.lengh
var myNamelength=0
var myName='limzihan'

var myNamelength= myName.length
console.log(myNamelength) 


//3.Last character of string

var myStr='jello world!'
console.log (myStr[0])
//cannot change individual letter like that  //var myStr[0]='h'
var myStr='hello world'
console.log(myStr)
//last character of string//
console.log(myStr[myStr.length-1])
//last third character(third character from the back)
console.log(myStr[myStr.length-3])


//4.Wordblanks and Function
//Function
function wordBlanks(noun,adj,verb,adverb){
var result="";
result=result+"The "+adj+" "+noun+" "+verb+" away very "+adverb
return result
}
console.log(wordBlanks('dog','big','ran','quickly'))

//Reusable
function greetings(){
    console.log('hello world!')
}
greetings()

//Arguments
function letsdosomemaths(a,b,c,d){
    console.log(a+b-c+d)
}
letsdosomemaths(2,4,5,2)



//5. Array Access,Modify
var myArray=['apple','pear','orange','grapes'];
var myArraycountry=[['SG',65],['HK',852],['MY',60]];
//Access
console.log(myArray[0])
console.log(myArraycountry[0])
//Modify
myArray[0]='banana'
console.log(myArray)
//Access/Modify Multi-dimensional Array
myArraycountry[0][1]=88
console.log(myArraycountry)



//6.push(): add into the END an Array 
myArray=[['john',18],['tom',31]]
console.log(myArray)
myArray.push(['mary',24])
console.log(myArray)
//unshift(): add into the START of an Array
myArray.unshift(['sykr',17])
console.log(myArray)
//pop():remove FINAL ELEMENT from an Array
myArray.pop()
console.log(myArray)
//shift:remove FIRST ELEMENT from an Array
myArray.shift()
console.log(myArray)
//Access and Modify an Array
myArray[0][0]='jackson'
console.log(myArray)
//creating/pushing into an empty array
myArrayempty=[]
myArrayempty.push('john')
console.log(myArrayempty)



//7.Global and Local scope in a Function
//Example1:
var outerWear='jacket'//global scope
console.log(outerWear)

function outerClothing(){
    var outerWear='sweater'; //local scope
    return outerWear;
}
console.log(outerClothing())
console.log(outerWear)

//Example2:
var outerWear='jacket'//global scope
console.log(outerWear)

function outerClothing(){
    outerWear='hoodie';//global scope (no var, scope will be global)
    return outerWear;
}

console.log(outerClothing())
console.log(outerWear)



//8.Return function
let sum=10
function addThree(){
    sum+=3;
    return sum
}
function addFive(){//undefined because function does not return value//
    sum+=5;
}
console.log(addThree()) //13
console.log(addFive()) //undefined



//9. Assigning value to a variable with a return function
let basket=10
function apple(num){
    return (num+5)/3//this is a return function
}
basket=apple(10)//Assigning value to a variable with a return function
console.log(basket)


//10. stand in line adding an item in an array using function
let lineArr=[1,2,3,4,5]
// i want to push item into the back of the array
function numLine(arr,item){
    arr.push(item);//function adds new item to the back
    return arr.shift();//function remove first item from front// return removed value when logged
    
}
console.log('Before:'+JSON.stringify(lineArr))
console.log(numLine(lineArr,6))
console.log('After:'+JSON.stringify(lineArr))

//11. Booleans(true/false)
//selection criteria for guy to be model = tall,dark handsome. Meet two criteria to be selected.

let points=0
function criteria(isTall,isDark,isHandsome){//criteria    
        if (isTall>=1.8){
            points++;
        }
        if (isDark==='yes'){
            points++;
        }
        if (isHandsome==='yes'){
            points++;
        }
            return points; 
}

function isModel(){
    return criteria(1.8,'yes','yes')>=2
}

console.log('This guy can be a model? '+isModel())



//12.If statements
function truefalse(wasthatfalse){
    if (wasthatfalse){
        return 'yes,true';
    }
    return 'no,false';
}
console.log(truefalse(false));

x=0
function truefalse(x){
    if (x>5){
        return 'yes,its larger';
    }
    return 'no,its smaller';
}
console.log(truefalse(1));

//12.Equality statement
//= (assignment operator)
//== (equal?) 3==3//true 3=='3'//true
//=== (strickt equality) 3===3//true 3==='3'//false
//!= (not equal?) 3!=3//false 3!='3'//false
//!== (strictly not equality) 3!==3//false 3!=='3'//true

//13.And or Statement. Fulfilling multiple statement
//ex1
function checkRange(val){
    if (val<50){
        if(val>25){
            return 'yes'
        }
    }
return 'no'
}
console.log(checkRange(10))

//ex2
function checkRange(val){
    if (val<50&& val>25){       
            return 'yes'
        }
    
return 'no'
}
console.log(checkRange(30))

//ex3
function checkRange(val){
    if (val<=10){       
            return 'outside'
        }
    if (val>=30){       
            return 'outside'
        }
    return'inside'
}
console.log(checkRange(20))

//ex4
function checkRange(val){
    if (val<=10){       
            return 'outside'
        }
    if (val>=30){       
            return 'outside'
        }
    return'inside'
}
console.log(checkRange(20))

//ex5
function checkRange(val){
    if (val<=10||val>30){       
            return 'outside'
        }

    return'inside'
}
console.log(checkRange(20))


//14.Else
function testelse(val){
    if(val>10){
        return "greater than 10"
    }
    else if(val<5){return "lesser than 5"}
    else return 'between 5 and 10'
}
console.log(testelse(7))

//15.if/else if
function testnum(num){
    if(num>=20){
        return'Huge'
    }
    else if(num<20){
        return 'Large'
    }
    else if(num<15){
        return 'Medium'
    }
    else if(num<10){
        return 'Small'
    }
    else if (num<5){
        return 'Tiny'
    }
}
console.log(testnum(17))

//16.Golf code
let scorename=["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"]

function golfScore(par,stroke){
    if(stroke=1){
        return scorename[0]
    }
    if(stroke<=par-2){
        return scorename[1]
    }
    if(stroke=par-1){
        return scorename[2]
    }
    if(stroke=par){
        return scorename[3]
    }
    if(stroke=par+1){
        return scorename[4]
    }
    if(stroke=par+2){
        return scorename[5]
    }
    if(stroke>=par+3){
        return scorename[6]
    }
}
console.log(golfScore(5,4))

//17.switch statement(instead of chain if/else statement)
//if else method
function testswitch(num){
    if(num==1){
        return "alpha"
    }
    if(num==2){
        return "beta"
    }
    if(num==3){
        return "gamma"
    }
    if(num==4){
        return "delta"
    }
    else{
        return "out of domain"
    }
}
console.log(testswitch(4))
//switch method
function testswitch(num){
    switch(num){
        case 1://if
            return"alpha";
            break;
        case 2:
            return"beta";
            break;
        case 3:
            return"gamma";
            break;
        case 4:
            return"delta";
            break;
        default://else
            return"error"
    }
}
console.log(testswitch(3))

//18.Multiple identical options in switch statements
function bandnum(num){
    switch(num){
        case 1:
        case 2:
        case 3:
        return'low'
        break
        case 4:
        case 5:
        case 6:
        return'mid'
        break
        case 7:
        case 8:
        case 9:
        return'high'
        break
    }
}
console.log(bandnum(3))

//19.Objects
let mydog={
    'name':'camper mini',
    'age': 13,
    'puppy':2,
    'friend':['tom','jerry'],
    'morning diet': 'cookie',
    15:'lucky',
    16:'mimi'
};

// let friendNumber=16;
// let friend=mydog[friendNumber];
// console.log(friend)

let favDiet='morning diet';//create a variable
let favFood=mydog[favDiet]
console.log(favFood)//accessing object properties with Variables

console.log(mydog[15])
console.log(mydog.age)//dot notation
console.log(mydog.name)
console.log(mydog['morning diet'])//bracket notation- unable to access obj with 'spacing'

//20.Add and Remove from Object
let mydog={
    'name':'camper mini',
    'age': 13,
    'puppy':2,
    'friend':['tom','jerry'],
    'morning diet': 'cookie',}

mydog.voice='woof!';//add
delete mydog['morning diet']//remove
console.log(mydog)

//21.Objects for lookup