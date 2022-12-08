import { useReducer, useContext, createContext } from "react";
import React from "react";
import shopReducer, { initialState } from "./components/Reducer/reducer";
import { Products } from "./components/Products";
const StoreContext = createContext(initialState);

export const ShopProvider = ({children, props}:{children:any,props:any}) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const updatePrice = (products: any) => {
    let total = 0;
    products.forEach((product: any) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };
  const addToCart = (product: any) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };
  const removeFromCart = (product: any) => {
    const updatedCart = state.products.filter(
      (currentProduct: any) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart
      }
    });
  };
}

const useShop = () => {
    const context = useContext(StoreContext);
  
    if (context === undefined) {
      throw new Error("useShop must be used within ShopContext");
    }
  
    return context;
  };
  
  export default StoreContext;