

var data_div = document.getElementById("data");

function appendProduct(el) {
    var div = document.createElement("div");

    let p_name = document.createElement("p");

    p_name.innerHTML = el.name;

    let p_rate = document.createElement("p");

    p_rate.innerHTML = "₹"+el.rate;

    let image = document.createElement("img");
 
    image.src = el.img;

    div.append(p_name, p_rate, image);

    data_div.append(div);
}

function showProducts() {
    let data = JSON.parse(localStorage.getItem("AddedToCart"));

    data_div.innerHTML = null;

    data.forEach(function (el) {
        appendProduct(el);
    });

    let noOfProduct = document.getElementById("totalNo");
    let totalPrice = document.getElementById("totalPrice")
    let coupon = document.getElementById("coupon").value;
    // coupon = "masai30";
    var sum = 0;

    for (let i = 0; i < data.length; i++){
        sum += +data[`${i}`].rate;
    }

    if (coupon == "masai30") {
        sum = (sum - sum * 0.3);
        alert("Coupon Applied Successfully")
    }
    // totalPrice.innerHTML = null;
    noOfProduct.innerHTML += " : " + data.length;
    totalPrice.innerHTML += " : ₹" + sum;
    
}

showProducts();

function masai30() {
    showProducts();
}
