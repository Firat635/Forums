let form = document.getElementById("form");
let title = document.getElementById("nameTitle");
let price = document.getElementById("namePrice");
let description = document.getElementById("nameDescription");
let discount = document.getElementById("nameDiscount");
let stock = document.getElementById("nameStock");
let quality = document.getElementById("nameQuality");
let country = document.getElementById("nameCountry");
let customersCount = document.getElementById("nameCustomersCount");
let category = document.getElementById("nameCategory");
let city = document.getElementById("nameCity");

form.addEventListener("submit", postadd)

function postadd(event) {
    event.preventDefault();
    let data = {
        "title": title.value,
        "price": price.value,
        "description": description.value,
        "discount": discount.value,
        "stock": stock.value,
        "quality": quality.value,
        "country": country.value,
        "customersCount": customersCount.value,
        "category": category.value,
        "city": city.value
    }

    axios.post("https://655c3300ab37729791aa0bf5.mockapi.io/students/students", data)

}