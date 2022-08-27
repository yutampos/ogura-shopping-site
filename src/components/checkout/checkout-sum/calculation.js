export const DeliveryFeeCalcu = (priceSum) => {
  if (priceSum >= 10000) {
    return 0;
  } else {
    return 550;
  }
};
export const CheckoutSumCalcu = (priceSum, DeliveryFee) =>
  priceSum + DeliveryFee;
