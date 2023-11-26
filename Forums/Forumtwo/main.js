let email = document.getElementById("email");
let username = document.getElementById("username");
let form = document.getElementById("form");
let address = document.getElementById("address");
let password= document.getElementById("password")
let country = document.getElementById("country")

form.addEventListener("submit",post)

function post(event) {
    event.preventDefault();
    console.log("data");
    
let data ={
    
    "email":email.value,
    "username": username.value,
    "form": form.value,
    "password":password.value,
    "address":address.value,
    "country":country.value
}
axios.post("https://655c3300ab37729791aa0bf5.mockapi.io/students/students",data)
}