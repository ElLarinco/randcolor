const color_container = document.getElementById("color-container")
const color_btn = document.getElementById("color-btn")
const color_name = document.getElementById("color-name")

const colors = [
    "#323232",
    "#FA4EAB",
    "#FE83C6",
    "#FFF2F9",
    "#1A1A40",
    "#270082",
    "#7A0BC0",
    "#FA58B6",
    "#041562",
    "#11468F",
    "#DA1212",
    "#EEEEEE",
    "#000000",
    "#24A19C",
    "#FFAD60",
    "#92A9BD"
]

color_btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * colors.length)
    color_container.style.backgroundColor = colors[random]
    color_name.textContent = `${color_container.style.backgroundColor}`
})