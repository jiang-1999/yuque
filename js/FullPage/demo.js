window.onkeydown = function (e) {
  console.log(e);
  if (e.key === "ArrowDown") {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    window.scrollBy({
      top: 0 - window.innerHeight,
      behavior: "smooth",
    });
  }
};
