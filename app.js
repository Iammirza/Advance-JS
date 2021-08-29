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






