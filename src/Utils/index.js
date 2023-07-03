/**
 * This function calculates total price of a new order
 * @param {Array} items cartItems: Array of objects 
 * @returns {number} Total price 
 */
export const totalPrice = (items) => {
  let counter = 0;
  items.forEach((element) => (counter += element.price));
  return counter;
};
