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