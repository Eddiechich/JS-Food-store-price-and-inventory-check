let tomatoGrabber = document.getElementById("tomatoBtn");
let cucamberGrabber = document.getElementById("cucamberBtn");
let pepperGrabber = document.getElementById("pepperBtn");
let organicGrabber = document.getElementById("organicBtn");


tomatoGrabber.addEventListener("click",() => {

    fetch("http://localhost:3002/Discount")
    .then(Discount=>Discount.json())
    .then(DiscountJSON=>display(DiscountJSON));
    
    function display(content) {
        if (confirm("There's " + content.tDiscount + " on " + content.tProduct + " Today. price after discout is: " + content.tPrice_after + " Continue?")) {
            alert("The product has been added to your list."); 
        } else {
            alert("You choose to discard the product.");
        }
    }
})
cucamberGrabber.addEventListener("click",() => {

    fetch("http://localhost:3002/Discount")
    .then(Discount=>Discount.json())
    .then(DiscountJSON=>display(DiscountJSON));
    
    function display(content) {
        if (confirm("There's " + content.cDiscount + " on " + content.cProduct + " Today. Continue?")) {
            alert("The product has been added to your list."); 
        } else {
            alert("You choose to discard the product.");
        }
    }
})
pepperGrabber.addEventListener("click",() => {

    fetch("http://localhost:3002/Discount")
    .then(Discount=>Discount.json())
    .then(DiscountJSON=>display(DiscountJSON));
    
    function display(content) {
        if (confirm("There's " + content.pDiscount + " on " + content.pProduct + " Today. Continue?")) {
            alert("The product has been added to your list."); 
        } else {
            alert("You choose to discard the product.");
        }
    }
})
organicGrabber.addEventListener("click",() => {

    fetch("http://localhost:3002/Discount")
    .then(Discount=>Discount.json())
    .then(DiscountJSON=>display(DiscountJSON));
    
    function display(content) {
        if (confirm("There's " + content.oDiscount + " on " + content.oProduct + " Today. price after discout is: " + content.oPrice_after + " Continue?")) {
            alert("The product has been added to your list."); 
        } else {
            alert("You choose to discard the product.");
        }
    }
})
