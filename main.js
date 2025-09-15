
// let swappiCase = "7eLZEro89";
// let newarray = ["Ahmed", "Ali", "husi", "Mohammed"];


// let arrmap = swappiCase.split(" ").map(function (ele) {
//     return ele.length <= 3 ? `yes` : `No`;
// });
// console.log(arrmap);

// let mynum = swappiCase.split("").filter(function (elem) {
//     return !isNaN(parseInt(elem));
// }).join("");
// console.log(mynum);


// let mix = "A13BS2ZX";

// let mixcoo = mix.split("").filter(function (ee) {
//     return !isNaN(parseInt(ee));
// }).map(function (em) {
//     return em *em;
// })
// console.log(mixcoo);

// let num = [10, 20, 15, 30];


// let mynum = num.reduce(function (acc, curent, index, arr) {
//     return acc.length <= curent.length;
// },5);
// console.log(mynum);

// let elzerojoi = "E @ L @ Z R O";

// let ramz = elzerojoi.split("").filter(function (elel) {
//     return !elel.startsWith("@");
// }).join("");
// console.log(ramz);

// let element = document.querySelectorAll("ul li");

// element.forEach(function (e1) {
//    e1.onclick = function () {
//     element.forEach(function (e2) {
//         e2.classList.add("active");
//     })
//    }
// });

// let myString = "1,2,3,EE,l,z,e,o,_,W,e,b,_,S,c,o,o,l,2,0,Z";

// let solution = myString.split("").filter (function (ele) {
//     if (isNaN(parseFloat(ele)) && !ele.startsWith(",") && !ele.startsWith("_")) {
//         return ele;
//     }
// }).join("");
// console.log(solution);
// console.log(typeof "@");

// let myvar = "cuntry";

// let user = {
//     // proporty
//     username : myvar,
//     age : 29,

//     // Method
//     myuser1 : function () {
//         console.log(this.username);
//     },

//     obj : {
//          objname : "Mohammed",
//     }
// }
// user.myuser1();
// let ar = user.obj.objname.split("").join("");
// if(ar[0] === "M") {
//     console.log(ar);

// }else{
//     console.log(ar[0]);

// }

// let user2 = {};
// let adduser = user2.name="Ali";
// user2["age"] = 29;
// console.log(user2);

// let x = 5;
// if (x === 5) {
//     document.write(``)
// }


// let h1docum = document.getElementsByTagName("h2");
// let arrey = Array.from(h1docum);

// arrey.forEach(function(ele) {
//     ele.onclick = function () {
//         ele.classList.add("one");
//         ele.style.backgroundColor = "#000";
//        console.log(arrey[1].className);
//     }

// })

// let captel = document.getElementsByClassName('captel');
// console.log(captel);

// captel.forEach(function(ele){
//     ele.onclick = function() {
//         console.log("yes");
//     }
// });

// hadley_orgs <- fromJSON("https://api.github.com/users/hadley/orgs")
// hadley_repos <- fromJSON("https://api.github.com/users/hadley/repos")
// gg_commits <- fromJSON("https://api.github.com/repos/hadley/ggplot2/commits")
// gg_issues <- fromJSON("https://api.github.com/repos/hadley/ggplot2/issues")

// paste(format(gg_issues$user$login), ":", gg_issues$title);

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Parse the JSON from the response
  .then(data => {
    console.log(data); // Log the fetched user data to the console
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
