let aml = document.getElementById('aml');
let circle = document.querySelector('.circle');
let L1 = document.querySelectorAll('.L1');
let L2 = document.querySelectorAll('.L2');
let L3 = document.querySelectorAll('.L3');
let waw = document.getElementById('waw');
let waw_cont = document.getElementById('waw-container');
let span = document.querySelector('.waw-span');
let ot = document.getElementById('ot');
let tt = document.querySelectorAll('.title');
let unit = document.getElementById('unit');
let event_unit = document.querySelectorAll('.event-unit');
const H = window.innerHeight;
const h1 = 4400 + 3.1*H;

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
console.log(window.innerHeight)
window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    console.log(scroll);
    
    if (scroll < 650) {
        var s1 = 1 - scroll/1000;
        var s2 = 1 - scroll/1500;
        var s3 = 1 - scroll/550;
        L1.forEach(l => {
            l.style.transform = 'scale(' + s1 + ')';
        });
        L2.forEach(l => {
            l.style.transform = 'scale(' + s2 + ')';
        });
        aml.style.opacity = s3;
        waw.style.opacity = 1 - s3;
    }
    else {
        aml.style.opacity = 0;
        waw.style.opacity = 1;
    }

    if (scroll < 650) {
        span.style.height = 100 + '%';
    }

    if (scroll > 650) {
        span.style.height = 0 + '%';
    }

    if (scroll > 650 && scroll < 1400) {
        L3.forEach(l => {
            l.classList.add('active');
        });
    }
    else {
        L3.forEach(l => {
            l.classList.remove('active');
        });
    }
    
    if (scroll < 1050) {
        circle.style.backgroundColor = 'rgb(23, 0, 54)';
    }

    if (scroll > 2000) {
        waw_cont.style.display = 'none';
    }
    else {
        waw_cont.style.display = 'flex';
    }
    if (scroll < 1050) {
        circle.style.transform = 'scale(2)';
    }

    if (scroll > 1050 && scroll <3800) {
        var s4 = 2 - (scroll - 1050)/875;
        var r = 23 + (scroll - 1050)*0.2;
        var g = 0 + (scroll - 1050)*0.2;
        var b = 54 + (scroll - 1050)*0.2;
        if (s4 < 0) {
            circle.style.transform = 'scale(0)';
        }
        else {
            circle.style.transform = 'scale(' + s4 + ')';
        }
        circle.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        ot.style.opacity = 1;
    }

    if (3800 < scroll) {
        circle.style.transform = 'scale(0)';
    }
    if (scroll < 3800) {
        unit.style.top = 100 + 'vh';
    }
    
    if (scroll > 3800 &&scroll < h1) {
        ot.style.opacity = 0;
        var top = (1 - 2*(scroll - 3800)/(1.5*H))*100; 
        unit.style.top = top + 'vh';
        let i = Math.floor((scroll - 3800)/(1.5*H));
        tt[i].classList.remove('deactive');
        tt[i].classList.add('active');
        if (i > 0) {
            tt[i - 1].classList.add('deactive');
            tt[i - 1].classList.remove('active');
        }
        if (i < 2) {
            tt[i + 1].classList.add('deactive');
            tt[i + 1].classList.remove('active');
        }
    }
    else {
        tt.forEach(tt_i => {            
            tt_i.classList.add('deactive');
            tt_i.classList.remove('active');
        });
    }

    if (h1 < scroll) {
        unit.style.top = -300 + 'vh';
    }
    if (h1 - 600 < scroll) {
        let j = Math.floor((scroll + 400 - h1)/H);
        var top = (1 - ((scroll + 400 - h1)%H)/H)*100;
        if (-1 < j && j < 9) {
            event_unit[j].style.top = top + 'vh';
            event_unit[j].style.bottom = -top + 'vh';
        }
        for (let i = 0; i < j && j < 9; i++) {
            const element = event_unit[i];
            element.style.top = 0 + 'vh';
            element.style.bottom = 0 + 'vh';
        }
    }
    if (scroll < (h1 - 600)) {
        event_unit.forEach(eu => {
            eu.style.top = 100 + 'vh';
            eu.style.bottom = -100 + 'vh';
        });
    }
    if (10*H + h1 - 1000 < scroll) {
        event_unit.forEach(eu => {
            eu.style.top = 0 + 'vh';
            eu.style.bottom = 0 + 'vh';
        });
    }
});
