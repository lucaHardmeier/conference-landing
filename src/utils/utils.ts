export const formatPrice = (price: number, fractions = 0) => {
  return (
    "$" +
    price.toLocaleString("es-AR", {
      maximumFractionDigits: fractions,
    })
  );
};
