'use strict'
const switcher = document.querySelector('.btn');

const scrollabout = document.querySelector('.aboutmescrl');

const scrollcreate = document.querySelector('.creativeprojscrl')

const scrolltop = document.querySelector('.topscrl')

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current theme name: ' + className)
});

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

scrolltop.addEventListener('click', function() {
    let e = document.getElementById("banner");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
});
