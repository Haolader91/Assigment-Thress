function newPrice(currentPrice, discount) {
    if (discount > 1500) {
        return "currentPrice";
    }
    const discountAmount = currentPrice * discount / 100;
    const finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);

    // function call code
    const result = newPrice(1500, 20); 
    console.log(result);
 
}
    // const result = newPrice(1500, 20); 
    // console.log(result);



// Challenge part 
function newPrice(currentPrice, discount) {
  if (typeof discount !== "number" || typeof currentPrice !== "number" || discount < 0 || discount > 100) {
    return "Invalid";
  }

    const discountAmount = currentPrice * discount / 100;
    const finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);

    // function call code
    const result = newPrice("1500", 20);
    console.log(result);

}
    // const result = newPrice("1500", 20);
    // console.log(result);



