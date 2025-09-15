let statingJS = document.getElementById("statingJS");
let imgJS = document.getElementById("imgJS");
let togmailMSJS = document.getElementById("togmailMSJS");
let p1 = document.getElementById("p1");

window.onload = function () {
    togmailMSJS.style.display = "none";
    imgJS.classList.remove("stating");
    togmailMSJS2.style.display = "none";
    imgJSInfo2.classList.remove("stating");
}
statingJS.onclick = function () {
    imgJS.classList.add("stating");
    togmailMSJS.style.display = "block";
    p1.style.color = "red";

    statingJS.onclick = function () {
        if (togmailMSJS.style.display === "block") {
            togmailMSJS.style.display = "none";
            imgJS.classList.remove("stating");
            p1.style.color = "#000";
        } else {
            togmailMSJS.style.display = "block";
            imgJS.classList.add("stating");
            p1.style.color = "red";
        }
    }
}

let stJSInfoMS2 = document.getElementById("stJSInfoMS2");
let imgJSInfo2 = document.getElementById("imgJSInfo2");
let togmailMSJS2 = document.getElementById("togmailMSJS2");
let p2 = document.getElementById("p2");

stJSInfoMS2.onclick = function () {
    imgJSInfo2.classList.add("stating");
    togmailMSJS2.style.display = "block";
    p2.style.color = "red";
    stJSInfoMS2.onclick = function () {
     if (togmailMSJS2.style.display === "block") {
        imgJSInfo2.classList.remove("stating");
        togmailMSJS2.style.display = "none";
        p2.style.color = "#000";
     } else {
        imgJSInfo2.classList.add("stating");
        togmailMSJS2.style.display = "block";
        p2.style.color = "red";
     }
    }
};

let stJSInfoMS3 = document.getElementById("stJSInfoMS3");
let imgJSInfo3 = document.getElementById("imgJSInfo3");
let togmailMSJS3 = document.getElementById("togmailMSJS3");
let p3 = document.getElementById("p3");

stJSInfoMS3.onclick = function () {
    imgJSInfo3.classList.add("stating");
    togmailMSJS3.style.display = "block";
    p3.style.color = "red";
    stJSInfoMS3.onclick = function () {
    if (togmailMSJS3.style.display === "block") {
        imgJSInfo3.classList.remove("stating");
        togmailMSJS3.style.display = "none";
        p3.style.color = "#000";

    } else {
        imgJSInfo3.classList.add("stating");
        togmailMSJS3.style.display = "block";
        p3.style.color = "red";
    }
}

}


