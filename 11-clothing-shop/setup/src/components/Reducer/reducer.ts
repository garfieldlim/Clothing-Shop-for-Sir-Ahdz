import { Product } from "../../models";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};

export type ShopState = {
    products: Product[],
    total: number,
    addToCart: any,
    removeItem: any
}

export const initialState = {
    products: [],
    total: 0,
    addToCart: null,
    removeItem: null,
}


export enum ShopActionType {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });