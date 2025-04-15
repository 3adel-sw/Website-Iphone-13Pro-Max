function colors(color) {
  document.body.style.backgroundColor = color;
}
function phones(src) {
  const phoneImage = document.querySelector(".imge");
  if (phoneImage) {
    phoneImage.src = src;
  }
}
