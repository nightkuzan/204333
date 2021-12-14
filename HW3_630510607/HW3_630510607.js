function myAlert() {
    alert("Duh, you are hovering!!");
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

btn1.addEventListener('click', function() {
    document.body.style.background = "red";
});

btn2.addEventListener('click', () => {
    document.body.style.background = "yellow";
});

btn3.addEventListener('click', e => {
    document.body.style.background = "green";
});
btn4.addEventListener('click', e => {
    document.body.style.background = "black";
});
btn5.addEventListener('click', e => {
    document.body.style.background = "silver";
});

const url = ["http://slashdot.org/",
    "http://despair.com/",
    "http://www.redbubble.com/",
    "http://googleresearch.blogspot.com/",
    "http://www.thinkgeek.com/"
]

const random = document.getElementById('random-link');
random.href = url[Math.floor(Math.random() * 5)]
    // function changeBackground(color) {
    //     document.body.style.background = "red";
    // }

// window.addEventListener("load", function() { changeBackground('red') });