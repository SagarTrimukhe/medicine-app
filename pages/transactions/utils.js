/* eslint-disable import/prefer-default-export */
export const getAllTransactions = (ordersData) => {
  let transactions = [];
  Object.values(ordersData).forEach((arr) => {
    transactions = [...transactions, ...arr];
  });

  transactions.forEach((obj) => {
    obj.cost = Number(obj.price) * Number(obj.quantity);
    obj.ordered_date = `${new Date(obj.ordered_date).toLocaleDateString()} ${new Date(obj.ordered_date).toLocaleTimeString()}`;
  });

  return transactions;
};
