document.querySelector(".h22").onclick = function () {
    for (let i = 0; i < document.querySelectorAll(".uri").length; i++) {
        console.log(document.querySelectorAll(".uri").length)
        document.querySelectorAll(".uri")[i].remove()
        i--
    }
    document.querySelector("h2 span").textContent =0
}

console.log(document.querySelectorAll(".uri").length)

document.querySelector("h2 span").textContent = document.querySelectorAll(".uri").length