const images = document.querySelectorAll(".gallery-item img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalCaption.textContent = img.dataset.caption;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
