function addProduct(){

let name = document.getElementById("name").value
let price = document.getElementById("price").value
let image = document.getElementById("image").value

let market = document.getElementById("market")

let card = document.createElement("div")
card.className = "card"

card.innerHTML = `
<img src="${image}">
<h3>${name}</h3>
<p class="price">${price} ₴</p>
`

market.appendChild(card)


}

function addProduct(){

let name = document.getElementById("name").value
let price = document.getElementById("price").value
let image = document.getElementById("image").value

if(name === "" || price === "" || image === ""){
alert("Заполните все поля!")
return
}

let market = document.getElementById("market")

let card = document.createElement("div")
card.classList.add("card")

let img = document.createElement("img")
img.src = image

let title = document.createElement("h3")
title.textContent = name

let priceText = document.createElement("p")
priceText.textContent = price + " ₴"
priceText.classList.add("price")

card.appendChild(img)
card.appendChild(title)
card.appendChild(priceText)

market.appendChild(card)

document.getElementById("name").value = ""
document.getElementById("price").value = ""
document.getElementById("image").value = ""

}

function addProduct(){

let name = document.getElementById("name").value
let price = document.getElementById("price").value
let image = document.getElementById("image").value

let market = document.getElementById("market")

let card = document.createElement("div")
card.className = "card"

card.innerHTML = `
<img src="${image}">
<h3>${name}</h3>
<p class="price">${price} ₴</p>
`

// удаление карточки при нажатии
card.onclick = function(){
card.remove()
}

market.appendChild(card)

}