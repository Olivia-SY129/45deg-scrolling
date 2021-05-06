const wrap = document.querySelector('.wrap');
wrap.style.transform = "rotateX(45deg) rotateZ(30deg)";

function scrollEventHandler() {
    const px = window.pageYOffset/90;
    wrap.style.transform = `translateX(${-200+73.5*px}px) translateY(-200px) rotateX(45deg) rotateZ(30deg)`;
}

document.addEventListener('scroll', scrollEventHandler);