let email = document.getElementById("email");
let fisrtname = document.getElementById("name");
let form = document.getElementById("form");
let age = document.getElementById("age");
let surName = document.getElementById("surName")


form.addEventListener("submit",post)

function post(event) {
    event.preventDefault();
   
    
let data ={
    
    "email":email.value,
    "name": fisrtname.value,
    
    "age":age.value,
    "surName":surName.value
}
axios.post("https://655c3300ab37729791aa0bf5.mockapi.io/students/students",data)
}