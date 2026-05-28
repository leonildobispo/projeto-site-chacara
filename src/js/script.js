const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
})

let count = 1;
document.getElementById ("radio1"). checked = true;
setInterval ( function(){
    nextImage();
}, 5000)

function nextImage(){
    count ++;
    if (count>12){
        count = 1;
    }

    document.getElementById ("radio"+count). checked = true;

}

let count2 = 13;

document.getElementById("radio13").checked = true;

setInterval(function () {
    nextImage2();
}, 5000);

function nextImage2() {

    count2++;

    if(count2 > 22){
        count2 = 13;
    }

    document.getElementById("radio" + count2).checked = true;
}

const nextBtn = document.querySelector('.exterior-next');
const prevBtn = document.querySelector('.exterior-prev');

nextBtn.addEventListener('click', () => {

    count++;

    if(count > 12){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
});

prevBtn.addEventListener('click', () => {

    count--;

    if(count < 1){
        count = 12;
    }

    document.getElementById("radio" + count).checked = true;
});

document.getElementById("radio13").checked = true;

const nextBtn2 = document.querySelector('.interior-next');
const prevBtn2 = document.querySelector('.interior-prev');

nextBtn2.addEventListener('click', () => {

    count2++;

    if(count2 > 22){
        count2 = 13;
    }

    document.getElementById("radio" + count2).checked = true;
});

prevBtn2.addEventListener('click', () => {

    count2--;

    if(count2 < 13){
        count2 = 22;
    }

    document.getElementById("radio" + count2).checked = true;
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
})
