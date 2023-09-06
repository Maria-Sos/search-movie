const searchInput = document.querySelector("#search")
const divs = document.querySelectorAll(".movie")

searchInput.addEventListener("keyup", (event) => {
    const word = event.target.value.toLowerCase()
    divs.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) 
        ? (item.style.dislay = "block") 
        : (item.style.display = "none")
    })
    if (word === '') { 
        location.reload()
    }
})