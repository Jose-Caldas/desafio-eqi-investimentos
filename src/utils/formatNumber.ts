export const formatNumber = (value: number | bigint) => {
  const currency = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  return currency;
};
