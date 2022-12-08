import { useContext } from "react";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Cart.styled";
import { ClothingShopContext } from "../../context";

export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};