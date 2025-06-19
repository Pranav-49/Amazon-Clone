export let cart = [];

export function addtocart (productId){
    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity++;
    } else {
      cart.push({
        productId: productId,  
        quantity: 1
      });
    }
}