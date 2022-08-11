let $toTop = document.querySelector(".btn-to-top");
window.onscroll = function () {
  if (window.scrollY > 50) {
    $toTop.classList.add("show");
  } else {
    $toTop.classList.remove("show");
  }
};
$toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
