import { Seller } from "vtex.product-context/react/ProductTypes";

export const getSellerDefault = (sellers: Seller[] | undefined) => {
  return sellers?.find((seller) => seller.sellerDefault);
};
