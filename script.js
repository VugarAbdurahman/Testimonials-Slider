const leftBtn = document.querySelector(".left-arrow")
const rightBtn = document.querySelector(".right-arrow")

// const slideContainer = document.querySelector(".cards")
const container = document.querySelector(".slideContainer")

container.addEventListener("wheel", (evt) => {
  evt.preventDefault()
  container.scrollLeft += evt.deltaY
})

leftBtn.addEventListener("click", () => {
  container.scrollLeft -= 250
})

rightBtn.addEventListener("click", () => {
  container.scrollLeft += 250
})
