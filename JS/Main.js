// 1- ## Make The NavBar Background Blur in scroll ##

let NavBar = document.querySelector(".Heading-section");
let Height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// -------------
addEventListener("scroll", () => {
    let SC = document.documentElement.scrollTop;
    let newscroll = (`${(SC / Height) * 100}%`);
    NavBar.classList.add("fix-active");
    if (SC === 0) {
        NavBar.classList.remove("fix-active");
    }
});

// To Top Button

let Element = document.querySelector(".Top_button p");
Element.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==================================

// input counter and progress

let input = document.querySelectorAll("div > input");
let count1 = document.querySelector(".input-counter1");
let count2 = document.querySelector(".input-counter2");
let count3 = document.querySelector(".input-counter3");
let count4 = document.querySelector(".input-counter4");
let div = document.querySelector("form div");
// [1]
let MaxLength1 = input[0].getAttribute("maxlength");
count1.innerHTML = MaxLength1;
input[0].oninput = function () {
    count1.innerHTML = MaxLength1 - input[0].value.length;
    count1.innerHTML == 0 ? count1.className = "zero1" : count1.className = "input-counter1";
}

// [2]
let MaxLength2 = input[1].getAttribute("maxlength");
console.log(MaxLength2);
count2.innerHTML = MaxLength2;
input[1].oninput = function () {
    count2.innerHTML = MaxLength2 - input[1].value.length;
    count2.innerHTML == 0 ? count2.className = "zero2" : count2.className = "input-counter2";
}

// [3]
let MaxLength3 = input[2].getAttribute("maxlength");
console.log(MaxLength3);
count3.innerHTML = MaxLength3;
input[2].oninput = function () {
    count3.innerHTML = MaxLength3 - input[2].value.length;
    count3.innerHTML == 0 ? count2.className = "zero3" : count2.className = "input-counter3";
}

// [4]
let MaxLength4 = input[3].getAttribute("maxlength");
console.log(MaxLength4);
count4.innerHTML = MaxLength4;
input[3].oninput = function () {
    count4.innerHTML = MaxLength4 - input[3].value.length;
    count4.innerHTML == 0 ? count2.className = "zero4" : count2.className = "input-counter4";
}


// let Cards = document.getElementById("cards");
let Track = document.getElementById("CardsTrack")
let Cards = document.querySelectorAll(".card");

let CurrentIndex = 0;
let CardWidth = 700;

function UpdateCard () {
    Track.style.transform = `translateX ( ${CurrentIndex * CardWidth} )`;
}