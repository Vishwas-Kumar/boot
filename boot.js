const url = `http://localhost:4000/boots`

const container = document.getElementById("boot_items")

fetch(url)
.then(function(res) {
    return res.json()
})
.then(function(res) {
    appendData(res)
    console.log(res)
})
.catch(function(err) {
    console.log("err:", err)
})


var data = JSON.parse(localStorage.getItem("boot_items")) || []

function appendData(data)  {
    data.forEach(function(el) {

        let div = document.createElement("div")

        let brand = document.createElement("h4")
        brand.innerText = el.brand

        let image = document.createElement("img")
        image.src = el.imagesrc

        let title = document.createElement("p")
        title.innerText = el.title

        let price = document.createElement("h5")
        price.innerText =  el.retail_price

        let btn = document.createElement("button")
        btn.innerText =  " Add to Cart"
        btn.setAttribute("id", "add_to_cart")

        btn.addEventListener("click", function() {
            addToCart(el)
            // console.log("btn clicked")
        })

        div.append(image, brand, title, price, btn)

        document.querySelector("#boot_items").append(div)
    })
}

function addToCart(el) {
    data.push(el)
    // window.location.reload()

    localStorage.setItem("boot_items", JSON.stringify(data))
}


