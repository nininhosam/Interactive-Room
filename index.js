const dog = document.querySelector("img#dog")
const main = document.querySelector("main")
const ui = document.querySelector("img#ui")
const overlay = document.querySelector("div#overlay")
dog.addEventListener("click", () => {
    const popup = document.createElement("img")
    popup.setAttribute("src", "./assets/dog_bg.png")
    popup.setAttribute("id", "popup")
    ui.before(popup)
    
    const dogHead = document.createElement("img")
    dogHead.setAttribute("src", "./assets/dog.png")
    dogHead.setAttribute("id", "dogHead")
    popup.before(dogHead)
    
    dogHead.addEventListener("click", () => {
        dogHead.setAttribute("src", "./assets/dogPetFX.gif")
        setTimeout(() => {
            dogHead.setAttribute("src", "./assets/dog.png")
        }, 3000)
    })
    on()
})

function on() {
    overlay.style.display = "block"

}
function off() {
    overlay.style.display = "none"
    popup.remove()
    dogHead.remove()
}