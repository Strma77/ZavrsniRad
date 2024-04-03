let signup = document.getElementById("signup")
let signin = document.getElementById("signin")
let title = document.getElementById("title")
let name = document.getElementById("Name")

signin.onclick = function(){
    name.style.maxHeight = "0"
    title.innerHTML = "Sign In"
    signup.classList.add("disable")
    signin.classList.remove("disable")
}

signup.onclick = function(){
    name.style.maxHeight = "60px"
    title.innerHTML = "Sign Up"
    signup.classList.remove("disable")
    signin.classList.add("disable")
}