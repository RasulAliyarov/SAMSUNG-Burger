const burgerBtn = document.getElementById("burgerBtn")
const burgDiv = document.getElementsByClassName("burgDiv")[0]
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


