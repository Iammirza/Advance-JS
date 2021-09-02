// // ------------------ VAR vs LET vs CONST------------------------- //   

// // SCOPE OF "VAR" IS GLOBAL
// // Value is Override and reassign and Redeclear in same variable

// {
//     var v  = "Hello" // Global Scope
// }

// var v = "Hello"; // all of working
// var v = "Ahmad"
// v = "Mirza"

// // SCOPE OF "LET" IS BLOCK

// {
//     let l  = "Hello" // Can not assign outside of the Block
// }

// let l = "Hello";
// let l = "Hello"; // show error due to we can not Redeclear
//  l = "Hello"; // we can assign as well


// // SCOPE OF "CONST " IS ALSO BLOCK

// {
//     const c  = "Hello" // Can not assign outside of the Block
// }

// const c = "Hello"
// const c = "Hello" // show error due to we can not Redeclear
//  c = "Hello" // show error due to we can not Reassign



 // ------------------ TEMPLATE STRING AND TEMPLATE LITTERALS ------------------------- //   

//  let user = "Its Ahmad";

//  // Single Quotes ''

//  document.write('Hello' + user +  'Welcome to Advance JS Course' + '<br>' + '<br>')
//  console.log('Hello ' + user + 'Welcome to Advance JS Course')

//  // Double quotes ""

//  document.write("Hello" + user +  "Welcome to Advance JS Course" + "<br>" + "<br>")


//  // Template String `` (Back Tick)

 
//  document.write(`Hello "${user}" "Welcome to Advance JS Course" `)

//  let firstname = "Muhammad Ahmad";
//  let lastname = "Raza";
//  document.write(firstname + " " + lastname + "<br>")

//  function fullName(firstname, lastname) {
//      return `${firstname} ${lastname}`
//  }

//  let hello = `Hello ${fullName("Mirza" , "Ahad")}`

//  document.write(hello)


 // ------------------ ARROW FUNCTION VERY IMPORTANT ------------------------- //  
 
 // LET EXAMPLE = () => {}

//  let welcome = (name) => {
//      return `Hello and Welcome ${name} <br>`
//  }

//  document.write(welcome("Mirza Ahmad"))


//  let shortWelcome = (name) =>  `Hello and Welcome ${name}` // Use for Shorter Function like Single line

// document.write(shortWelcome("Mirza Ahmad"))
  

 // ------------------ REST OPERATOR------------------------- //  


// function sum(name, course, ...args) {

//     document.write(`Hello ${name} of ${course} : `)

//     let sum = 0;
//     for (let i in args){
//         sum = sum + args[i]
//         // console.log(args[i])
//         // console.log(sum)
//     }
//     document.write(sum + "<br>")
//     // console.log(sum)
// }

// sum("Muhammad Ahmad", "BSCS" , 10, 20, 30, 40, 50)
// sum("Mustafa", "BSCS" , 10, 40, 50)
// sum("Ali", "BSCS" , 10, 20, 30)




 // ------------------ SPREAD OPRATOR ------------------------- //  

// let arr = [10, 20, 30, 40, 50]
// let arr1 = [10, 40, 50]
// let arr2 = [10, 20, 30, 40]
//  function sum(name, course, ...args) {

//     document.write(`Hello ${name} of ${course} : `)

//     let sum = 0;
//     for (let i in args){
//         sum = sum + args[i]
//         // console.log(args[i])
//         // console.log(sum)
//     }
//     document.write(sum + "<br>")
//     // console.log(sum)
// }

// sum("Muhammad Ahmad", "BSCS" , ...arr )
// sum("Mustafa", "BSCS" , ...arr1)
// sum("Ali", "BSCS" , ...arr2 )



 // ------------------ OBEJECT LITERALS ------------------------- //  

//  let name = "Muhammad Ahmad";
//  let course = "BSCS"

//  const obj = {
//      name,
//      course
//  }

//  console.log(obj)

//  let n = "name";

//  var obj1 = {
//      [n + 'last'] : "Muhammad Ahmad"
//  }

//  console.log(obj1)

///------------------------------

// let f = "first"

// var obj = {
//     [f + "name"] : "Muhammad Ahmad", // also concat in Object literal
//     course : "BSCS",
//     show(){
//       return  ` Hello This is ${this.firstname} and He is Student of ${this.course}`
//     } 
// }

// console.log(obj.show());


// let f = "first"

// var obj = {
//     [f + "name"] : "Muhammad Ahmad", // also concat in Object literal
//     course : "BSCS",
//     city : "Okara",
//     'detail show'(){
//       return  ` Hello This is ${this.firstname} and He is Student of ${this.course} and Belong to ${this.city}`
//     } 
// }

// console.log(obj['detail show']()); // second method


// let fname = "Muhammad";
// let lname = "Ahmad"
// let course = "BSCS"

// function student(fname, lname, course){
//   let fullname = fname + " " + lname
//   return {
//     fullname, 
//     course
//   }
// }

// console.log(student(fname, lname, course))

// // One More Method  to get Single Individual Value

// let s = student(fname, lname, course)

// console.log(s.fullname)
// console.log(s.course)

// Second example from Above Concepts

// let fname1 = "Muhammad";
// let lname1 = "Ahmad"
// let course1 = "BSCS"

// function student1(fname1, lname1, course1){
//   return {
//     fname1,
//     lname1, 
//     course1
//   }
// }

// // One More Method  to get Single Individual Value

// let s1 = student1(fname1, lname1, course1)

// console.log(s1.fname1)
// console.log(s1.lname1)
// console.log(s1.course1)



 // ------------------ ARRAY DESTRUCTING ------------------------- //  


// let user = ["Muhammad Ahmad", 23, "BSCS", "Okara"]

// let [name, age, course, city] = user;

// console.log(name)
// console.log(course)
// console.log(age)
// console.log(city)

//-----------------------------------//

// function detail(){
//   return ["Muhammad Ahmad", 23, "BSCS", "Okara"]
// }

// let [name, age, course, city] = detail();

// console.log(name)
// console.log(course)
// console.log(age)
// console.log(city)


//-----------------------------------//


// function detail([name, age, course, city]){
//     console.log(name)
//     console.log(course)
//     console.log(age)
//     console.log(city)
// }

// detail(["Muhammad Ahmad", "23", "BSCS", "Okara"])


 // ------------------ OBJECt DESTRUCTING ------------------------- //  

 // Your variable name must be same as your Object property Name----

//  let user = {
//    name : "Muhammad Ahmad",
//    age : 23,
//    course : "BSCS",
//    city : "Okara"

//  }

//  let {name, age, course, city} = user;

//     console.log(name)
//     console.log(course)
//     console.log(age)
//     console.log(city)


//-----------------------------------//

    // let user = {
    //   name : "Muhammad Ahmad",
    //   age : 23,
    //   course : "BSCS",
    //   city : "Okara"
   
    // }
   
    // let {name : n, age : a, course : c, city : ci} = user;
   
    //    console.log(n)
    //    console.log(c)
    //    console.log(a)
    //    console.log(ci)



 // ------------------ MODULE ------------------------- //  

 // Mian . js file

 //libraryy .js file



  // ------------------ PROMISES ------------------------- //  

// let complete = true;
//     let prom = new Promise(function(resolve, reject){
//       if(complete){
//         resolve("I am successful")
//       }
//       else{
//         reject("I am Reject")
//       }
//     })

//   console.log(prom)

//-----------------------------------//


  // function prom(complete){
  //   return new Promise(function(resolve, reject){
  //     console.log("Fetching Data. Please Wait")
  //     setTimeout(() => {
  //       if(complete){
  //         resolve("Resolve is Working")
  //       }
  //       else{
  //         reject("Reject is Working")
  //       }
  //     }, 3000);

  //   })
  // }


  // // console.log(prom(true))
  // // console.log(prom(false))


  // let onFullfilment = (result) => {
  //   console.log(result)
  // }

  // let onRejected = (error) => {
  //   console.log(error)
  // }

  // // prom(true).then(onFullfilment)
  // // prom(false).catch(onRejected)

  // prom(true).then(onFullfilment).catch(onRejected)

  //----------------Example for Division-------------------//



  // function prom(a, b){
  //   return new Promise(function(resolve, reject){
  //     console.log("Fetching Data. Please Wait")
  //     var c = a / b;
  //     setTimeout(() => {
  //       if(a, b){
  //         resolve(`Your Answer is : ${c}`)
  //       }
  //       else{
  //         reject("Please Use Correct Value")
  //       }
  //     }, 2000);

  //   })
  // }

  // let onFullfilment = (result) => {
  //   console.log(result)
  // }

  // let onRejected = (error) => {
  //   console.log(error)
  // }
  // let a = parseInt(prompt("Enter the Upper Value", "0"));
  // let b = parseInt(prompt("Enter the Lower Value", "0"));
  // prom(a, b).then(onFullfilment).catch(onRejected)




  //----------------Example for Fetch Data Through Jquery -------------------//



  // function prom(){
  //   return new Promise(function(resolve, reject){
  //     console.log("Fetching Data. Please Wait")

  //     setTimeout(() => {
  //       $.get("https://jsonplaceholder.typicode.com/posts", function(data){
  //         resolve(data)
  //       }).fail(err => {
  //         reject("Faild to Load JSON")
  //       })
  //     }, 2000);

  //   })
  // }

  // let onFullfilment = (result) => {
  //   console.log(result)
  // }

  // let onRejected = (error) => {
  //   console.log(error)
  // }
 
  // prom().then(onFullfilment).catch(onRejected)


    // ------------------ PROMISES.all ------------------------- //  


    // If you use too much promises at same time

    // let p1 = new Promise(function(resolve, reject){
    //   setTimeout(() => {
    //     console.log("First Promise Function is Working")
    //   }, 1 * 1000);
    // })

    // let p2 = new Promise(function(resolve, reject){
    //   setTimeout(() => {
    //     console.log("Second Promise Function is Working")
    //   }, 2 * 1000);
    // })

    // let p3 = new Promise(function(resolve, reject){
    //   setTimeout(() => {
    //     console.log("Third Promise Function is Working")
    //   }, 3 * 1000);
    // })

    // Promise.all([p1, p2, p3]).then(() => {
     
    // }).catch(() => {
    
    // })


        // ------------------ Second Example ------------------------- //  



    // let myPromise = function(myData, message){
    //         return function(resolve, reject){ 
    //     setTimeout(() => {
    //       console.log(`Here is Your Data is : ${myData} and Your Message is: ${message}`)
    //       resolve(myData);    
    //     }, myData * 100);
    //   }

    // }

    // let p1 = new Promise(myPromise(10, "First"))
    // let p2 = new Promise(myPromise(20, "Second"))
    // let p3 = new Promise(myPromise(30, "Third"))
    // let p4 = new Promise(function(resolve, reject){
    //   resolve("The Resolve is Working")
    //   // reject("The Fourth is Rejected")
    // })
    

    // let total = 0;
    // Promise.all([p1, p2, p3, p4]).then((result) => {
    //   for(let i in result){
    //     total = total + result[i]
    //   }
    //   console.log(`Your Result is : ${result}`)
    //   console.log(`Total is ${total}`)
    // }).catch((error) => {
    //   console.log(error)
    // })

    
    

                // ------------------ AJAX ------------------------- // 

// Create an XMLHttpRequest object
// document.getElementById("demoBtn").click = loadDoc();

// // Define a callback function
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     document.getElementById("demo").innerHTML =
//     this.responseText;
//   }
// // Send a request
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhttp.send();

// }

// Alternative of AJAX is Fetch API ()

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(response){
//   return response.json()
// })
// .then(function(data){
//   console.log(data)
// })

// Short Code ------------------------------

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   return response.json()
  
// })
// .then((data) => {
//   console.log(data)
//   for (let i in data){
//     document.write(`${data[i].name} -- ${data[i].email} <br>`)
//   }
// }).catch((error) => {
//   console.log("Can't Fetch Data")
// })


// fetch("https://jsonplaceholder.typicode.com/users" , {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body : 'bar',
//     userId : '1',
//   }),
//   headers : {
//     'Content-type' : 'application/json; charset=UTF-8',
//   }
// })
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log("Can't Fetch"))

// INsert the Data

// let obj = {
//   title: 'foo',
//   body : 'bar',
//   userId : '1',
// }
// fetch("https://jsonplaceholder.typicode.com/users" , {
//   method: 'POST',
//   body: JSON.stringify(obj),
//   headers : {
//     'Content-type' : 'application/json; charset=UTF-8',
//   }
// })
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log("Can't Fetch"))


// change the Specific Data

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     name : 'Ahmad',
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// PATCH the DATA

//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'fooo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// DELETE the DATA

//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });


// FETCH FORM DATA

// document.getElementById('saveForm').addEventListener("click", function(e){
//   e.preventDefault();
//   let obj = {
//     title: document.getElementById("title").value,
//     body : document.getElementById("title").value,
//     userId : document.getElementById("title").value,
//   }
//   fetch("https://jsonplaceholder.typicode.com/users" , {
//     method: 'POST',
//     body: JSON.stringify(obj),
//     headers : {
//       'Content-type' : 'application/json; charset=UTF-8',
//     }
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Can't Fetch"))
// })


// document.getElementById('saveForm').addEventListener("click", function(e){
//   e.preventDefault();
//   // let obj = {
//   //   title: document.getElementById("title").value,
//   //   body : document.getElementById("title").value,
//   //   userId : document.getElementById("title").value,
//   // }
//   fetch("https://jsonplaceholder.typicode.com/users" , {
//     method: 'POST',
//     body: new FormData(document.getElementById("subForm")),
//     headers : {
//       'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8',
//     }
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Can't Fetch"))
// }) 



// ------------------ ITERATOR ------------------------- // 

// function numberFunction(arr){
//   let nextNum = 0;
//   return {
//     next(){
//       if(nextNum < arr.length){
//         return {
//           value : arr[nextNum++],
//           done: false
//         }
//       } else { return {done: true}}

//     }
//   }
// }


// let numbers = [100, 200, 300, 400, 500];
// console.log(numbers[0])

// let num = numberFunction(numbers);

// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())

// // Real Itration Method

// let iter = [100, 200, 300, 400, 500];

// let x = iter[Symbol.iterator]()

// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())




// ------------------ GENERATORs ------------------------- //
 
// function *generateIt(){
//   yield console.log("First")
//   yield console.log("Second")
//   yield console.log("Third")
// }

// let g = generateIt();

// g.next();
// g.next();
// g.next();

//------------------------

// function *generateItt (){
//   yield 55;
//   yield* [100, 200, 300, 400]
// }

// let a = generateItt();

// console.log(a.next())
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)

//----------------------------

// function *generateIttt(){
//   yield 100;
//   yield 200;
//   yield 300;
//   yield 400;
//   yield 500;
//   yield 600;

// }

// let b = generateIttt();

// console.log(b.next())
// console.log(b.next())
// console.log(([...b]))

//--------------------------


// function *generateIttt(){
//   yield 100;
//   yield 200;
//   yield 300;
//   yield 400;
//   yield 500;
//   yield 600;

// }

// let b = generateIttt();

// console.log(b.next())
// console.log(b.next())
// console.log(b.next())
// console.log(b.return())
// console.log(b.next())


// function *generateItttt(){
//   let nextNum = 300;
//   while(true) {
//     yield (nextNum++)
//   }

// }

// let b = generateItttt();
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())

//-------------------------------------

// function *generateItttt(){
//   let nextNum = 300;
//   while(true) {
//     yield (nextNum++)
//   }

// }

// let b = generateItttt();
// for (let value of b){
//   if(value > 310) break;
//   console.log(value)
// }







// ------------------ STRICT MODE ------------------------- //

"use strict"


// function test1(a, b, c){
//   console.log( a + b + c)
// }
// test1(10, 20, 30)



//  function test(a, b, b){
//    console.log( a + b + b)
//  }
//  test(10, 20, 30)

// ------------------ TRY AND CATCH ------------------------- //

try {
  blaldal;
} 
catch(error) {

  if(error instanceof ReferenceError){
    console.log("Ref")
  } else if(error instanceof TypeError) {
    console.log("Type")
  } else {
    console.log("Unknown")
  }

}

/* 
  Eval Error
  RANGE ERROR
  REFERENCE ERROR
  SYNTAX ERROR
  TYPE ERROR
  URI ERRRO
  AGGREGATE ERROR
*/
