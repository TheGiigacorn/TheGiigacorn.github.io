'use strict'
const switcher = document.querySelector('.btn');

const scrollabout = document.querySelector('.aboutmescrl');

const scrollcreate = document.querySelector('.creativeprojscrl');

var scrollcode = document.querySelector('.codingprojscrl');

var scrollresume = document.querySelector('.resumescrl');

var topscroll = document.querySelectorAll('.topscrl');



scrollabout.addEventListener('click', function() {
    let e = document.getElementById("aboutme");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
});

scrollcreate.addEventListener('click', function() {
    let e = document.getElementById("creativeprojects");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
});

scrollcode.addEventListener('click', function() {
    let e = document.getElementById("codingprojects");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
});

scrollresume.addEventListener('click', function() {
    let e = document.getElementById("resumebox");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
});


for (var i = 0; i < topscroll.length; i++) {
    topscroll[i].addEventListener('click', function () {
        let e = document.getElementById("banner");
        e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    });
};