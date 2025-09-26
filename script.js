function setVh() {
  // 1vh = 1% of the viewport height
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Run on page load
setVh();

// Run again if user resizes (rotation / resize)
window.addEventListener("resize", setVh);
