const aboutmeBtn = document.querySelector('.about-mebtn');
const aboutme = document.querySelector('.about-me');
const closeIcon = document.querySelector('.close-icon');

aboutmeBtn.addEventListener('click', () => {
    aboutme.classList.add('show');
    
})

closeIcon.addEventListener('click', () => {
    aboutme.classList.remove('show');
    console.log('close');
})