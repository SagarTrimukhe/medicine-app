export const calculateCartTotal = (cartItems) => {
    let total = 0
    cartItems.forEach(e => {
        total = total + e.price*e.quantity
    });
    return total
}

export const updateCartDataWithDate = (cartItems, order_id) => {
    const current_date = new Date().toISOString()
    return cartItems.map((obj)=>{
        return {...obj, ordered_date: current_date, order_id }
    })
}