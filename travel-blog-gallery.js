let elModal = document.querySelector("#modal");
let elCloseButton = document.querySelector("#closeButton");
let elBigImage = document.querySelector("#bigImage");
let images = document.querySelectorAll("#country-gallery img");
let imageTitle = document.querySelector("#modalContent > p");

function showImage() {
  let srcImage = this.getAttribute("src");
  elBigImage.setAttribute("src", srcImage);

  let newTitle = this.getAttribute("title");
  imageTitle.textContent = newTitle;

  elModal.style.display = "flex";

  document.body.classList.add("blur");
}

function closeModal() {
  elModal.style.display = "none";
  document.body.classList.remove("blur");
}

for (let image of images) {
  image.addEventListener("click", showImage);
}
elCloseButton.addEventListener("click", closeModal);

elModal.addEventListener("click", function (e) {
  if (e.target === elModal) {
    closeModal();
  }
});
