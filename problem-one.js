function newPrice(currentPrice, discount) {
    if (discount > 1500) {
        return "currentPrice";
    }
    const discountAmount = currentPrice * discount / 100;
    const finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);
}
const result = newPrice(1500, 50); 
console.log(result);



