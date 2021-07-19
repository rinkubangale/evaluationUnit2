var products = [
    {
        name: "iQOO Z3 5G",
        brand: "iQOO",
        rate: 20990,
        img: "https://images-eu.ssl-images-amazon.com/images/I/41LRLdVQvBS._AC_SX184_.jpg",
        
    },
    {
        name: "Mi 11X Pro 5G",
        brand: "Redmi",
        rate: 39999,
        img: "https://images-eu.ssl-images-amazon.com/images/I/41qJxT0iJSS._AC_SX184_.jpg",
        
    },
    {
        name: "OnePlus Nord CE 5G",
        brand: "OnePlus",
        rate: 24990,
        img: "https://images-eu.ssl-images-amazon.com/images/I/41I4ZIBgc3S._AC_SX184_.jpg",
        
    },
    {
        name: "Mi 11X Pro 5G (Black)",
        brand: "Redmi",
        rate: 39999,
        img: "https://images-eu.ssl-images-amazon.com/images/I/41Y52jD863S._AC_SX184_.jpg",
        
    },
    {
        name: "OnePlus Nord CE 5G (Charcoal)",
        brand: "OnePlus",
        rate: 24990,
        img: "https://images-eu.ssl-images-amazon.com/images/I/41e1JcORdNS._AC_SX184_.jpg",
        
    },
    {
        name: "Apple iPhone 11 Pro",
        brand: "Apple",
        rate: 94900,
        img: "https://m.media-amazon.com/images/I/61fkdeyq5QL._AC_UY327_FMwebp_QL65_.jpg",
        
    },
    {
        name: "New Apple iPhone XR",
        brand: "Apple",
        rate: 47590,
        img: "https://m.media-amazon.com/images/I/519KIlHA2wL._AC_UY327_FMwebp_QL65_.jpg",
        
    },
    {
        name: "New Apple iPhone 12 Mini",
        brand: "Apple",
        rate: 66400,
        img: "https://m.media-amazon.com/images/I/71i+-WmxHWL._AC_UY327_FMwebp_QL65_.jpg",
        
    },
    {
        name: "OnePlus 9R 5G",
        brand: "OnePlus",
        rate: 39999,
        img: "https://m.media-amazon.com/images/I/61IwksZ-DGL._AC_UY327_FMwebp_QL65_.jpg",
        
    },
]

if (localStorage.getItem("products") == null) {
    localStorage.setItem("products", JSON.stringify(products));
}


function showProducts(d) {
    
    let products = d

    let products_div = document.getElementById("home");
    products_div.innerHTML = null

    products.forEach(function (el) {
        
        let div = document.createElement("div")

        let p_name = document.createElement("p");
        p_name.innerHTML = el.name;
        
        let p_brand = document.createElement("p");
        p_brand.innerHTML = el.brand;

        let p_rate = document.createElement("p");
        p_rate.innerHTML = "₹" + el.rate;

        let img = document.createElement("img");
        img.src = el.img;

        let btn = document.createElement("button");
        btn.textContent = "Add to Cart";

        btn.addEventListener("click", function () {
            addToCart(el);
        })

         btn.style.display = "block";

        div.append(p_brand, p_name, p_rate, img, btn);

        products_div.append(div);
    })

}

showProducts(JSON.parse(localStorage.getItem("products")));

function LtoH() {
    
    let products = JSON.parse(localStorage.getItem("products"));

    products = products.sort(function (a, b) {
        return a.rate - b.rate
    })

    showProducts(products);

}

function HtoL() {
    
    let products = JSON.parse(localStorage.getItem("products"));

    products = products.sort(function (a, b) {
        return b.rate - a.rate
    })

    showProducts(products);

}

function AtoZ() {
    
    let products = JSON.parse(localStorage.getItem("products"));

    products = products.sort(function (a, b) {
        return a.brand - b.brand
    })

    showProducts(products); 

}

function ZtoA() {
    
    let products = JSON.parse(localStorage.getItem("products"));

    products = products.sort(function (a, b) {
        return b.brand.charCodeAt(0) - a.brand.charCodeAt(0)
    })

    showProducts(products);

}

function addToCart(obj) {
    let cart;    
    
    cart = localStorage.getItem("AddedToCart")

    if (cart == null) {
        cart = [];
    } else {
        cart = JSON.parse(localStorage.getItem("AddedToCart"));
    }

    for (let i = 0; i < cart.length; i++){
        if (cart[`${i}`].name == obj.name) {
            alert("Product is already present in the cart!")
            return;
        }
    }

    cart.push(obj)

    localStorage.setItem("AddedToCart", JSON.stringify(cart));

}
