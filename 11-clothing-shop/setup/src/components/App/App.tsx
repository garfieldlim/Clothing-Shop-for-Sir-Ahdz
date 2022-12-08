import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { createContext, useContext, useState } from 'react';
import { useReducer } from 'react';
import React from 'react';



export const App = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Clothing Shop Starter Project</h1>
      </TitleWrapper>
      <LinksWrapper>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </LinksWrapper>
      <Routes>
        
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes>
    </Wrapper>
  );
};
