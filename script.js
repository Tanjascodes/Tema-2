const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    changeSlide(button)
  })
})

function changeSlideByInterval() {
  const interval = 2000; // 2 seconds
  setInterval(() => {
    const nextButton = document.querySelector("[data-carousel-button='next']");
    changeSlide(nextButton);
  }, interval);
}

function changeSlide(button) {
  const offset = button.dataset.carouselButton === "next" ? 1 : -1
  const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset
  if (newIndex < 0) newIndex = slides.children.length - 1
  if (newIndex >= slides.children.length) newIndex = 0

  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active
}

changeSlideByInterval();
