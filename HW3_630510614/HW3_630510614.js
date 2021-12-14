function overhov() {
    alert("Duh, you are hovering!!");
}

const btnred = document.getElementById('btnred');
const btnyellow = document.getElementById('btnyellow');
const btngreen = document.getElementById('btngreen');
const btnblack = document.getElementById('btnblack');
const btnsilver = document.getElementById('btnsilver');

btnred.addEventListener('click', function() {
    document.body.style.background = "red";
});

btnyellow.addEventListener('click', function() {
    document.body.style.background = "yellow";
});

btngreen.addEventListener('click', function() {
    document.body.style.background = "green";
});
btnblack.addEventListener('click', function() {
    document.body.style.background = "black";
});
btnsilver.addEventListener('click', function() {
    document.body.style.background = "silver";
});

const link_url = ["http://slashdot.org/",
    "http://despair.com/",
    "http://www.redbubble.com/",
    "http://googleresearch.blogspot.com/",
    "http://www.thinkgeek.com/"
]

const random_link = document.getElementById('random-url');
random_link.href = link_url[Math.floor(Math.random() * 5)]