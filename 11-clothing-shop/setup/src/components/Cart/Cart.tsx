import { ProductsWrapper, Title } from './Cart.styled';
import { useContext, useReducer } from 'react';
import { AddButton } from '../ProductCard';
import { ProductCard } from '../ProductCard';
import React from 'react';


export const Cart = () => {
  return (
    <>
      <Title>Your cart total is {"err"}.00$</Title>
      <AddButton isInCart={true} onClick={() => {console.log("meowk")}}> </AddButton>
      <ProductsWrapper></ProductsWrapper>
    </>
  );
};
