// let inventory = ["shirt","pistol","bread"];

// console.log(inventory);
// inventory[10]="cheese";
// console.log(inventory);
// console.log(inventory.length);

// console.log(inventory[0].length + inventory[1].length + inventory[2].length);
// num1 =inventory[0].length;
// num2 =inventory[1].length;
// num3 =inventory[2].length;
// console.log((num1)+(num2)+(num3));

// console.log(inventory[0].length + inventory[1].length + inventory[2].length);
// inventory.push("cheese");
// console.log(inventory);
// inventory.pop();
// console.log(inventory);

// let levels = [
//   [1.1,1.2,1.3],
//   [2.1,2.2,2.3,2.4],
// //   [3.1,3.2]
// // ];
// // console.log(levels);

// // let removedItem = levels[1].pop();
// // levels[1].pop();
// // levels[1].push(removedItem);
// // levels[2].push(3.3);
// // console.log(levels.includes(levels[2]));

//  let inventory = {
//    "shirts":2,
//    "axe":1,
//   "bread":3,
//    5:4
//  }

//  console.log(inventory);
//  console.log(inventory["bread"]);
//  console.log(inventory.bread);

// // console.log(inventory[5]);
// // let keys = Object.keys(inventory);
// // let values = Object.values(inventory);
// // console.log(keys);
// // console.log(values);

//  inventory["pistol"] = undefined;
//  console.log(inventory);

//  const maxHealth = 100;
//  let currentHealth = 50;
//  let healingFactor = 40;


// // function heal1(){
// //   currentHealth += healingFactor;
// //   console.log(currentHealth);

// //   (currentHealth >maxHealth)?currentHealth = maxHealth:"";
// //   console.log(currentHealth);
// // }
// // console.log(currentHealth)
// // heal1();
// // heal1();

// function healByAmount(healAmount){
//    currentHealth += healAmount;
//   //console.log(currentHealth);

//   (currentHealth >maxHealth)?currentHealth = maxHealth:"";
//   return(currentHealth);
// }
// healByAmount(25);
// healByAmount(20);
// // function healByAmount1(p){
// //   p();
// // }
// // healByAmount1(healByAmount);
// console.log(healByAmount(25));
// function ab(){
//   d;
// }
// // d = 10;
// var d;
// console.log(d);
//"use strict"
// let array = ["a","b","c","e","d","f"];
// console.log(array.includes(7));
// num1 = 1;
// num2 = 4;
// console.log(array.slice(num1,num2));
// console.log(array.splice(2,2,"y","p"));
// let b = array.sort();
// console.log(b);
// console.log(array);
// console.log("The character \\ \t is called backslash.")
// let k = 3;
// console.log(k==3);
// console.log("------------------------------------------------");

// function movePlayer(pixelAmount,num ){
//   //return(6);
//   num++;
//   console.log(pixelAmount,num);
//   return 6;

// }
// var num = 30;
// movePlayer(100,num);
// console.log(movePlayer());
// function convert(celsius){
//   return celsius*1.8 + 32;
// }
//var num = 30;
// console.log(`fahrenheit is ${convert(30)}`);
// console.log(num);
// console.log("------------------------------------------------");
// let life = 9;
// let xPosition = 0;
// let keyPressed = "r";
// let endPosition = 5;
// let startPosition = 0;

// console.log(life);
// if (life == "9") {
//   xPosition += 1;
// }
// else if(life == "l"){
//   xPosition -= 1;
// }
// else{
//   xPosition = 50;
// }
//   console.log(xPosition);
// function move(){
// if(keyPressed == "r"){
//   if(xPosition < endPosition){
//     xPosition += 1;
//   }
// }
// else if(keyPressed == "l"){
//   if(xPosition > startPosition){
//     xPosition -= 1;
//   }
// }
// console.log(xPosition);
// }
// move();
// move();
// move();
// move();
// move();
// move();
// move();
// // let inventory = {
// //   "clothes":2,
// //   "tools":3,
// //   "food":5,
// //   "weapons":1
// // };
// // console.log(inventory.tools);
// // let values = Object.values(inventory);
// // console.log(values);


// // let sum = 0;
// // for(let i = 0; i<values.length;console.log("yehuda"),i++){
// // sum += values[i];
// // }
// // console.log(sum);
// // let names = ["Assaf","David","Eliyahu","Moshe"];
// // for(let i = names.length -1;i>=0;i--){
// //   console.log(names[i]);

// // }


// let numbersArray = [];
// for( i=0, g=1;i<10;i++,g++){
//   numbersArray.push(g);
//   if(numbersArray[i]%2 == 0)
// console.log(numbersArray[i]);
// }

//  console.log(numbersArray);

// // for(i =0;i<numbersArray.length;i++)
// // {
// // if(numbersArray[i]%2 == 0)
// // console.log(numbersArray[i]);
// // }

// // numbersArray.forEach(function(num){
// //  if(num%2 == 0){
// //    console.log(num);
// //  }
// //  console.log(num);
// // });

// let inventory = {
//   "clothes":2,
//   "tools":3,
//   "food":5,
//   "weapons":1
// };
// console.log(inventory["food"]);
// let values = Object.values(inventory);

// console.log(values);

// // newValues = [];
// // values.forEach(function(value){
// //    value +=1;
// //    console.log(value);
// //    newValues.push(value);
// //  }) 
// //  values = newValues;
// // console.log(newValues);
// // console.log(values);

// let keys = Object.keys(inventory);
// keys.forEach(function(key){
//   inventory[key] += 1;
// })
// console.log(inventory);

// // inventory.bag =1 ; 
// // console.log(inventory);
// for(let key of keys){
//   inventory[key] += 1;
// }
// console.log(inventory);

// for(let key of keys){
// console.log(key)
// }

// numbersArray.push(200,300,400,500,600,40,50);
// console.log(numbersArray);

// for(let num of numbersArray){
//   if(num >100){
//     break;
//   }
//   console.log(num);

// }

// let arr =[];
// let arr1 = [];
// arr.push([1,2,3],[4,5,6],[7,8,9]);
// for(let num of arr){
//   for(let num1 of num){
//    arr1.push(++num1)
//     console.log(num1);
//   }
// }
//  console.log(arr1);
// arr.forEach(function(num,x){
//   num.forEach(function(num1,y){
//     arr[x][y] = ++num1
//   })
// })
// console.log(arr);

//  for(let i in arr){
//   for(let j in arr[i])
//    arr[i][j]++
//  }
// console.log(arr);

// for(let i = 0;i<arr.length;i++){
//   for(let j = 0;j<arr[i].length;j++){
//     arr[i][j]++
//   }
// }
// console.log(arr);

// let inventory = {
//   "clothes" :5,
//   "food" :2,
//   weapons : 4,
//   "shirts": 4
// }
//  for(let i in inventory){
//    if(inventory[i]%2 == 0)
//    console.log(i);
//  }

//  for(let i in inventory){
//    console.log(inventory[i]);
//  }
//console.log("-------------------------------------------");

// let gameCharacter = {
//   name: "Assaf",
//   xPosition: 0,
//   yPosition: 0,
//   move: function(xAmount,yAmount){
//       this.xPosition += xAmount;
//       gameCharacter.yPosition += yAmount;
  
//   }
// }

// console.log(gameCharacter.name);
// console.log(gameCharacter["name"]);
// gameCharacter.move(20,15);
// console.log(gameCharacter);

// let firstCharacter = {
//     name: "Assaf",
//     xPosition: 0,
//     yPosition: 0,
//     move: function(xAmount,yAmount){
//         this.xPosition += xAmount;
//         this.yPosition += yAmount;
    
//     }
//   }
//   let secondCharacter = {
//     name: "Yehuda",
//     xPosition: 0,
//     yPosition: 0,
//     move: function(xAmount,yAmount){
//         this.xPosition += xAmount;
//         this.yPosition += yAmount;
    
//     }
//   }
  
//   let objectArray = [];
//   objectArray.push(firstCharacter,secondCharacter);
//   console.log(objectArray[1]);
//   console.log(objectArray[0].name);
  
//   for(let obj of objectArray){
//     obj.move(10,5);
//     console.log(obj);
//   }

  let GameCharacter = function(name,x,y,move){
    this.name = name;
    this.xPosition = x;
    this.yPosition = y;
    this.move = move;
  
  }
  
  let move = function(xAmount,yAmount){
    this.xPosition += xAmount;
    this.yPosition += yAmount;
  
  }
  //create object from the class
  let newCharacter1 = new GameCharacter("Assaf",5,0,move);
  let newCharacter2 = new GameCharacter("Moshe",1,0,move);
  let newCharacter3 = new GameCharacter("David",2,3,move);
  
  //console.log(newCharacter1.move(2,4));
  console.log(newCharacter1.xPosition);
  
  
let namesArray = ["Yehuda", "Moshe", "Yoni", "Zvi"];
//8 exercise
function names(names1) {
  let names2 = "";
  for (let a of names1) {
    names2 += a + ",";
  }
  console.log(names2);
}

names(namesArray);
//exercise 9
var person = {
  firstName: "Assaf",
  lastName: "Sahr"
};
console.log(person.firstName)

//exercise 2
let student1 = {
  "David": 80,
  "Moshe": 75,
  "Yitzhak": 100,
}

function average(student) {
  gradeArray = Object.values(student);
  let sum = 0;
  gradeArray.forEach(function (value) {
    sum += value;
  })
  console.log(sum / gradeArray.length);
}
average(student1);

//exercise 10
person.country = "Israel";
console.log(person);

//exercise 6
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr1 = [];

function showNumbers(arr, num) {
  for (i = 0; i < num; i++) {
    arr1.push(arr[i])
  }
}
showNumbers(numbersArray, 6);
console.log(arr1);
//exercise 7,3
let arr6 = [];
function getNumbersLast2(arr, num) {
  for (let i in arr){
    if(arr[i] == num){
      for(j=i;j<arr.length;j++){
        arr6.push(arr[j]);
      }
      return arr6
    }
  }
}
console.log(getNumbersLast2(numbersArray,5));
//exercise 7
let arr2 = [];

function showNumbersLast(arr, num) {
  for (i = arr.length - 1; i >= arr.length - num; i--) {
    arr2.push(arr[i])
  }
}
showNumbersLast(numbersArray, 6);
console.log(arr2);

//exercise 11
let person2 = {
  name: "John",
  age: 50
}
console.log(`${person2.name} is ${person2.age} years old`)

//exercise 4
for (let i = 1; i <= 50; i++) {
  let num = "" + i;
  let sum = 0;
  for (let j in num) {
    sum += parseInt(num[j]);
  }
  if (sum % 4 == 0) {
    console.log(i)
  }
  sum = 0;
}
 //exercise 12 + 13
 let fruit = "banana";

 switch(fruit){
   case "tomato":
   console.log("tomato");
   break;
   case "banana":
   console.log("Hello");
   break;
   case "strawberry":
   console.log("strawberry");
   break;
   case "apple":
   console.log("Welcome");
   break;
   default : console.log("Neither")
 }
//exercise 13
let fruits = ["Apple","Banana","Orange"];
for(let fruit of fruits){
  console.log(`${fruit} as ${fruit.length} letters in it`)
}
//exercise 14
let fruits2 = ["Banana","Orange","Apple","Kiwi"];
fruits2.splice(1,2);
console.log(fruits2);
//exercise 16
let arrNum = [1,2,3,4,5,6,7,8,9,10];
for(let num of arrNum){
  for(i=1;i<=10;i++){
    console.log(i*num);
  }
}
//exercise 16,2
for (let i = 1;i<=10; i++){
    let arr = ""
    for (let j = 1;j<=10;j++){
      arr += j*i + " "
    }
    console.log(arr);
  }
//exercise 17
function mul(number){
    let sum = 1;
    for(i=number;i>=1;i--){
      sum *= i
    }
    console.log(sum);
    }
    mul(5);
    

  
  //exercise 18
  
  function reverseName(name) {
    let newName = "";
  
    for (i = name.length - 1; i >= 0; i--) {
      newName += name[i];
    }
    console.log(newName);
  
  }
  reverseName("moshe");
  
  //exercise 19
  
  function biggerOrSmaller(firstNum, secondNum) {
   return  (firstNum > secondNum) ? true : (firstNum < secondNum) ? false : "-1";
  }
  
  biggerOrSmaller(11, 11);
  
  // exercise 20
  let person5 = {
    firstName: "Assaf",
    lastName: "Sahar"
  }
  for (let key in person5) {
    console.log(key);
  }
  
 
//exercise 21
let passString = "12345678F77777g";
let isNumber = false;
let isBigLetter = false;
let isSmallLetter = false;

function password(password1) {
  if (password1.length < 10)
    return false;
  for (let i of password1) {
    if (!isNaN(i)) {
      isNumber = true;
    }
  }
  for (let i of password1) {
    if (i == i.toUpperCase() && isNaN(i)) {
      console.log(i);
      isBigLetter = true;

    }
  }
  for (let i of password1) {
    if (i == i.toLowerCase() && isNaN(i)) {
      isSmallLetter = true
    }
  }
  if (isNumber == false || isBigLetter == false || isSmallLetter == false) {
    return false;
  }
  else return true;
}

console.log(password(passString));
  
  
  
  //exercise 22
  function indexPower(arr,index){
    if(index > arr.length){
      return -1;
    }
    else return arr[index]**2;
  }
  console.log(indexPower(arrNum,3));

  
//exercise 23
let number23 = 34;
let sumMul = 1;

function mul(number) {
  if(number == 0){
  console.log(0);
  return}
  let numString = "" + number;
  let numChar;
  for (let char of numString) {
    numChar = parseInt(char);
    if (numChar == 0) {
      continue;
    }
    else if(numChar != 0){

      sumMul *= numChar;
    }
  }
  console.log(sumMul);
}

mul(number23);

//exercise 24
function returnIndex(firstWord,secondWord){
 return firstWord.indexOf(secondWord);
}

console.log(returnIndex("shalom","lo"));

//exercise 25
function returnSecondIndex(firstWord,secondWord){
 index = firstWord.indexOf(secondWord);
 newWord = firstWord.slice(index+1)
 return newWord.indexOf(secondWord);
}
console.log(returnSecondIndex("shalomjjjjlo","lo")+1+index);

word3 = "123456789";
console.log(word3.slice(3,7));

//exercise 6
let array = [
    {"name":"bread","price":30}, 
    {"name":"pen","price":5},  
    {"name":"book","price":90}  
  ]
  
  let bigNum = {"name":0,"price":0} ;
  
  function showBigObj(array){
  for(let obj of array){
    if(obj.price > bigNum.price){
      bigNum = obj
    }
  }
  console.log(bigNum);
  }
  

let sentence = "bgj 4 kjhik jtuyu 9";
let sentenceArray = sentence.split(" ");


console.log(sentenceArray);
let numbersOfWords = 0;

function threeWords(str) {
  let sentenceArray = str.split(" ");
  console.log(sentenceArray);

  for (let word of sentenceArray) {
    word1 = parseInt(word);

    if (isNaN(word1)) {
      numbersOfWords++
    }
    else {
      numbersOfWords = 0;

    }
    if (numbersOfWords == 3) {
      return true
    }
  }
  return false
}
console.log(threeWords(sentence));

//exercise 4
let stringArray = ["a", "b", "c", "d", "a", "h", "a","b","b","b","f"];
let num3 = 0;
let item = "";
for(let i of stringArray){
let num = 0;
  for(let j of stringArray){
    if(i == j){
      num++
      if(num > num3){
        num3 = num;
        item = i;
      }
    }
  }
}
console.log(item,num3)


class NonPlayerCharacter extends GameCharacter{
    constructor(name,xPosition,yPosition,show,speed){
      super(name,xPosition,yPosition,show);
      this.speed = speed;
    }
    showSpeed(){
      console.log(this.speed);
    }
    move(xAmount,yAmount){
      super.move(xAmount,yAmount);
      // this.xPosition -= xAmount;
      // this.yPosition -= yAmount;
    }
  }
  
  
  class NonPlayerCharacter2 extends GameCharacter{
    constructor(name,xPosition,yPosition,show,speed){
      super(name,xPosition,yPosition,show);
      this.speed = speed;
    }
  }
  
  class NonPlayerCharacter3 extends NonPlayerCharacter{
    constructor(name,xPosition,yPosition,show,speed){
      super(name,xPosition,yPosition,show);
      this.speed = speed;
    }
  }
  
  let character6 = new NonPlayerCharacter3("yehuda",9,4,0,12);
  
  let character4 = new NonPlayerCharacter("yehuda",3,4,0,12);
  
  let character5 = new NonPlayerCharacter2("yehuda",7,4,0,12);
  console.log(character4);
  console.log(character5);
  console.log(character6);

  function viza (number){
    let num = 0;
    for(let i = 0;i<number.length;i++){
                  num += number[i];
    if ((number.length == 16) && !isNaN(number[i]) && (number[15]%2==0) && number[0] != number[i] && num>16){
              return true;}
          }
              return false;
   }
    console.log(viza("9999999999999998"));