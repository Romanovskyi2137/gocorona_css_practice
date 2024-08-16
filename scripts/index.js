const burgerBtn = document.querySelector(".menu__burger__btn");
const menuList = document.querySelector(".header__menu__list");
const menuLinks = document.querySelectorAll(".menu__link");


burgerBtn.addEventListener("click", burgerClickHandler)
menuList.addEventListener("click", burgerOusideClickHandler)
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => { e.stopPropagation() })
});

function burgerClickHandler (e) {
    menuList.classList.add('menu__list__burger')
};
function burgerOusideClickHandler (e) {
    if (menuList.classList.contains('menu__list__burger')) {
        menuList.classList.remove('menu__list__burger')
    };
    return
}