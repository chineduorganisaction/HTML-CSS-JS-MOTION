var divObject = document.querySelectorAll(".reveal");
var windowHeight = window.innerHeight;

window.addEventListener("scroll", show);

function show() {
    for (let i = 0; i < divObject.length; i++) {
        var divHeight = divObject[i].getBoundingClientRect().top;
        console.log(i);
        if (divHeight < windowHeight - 200) {
            divObject[i].classList.add("active");
        } else {
            divObject[i].classList.remove("active")
        }    
    }
}