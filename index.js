const wrap = document.querySelector(".wrap");

function scrollEventHandler() {
  const offset = window.pageYOffset / 90;
  wrap.style.transform = `translateX(${
    -200 + 73.5 * offset
  }px) translateY(-200px) rotateX(45deg) rotateZ(30deg)`;
}

document.addEventListener("scroll", scrollEventHandler);
