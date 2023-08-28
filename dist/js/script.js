// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch


window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove()
    }
}




var typed = new Typed("#Teks", {
    strings: ["Web Developer", "Freelancer", "Ui Ux Designer",],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true
});




const button = document.querySelector('#button');
const navMenu = document.querySelector('#nav-menu');

button.addEventListener('click', function () {
    button.classList.toggle('btn_line');
    navMenu.classList.toggle('hidden');
})


