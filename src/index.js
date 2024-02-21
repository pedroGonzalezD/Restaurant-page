import { about } from "./about.js"
import { home } from "./home.js"
import { menu } from "./menu.js"
import "./styles.css"


document.addEventListener("DOMContentLoaded", e =>{
    home()
})

document.addEventListener("click", e =>{
    if(e.target.matches("#home")){
        document.getElementById("home").classList.add("focus")
        document.getElementById("menu").classList.remove("focus")
        document.getElementById("about").classList.remove("focus")
        home()
        return
    }
    
    if(e.target.matches("#menu")){
        document.getElementById("menu").classList.add("focus")
        document.getElementById("home").classList.remove("focus")
        document.getElementById("about").classList.remove("focus")
        menu()
        return
    }

    if(e.target.matches("#about")){
        document.getElementById("about").classList.add("focus")
        document.getElementById("menu").classList.remove("focus")
        document.getElementById("home").classList.remove("focus")
        about()
        return
    }
}) 