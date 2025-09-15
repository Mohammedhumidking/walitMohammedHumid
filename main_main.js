// footer
let h1docum = document.querySelectorAll(".sochail a");
let arrey = Array.from(h1docum);


arrey.forEach(function(ele){
    arrey[1].onclick = function() {
        if (arrey[1].className !== "captel") {
            arrey[1].classList.add("captel");
            arrey[0].classList.remove("captel");
            arrey[2].classList.remove("captel");
            arrey[3].classList.remove("captel");
            arrey[4].classList.remove("captel");

        }
    } 
            arrey[0].onclick = function () {
                if (arrey[0].className !== "captel") {
                    arrey[0].classList.add("captel");
                    arrey[1].classList.remove("captel");
                    arrey[2].classList.remove("captel");
                    arrey[3].classList.remove("captel");
                    arrey[4].classList.remove("captel");
                }
            }
            arrey[2].onclick = function () {
                if (arrey[2].className !== "captel") {
                    arrey[2].classList.add("captel");
                    arrey[0].classList.remove("captel");
                    arrey[1].classList.remove("captel");
                    arrey[3].classList.remove("captel");
                    arrey[4].classList.remove("captel");
                }
            }
            arrey[3].onclick = function () {
                if (arrey[3].className !== "captel") {
                    arrey[3].classList.add("captel");
                    arrey[0].classList.remove("captel");
                    arrey[2].classList.remove("captel");
                    arrey[1].classList.remove("captel");
                    arrey[4].classList.remove("captel");
                }
            }
            arrey[4].onclick = function () {
                if (arrey[4].className !== "captel") {
                    arrey[4].classList.add("captel");
                    arrey[0].classList.remove("captel");
                    arrey[2].classList.remove("captel");
                    arrey[1].classList.remove("captel");
                    arrey[3].classList.remove("captel");
                }
            }
});

// end footer

// RY الرصيدالحالي
let yes = document.querySelectorAll(".balnc i");
let arr = Array.from(yes);
let RY = document.querySelectorAll(".RY p");


let RYyes = Array.from(RY);
arr.forEach(function (ele) {
    arr[0].onclick = function () {
        if (arr[0].style.display=== "block") {
            arr[0].style.display= "none";
            arr[1].style.display= "block";
            RYyes.forEach(function (ele) {
                if (RYyes[0].style.display=== "block"){
                    RYyes[0].style.display= "none";
                    RYyes[1].style.display= "block";
                   
                }
            });

            } 

    };

    arr[1].onclick = function () {
        if (arr[1].style.display=== "block") {
            arr[1].style.display= "none";
            arr[0].style.display= "block";
           
            RYyes.forEach(function (ele) {
                if (RYyes[1].style.display=== "block"){
                    RYyes[1].style.display= "none";
                    RYyes[0].style.display= "block";
                }
            });
            } 
    }

});
// end الرصيد الحالي

// عرض الكل

let servleft = document.querySelectorAll(".serv-left img");
let serverimg = Array.from(servleft);


serverimg.forEach(function () {
    serverimg[0].onclick = function () {
        if (serverimg[0].style.display = "block") {
            serverimg[0].style.display = "none";
            serverimg[1].style.display = "block";
        } 
        serverimg[1].onclick = function () {
            if (serverimg[1].style.display = "block") {
                serverimg[1].style.display = "none";
                serverimg[0].style.display = "block";

            }
        }
    }
});



let sendinput = document.querySelectorAll(".send a");
let sendinputarr = Array.from(sendinput);

sendinputarr.forEach(function (ele) {
    sendinputarr[0].onclick = function () {
       
    }
});

// سداد مشتريات

let back = document.querySelectorAll(".back a");
let backarr = Array.from(back);
let modal = document.getElementsByClassName(".modal");

backarr.forEach(function () {
    backarr[0].onclick = function () {
        modal.style.display = "block";
    }
});

// VISA PAGE

let colorimg = document.querySelectorAll(".color-img p");
let colorimgarray = Array.from(colorimg);

let headervisa = document.querySelectorAll(".vis-img div");
let visimg = Array.from(headervisa);

colorimgarray.forEach(function (ele) {
    colorimgarray[0].onclick = function () {
    visimg.forEach(function (e) {
        visimg[2].classList.add(colorimgarray[0].id);
        visimg[2].classList.remove(colorimgarray[1].id);
        visimg[2].classList.remove(colorimgarray[2].id);
        visimg[2].classList.remove(colorimgarray[3].id);
        visimg[2].classList.remove(colorimgarray[4].id);
        visimg[2].classList.remove(colorimgarray[5].id);

        
      
    });
    }
    colorimgarray[1].onclick = function () {
        visimg.forEach(function (e) {
            visimg[2].classList.add(colorimgarray[1].id);
            visimg[2].classList.remove(colorimgarray[0].id);
            visimg[2].classList.remove(colorimgarray[2].id);
            visimg[2].classList.remove(colorimgarray[3].id);
            visimg[2].classList.remove(colorimgarray[4].id);
            visimg[2].classList.remove(colorimgarray[5].id);
        });
    };

    colorimgarray[2].onclick = function () {
        visimg.forEach(function (e) {
            visimg[2].classList.add(colorimgarray[2].id);
            visimg[2].classList.remove(colorimgarray[0].id);
            visimg[2].classList.remove(colorimgarray[1].id);
            visimg[2].classList.remove(colorimgarray[3].id);
            visimg[2].classList.remove(colorimgarray[4].id);
            visimg[2].classList.remove(colorimgarray[5].id);
        });
    };
    
    
    colorimgarray[3].onclick = function () {
        visimg.forEach(function (e) {
            visimg[2].classList.add(colorimgarray[3].id);
            visimg[2].classList.remove(colorimgarray[0].id);
            visimg[2].classList.remove(colorimgarray[1].id);
            visimg[2].classList.remove(colorimgarray[2].id);
            visimg[2].classList.remove(colorimgarray[4].id);
            visimg[2].classList.remove(colorimgarray[5].id);
        });
    };

    colorimgarray[4].onclick = function () {
        visimg.forEach(function (e) {
            visimg[2].classList.add(colorimgarray[4].id);
            visimg[2].classList.remove(colorimgarray[0].id);
            visimg[2].classList.remove(colorimgarray[1].id);
            visimg[2].classList.remove(colorimgarray[2].id);
            visimg[2].classList.remove(colorimgarray[3].id);
            visimg[2].classList.remove(colorimgarray[5].id);
        });
    };

    colorimgarray[5].onclick = function () {
        visimg.forEach(function (e) {
                visimg[2].classList.add(colorimgarray[5].id);
                visimg[2].classList.remove(colorimgarray[0].id);
                visimg[2].classList.remove(colorimgarray[1].id);
                visimg[2].classList.remove(colorimgarray[2].id);
                visimg[2].classList.remove(colorimgarray[3].id);
                visimg[2].classList.remove(colorimgarray[4].id);
        });
    };

});
   
// التقارير reports

let repethead = document.querySelectorAll(".repet-head button");
let repetheadArray = Array.from(repethead);

repetheadArray.forEach(function () {
    repetheadArray[1].onclick = function () {
            repetheadArray[1].classList.add("pargraph");
            repetheadArray[0].classList.remove("pargraph");
            repetheadArray[2].classList.remove("pargraph");
            repetheadArray[3].classList.remove("pargraph");
            repetheadArray[4].classList.remove("pargraph");
    }

    repetheadArray[0].onclick = function () {
        repetheadArray[0].classList.add("pargraph");
        repetheadArray[1].classList.remove("pargraph");
        repetheadArray[2].classList.remove("pargraph");
        repetheadArray[3].classList.remove("pargraph");
        repetheadArray[4].classList.remove("pargraph");
}

repetheadArray[2].onclick = function () {
    repetheadArray[2].classList.add("pargraph");
    repetheadArray[0].classList.remove("pargraph");
    repetheadArray[1].classList.remove("pargraph");
    repetheadArray[3].classList.remove("pargraph");
    repetheadArray[4].classList.remove("pargraph");
}

repetheadArray[3].onclick = function () {
    repetheadArray[3].classList.add("pargraph");
    repetheadArray[0].classList.remove("pargraph");
    repetheadArray[1].classList.remove("pargraph");
    repetheadArray[2].classList.remove("pargraph");
    repetheadArray[4].classList.remove("pargraph");
}

repetheadArray[4].onclick = function () {
    repetheadArray[4].classList.add("pargraph");
    repetheadArray[0].classList.remove("pargraph");
    repetheadArray[1].classList.remove("pargraph");
    repetheadArray[2].classList.remove("pargraph");
    repetheadArray[3].classList.remove("pargraph");
}
});

// idex.html
let password = document.getElementById("password");


let eyeIdex = document.querySelectorAll(".eyeIdex i");
let eyeIdexArr = Array.from(eyeIdex);

eyeIdex.forEach(function () {
 eyeIdex[0].onclick = function () {
    eyeIdex[0].style.display = "none";
    eyeIdex[1].style.display = "block";
    password.attributes[0].nodeValue= "text";
 } 
 eyeIdex[1].onclick = function () {
    eyeIdex[1].style.display = "none";
    eyeIdex[0].style.display = "block";
    password.attributes[0].nodeValue= "password";
 } 
});

// mai اسحب للاسفل المحتوى كامل
let contup = document.getElementById("cont-up");
let tdrjh2 = document.querySelectorAll(".tdrj h2");
let tdrjh1Arr = Array.from(tdrjh2);
let contup1 = document.getElementById("cont-up1");
let RYYEM = document.getElementById("RY-YEM");
let ideye1 = document.getElementById("id-eye1");
let ideye2 = document.getElementById("id-eye2");
let RYAll = document.getElementById("RYAll");



tdrjh1Arr.forEach(function () {
    tdrjh1Arr[0].onclick = function () {
        RYYEM.innerText = "الرصيد الحالي ريال يمني";
        ideye1.style.display = "block";
            ideye2.style.display = "none";
            RYAll.style.display = "block";
        tdrjh1Arr[0].style.backgroundColor = "white";
        tdrjh1Arr[0].style.border = "1px solid blue";
        tdrjh1Arr[1].style.backgroundColor = "blue";
        tdrjh1Arr[1].style.border = "1px solid white";
        tdrjh1Arr[2].style.backgroundColor = "blue";
        tdrjh1Arr[2].style.border = "1px solid white";
    }

        tdrjh1Arr[1].onclick = function () {
            RYYEM.innerText = "الرصيد الحالي ريال سعودي";
            ideye1.style.display = "block";
            ideye2.style.display = "none";
            RYAll.style.display = "block";
            tdrjh1Arr[1].style.backgroundColor = "white";
            tdrjh1Arr[1].style.border = "1px solid blue";
            tdrjh1Arr[0].style.backgroundColor = "blue";
            tdrjh1Arr[0].style.border = "1px solid white";
            tdrjh1Arr[2].style.backgroundColor = "blue";
            tdrjh1Arr[2].style.border = "1px solid white";
        }
    
        tdrjh1Arr[2].onclick = function () {
            RYYEM.innerHTML = "<button class='btn-YR'> اضافة عملة <span>+</span></button>";
            ideye1.style.display = "none";
            ideye2.style.display = "none";
            RYAll.style.display = "none";

            tdrjh1Arr[2].style.backgroundColor = "white";
            tdrjh1Arr[2].style.border = "1px solid blue";
            tdrjh1Arr[1].style.backgroundColor = "blue";
            tdrjh1Arr[1].style.border = "1px solid white";
            tdrjh1Arr[0].style.backgroundColor = "blue";
            tdrjh1Arr[0].style.border = "1px solid white";
        }

});
