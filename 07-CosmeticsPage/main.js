let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector("nav")
let header = document.querySelector("header")

menuIcon.addEventListener("click", function(){
    nav.classList.toggle("show");

    // this.classList.contains("fa-solid fa-bars")
    // ? this.classList.add("") : null

    if(nav.classList.contains("show")){
        nav.style.height = "0px"
        setTimeout(()=>{
            nav.style.height = "200px"
        },50)
        header.style.backgroundColor = "white"
        header.style.transition = "0.3s all"
    }else{
        header.style.backgroundColor = "rgb(236, 229, 229)"
    }
})