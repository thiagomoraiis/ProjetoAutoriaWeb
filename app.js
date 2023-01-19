window.addEventListener("resize", () => {
    if(window.innerWidth > 768) {
        document.getElementById("nav-m").style.display = "block"
    } else if(window.innerWidth <= 768) {
        document.getElementById("nav-m").style.display = "none"
    }
})

function handleOpenNav() {
    const displayValue = document.getElementById("nav-m").style.display;
    if(displayValue == "block") {
        document.getElementById("nav-m").style.left = "-1em"
        document.getElementById("nav-m").style.width = "0"
        // document.getElementById("nav-m").style.display = "none"
    };
    if(displayValue === "" || displayValue === "none") {
        document.getElementById("nav-m").style.left = "0"
        // document.getElementById("nav-m").style.display = "block"
        document.getElementById("nav-m").style.width = "8em"
    };
}