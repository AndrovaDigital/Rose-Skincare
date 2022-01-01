const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    // Nav Fondo
    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav_active');

        //Animación de links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 5 + 0.5}s`;
            }
        });
        //Burger Animacion
        burger.classList.toggle('toggle');
    });
    
}

navslide();