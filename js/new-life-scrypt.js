

// Menu burger 

let menuIcon = document.querySelector('.menu__icon');
const menuWrapper = document.querySelector('.navigation__wrapper');
if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('__lock');
        menuIcon.classList.toggle('__active');
        menuWrapper.classList.toggle('__active');
    });
}



// Scroll to section function
const menuLinks = document.querySelectorAll('.navigation__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if (menuIcon.classList.contains('__active')) {
                document.body.classList.remove('__lock');
                menuIcon.classList.remove('__active');
                menuWrapper.classList.remove('__active');
            }



            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
    }
}