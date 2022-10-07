export const getAllTransactions = (ordersData) => {
    let transactions = []
    Object.values(ordersData).forEach((arr)=>{
        transactions = [...transactions, ...arr]
    })
    return transactions
}