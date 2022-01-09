var loader = document.querySelector(".ring_loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.parentNode.removeChild(loader);
}