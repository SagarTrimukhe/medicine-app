export const calculateCartTotal = (cartItems) => {
    let total = 0
    cartItems.forEach(e => {
        total = total + e.price*e.quantity
    });
    return total
}