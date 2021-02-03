const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav--state-active');
        burger.classList.toggle('toggle');
    })
}

navSlide();