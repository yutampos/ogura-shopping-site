export const cartPriceSum = (cartData) => {
  let Sum = 0;
  cartData.map((cart) => {
    return (Sum += cart.price * cart.quantity);
  });

  return Sum;
};
