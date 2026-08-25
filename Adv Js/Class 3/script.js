// iife function : Immediiate Invoke Function Expression
(async function fetchData() {
    let url = "https://dummyjson.com/products?limit=194"

    try {
        let fetchProduct = await fetch(url)
        let data = await fetchProduct.json()

        let products = data.products // all the products in array of objects

        products.map((el) => { // map works on array
            // console.log(el) // each object in array

            let outerdiv = document.createElement("div")
            let anchor = document.createElement("a")
            let heading = document.createElement("h2")
            let image = document.createElement("img")
            let des = document.createElement("p")
            let price_cart = document.createElement("div")
            let price = document.createElement("p")
            let cart = document.createElement("button")

            anchor.href = `detail.html?id=${el.id}`
            heading.innerText = el.title
            image.src = el.thumbnail
            des.innerText = `${el.description.slice(0, 90)}.......`
            price.innerText = `Rs ${Math.ceil(el.price * 94)}/-`
            cart.innerText = "Add To Cart"

            outerdiv.classList.add("outerDiv")
            image.style.width = "200px"
            price_cart.classList.add("price-cart")
            cart.classList.add("cart")

            anchor.append(image)
            price_cart.append(price, cart)
            outerdiv.append(heading, anchor, des, price_cart)

            document.querySelector("main").append(outerdiv)


            cart.addEventListener("click", () => {
                let cartEl = JSON.parse(localStorage.getItem("cart")) || [];
                console.log(cartEl)

                let exist = cartEl.find((item) => el.id === item.id)
                
                if(exist){
                    exist.quantity+=1
                }
                else{
                    el.quantity=1
                    cartEl.push(el)
                }

                localStorage.setItem("cart", JSON.stringify(cartEl))
            })
        })

    }
    catch (err) {
        console.log(err)
    }
})()