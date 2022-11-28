const dog = document.querySelector("img#dog")
const main = document.querySelector("main")
const ui = document.querySelector("img#ui")
const overlay = document.querySelector("div#overlay")
const description = document.querySelector("p#description")
const setLanguage = lg => lang = lg;
const pt_br = {
    "headphones": "Um headphone comum.",
    "shirt": "Uma camiseta comum.",
    "pants": "Uma calça comum.",
    "body": "Sou eu",
    "dog": "Tequila!",
    "pt_br": "[Selecionado]",
    "en": "Change to English?"
}
const en = {
    "headphones": "Just a pair of headphones.",
    "shirt": "Just an ordinary shirt.",
    "pants": "Just an ordinary pair of pants.",
    "body": "That's me",
    "dog": "Tequila!",
    "pt_br": "Mudar para português?",
    "en": "[Selected]"
}
var lang = pt_br
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
document.querySelectorAll(".interactive").forEach(element => {
    element.addEventListener("mousemove", ()=>{
        description.innerHTML = lang[element.id]
    })
    element.addEventListener("mouseout", ()=>{
        description.innerHTML = ""
    })
});