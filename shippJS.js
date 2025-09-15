let shippbtn = document.querySelectorAll(".shipp-btn button");
let shiparr = Array.from(shippbtn);

shiparr.forEach(function () {
    shiparr[1].onclick =  function () {
        shiparr[1].classList.add("bone");
        shiparr[0].classList.remove("bone");
        shiparr[2].classList.remove("bone");
        shiparr[3].classList.remove("bone");
        shiparr[4].classList.remove("bone");

    }
    shiparr[0].onclick =  function () {
        shiparr[0].classList.add("bone");
        shiparr[1].classList.remove("bone");
        shiparr[2].classList.remove("bone");
        shiparr[3].classList.remove("bone");
        shiparr[4].classList.remove("bone");
    }
    shiparr[2].onclick =  function () {
        shiparr[2].classList.add("bone");
        shiparr[1].classList.remove("bone");
        shiparr[0].classList.remove("bone");
        shiparr[3].classList.remove("bone");
        shiparr[4].classList.remove("bone");
    }
    shiparr[3].onclick =  function () {
        shiparr[3].classList.add("bone");
        shiparr[1].classList.remove("bone");
        shiparr[0].classList.remove("bone");
        shiparr[2].classList.remove("bone");
        shiparr[4].classList.remove("bone");
    }
    shiparr[4].onclick =  function () {
        shiparr[4].classList.add("bone");
        shiparr[1].classList.remove("bone");
        shiparr[0].classList.remove("bone");
        shiparr[2].classList.remove("bone");
        shiparr[3].classList.remove("bone");
    }
});

// اخفاء ازار الباقات
let disnone =  document.getElementById("disnone");
let disinput = document.getElementById("disinput");
// window.onload = function () {
//  let body =  document.getElementById("body");
//  body.style.backgroundImage = "url";
// }
disinput.onclick = function () {
    disnone.style.display = "block";
    
}