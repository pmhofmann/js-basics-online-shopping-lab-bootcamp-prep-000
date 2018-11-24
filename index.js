var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
var addedItem = {
  itemName:item, 
  itemPrice:Math.floor(Math.random()*100)
};

cart.push(addedItem);

return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    var list = "In your cart, you have ";
    for (var i = 0; i <cart.length;i++){
      if (i === cart.length-1 && cart.length === 1){
        list += (`${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } else if (i === cart.length-1 && cart.length>1){
        list += (`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } else {
        list += (`${cart[i].itemName} at $${cart[i].itemPrice}, `);
      }
    }
    return list;
  }
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
