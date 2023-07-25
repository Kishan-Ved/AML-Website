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
let unit = document.getElementById('unit')
const H = window.innerHeight

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

    if (scroll < 650) {
        span.style.height = 100 + '%';
    }

    if (scroll > 650 && scroll < 1050) {
        L3.forEach(l => {
            l.classList.add('active');
        });
        span.style.height = 0 + '%';
    }
    else {
        L3.forEach(l => {
            l.classList.remove('active');
        });
    }
    
    if (scroll < 1050) {
        circle.style.backgroundColor = 'rgb(23, 0, 54)';
    }

    if (scroll > 1300) {
        waw_cont.style.display = 'none';
    }
    else {
        waw_cont.style.display = 'flex';
    }

    if (scroll > 1050 && scroll <1800) {
        var s4 = 2 - (scroll - 1050)/275;
        var r = 23 + (scroll - 1050)*1.125;
        var g = 0 + (scroll - 1050)*1.125;
        var b = 54 + (scroll - 1050)*1.125;
        if (s4 < 0) {
            circle.style.transform = 'scale(0)';
        }
        else {
            circle.style.transform = 'scale(' + s4 + ')';
        }
        circle.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        ot.style.opacity = 1;
    }
    
    if (scroll > 1800 &&scroll < (2200 + 3.1*H)) {
        ot.style.opacity = 0;
        var top = (1 - 2*(scroll - 1800)/(1.5*H))*100; 
        unit.style.top = top + 'vh';
        let i = Math.floor((scroll - 1800)/(1.5*H));
        tt[i].classList.remove('deactive');
        tt[i].classList.add('active');
        if (i > 0) {
            tt[i - 1].classList.add('deactive');
            tt[i - 1].classList.remove('active');
        }
        if (i < 3) {
            tt[i + 1].classList.add('deactive');
            tt[i + 1].classList.remove('active');
        }
    }
    else {
        tt[0].classList.add('deactive');
        tt[0].classList.remove('active');
        tt[2].classList.add('deactive');
        tt[2].classList.remove('active');
    }
});
