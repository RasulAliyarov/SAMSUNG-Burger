const burgerBtn = document.getElementById("burgerBtn")
const burgDiv = document.getElementsByClassName("burgDiv")[0]
const themeBtn = document.getElementById("themeBtn")
const app__body = document.getElementById("app__body")
const elementtheme = document.getElementsByClassName("elementtheme")
const addBtn = document.getElementById("addBtn")
const cards = document.querySelector(".cards")
const link = document.querySelectorAll(".link")

let index = 0


burgerBtn.addEventListener("click", () => {
    // if (index == 0) {

    //     burgDiv.style.display = "flex"
    //     burgDiv.style.transition = "all 10s"
    //     index++
    // }

    // else {

    //     burgDiv.style.display = "none"
    //     index--
    // }

    if (burgDiv.classList.contains("active")) {
        burgDiv.classList.remove("active")
        burgDiv.style.display = "none"
    }
    else {
        burgDiv.style.display = "flex"
        burgDiv.classList.add("active")
    }
})


themeBtn.addEventListener("click", () => {

    if (app__body.classList.contains("dark")) {
        app__body.classList.remove("dark")
        app__body.style.backgroundColor = "white"
        for (let i = 0; i < elementtheme.length; i++) {
            elementtheme[i].style.backgroundColor = "rgb(14, 43, 138)"
            elementtheme[i].style.color = "white"

        }

        link.forEach(item => item.style.color = "rgb(14, 43, 138)")

    }
    else {
        app__body.style.backgroundColor = "rgb(14, 43, 138)"
        app__body.classList.add("dark")

        for (let i = 0; i < elementtheme.length; i++) {

            elementtheme[i].style.backgroundColor = "white"
            elementtheme[i].style.color = "rgb(14, 43, 138)"

        }
        link.forEach(item => item.style.color = "white")

    }

    console.log(link)
})





addBtn.addEventListener("click", () => {
    cards.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="./ae-fhd-t5300-ua40t5300auxzn-frontblack-231892019.webp" alt="">

    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
`
})


