function SuccessFul() {
    let cardNo = document.getElementById("cardNo").value;
    let nameOnCard = document.getElementById("nameCard").value;
    let Cvv = document.getElementById("cvv").value;

    if (cardNo != " " && nameOnCard != " " && Cvv != " ") {

        setTimeout(function () {
            alert("Your order is successfully placed");
        }, 1)
    }
}