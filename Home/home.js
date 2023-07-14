let aml = document.getElementById('aml');
let waw = document.getElementById('waw');
let L1 = document.querySelectorAll('.L1');
let L2 = document.querySelectorAll('.L2');
let span = document.querySelector('.waw-span');

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    console.log(scroll);
    
    if (scroll < 650) {
        var s1 = 1 - scroll/1500;
        var s2 = 1 - scroll/3000;
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

    if (scroll > 650 && scroll < 1250) {
        span.style.height = 0 + '%';
    }
});
