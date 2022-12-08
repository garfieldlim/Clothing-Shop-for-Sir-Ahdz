import { createContext } from "react";
import { ShopState } from "./components/Reducer/reducer";
import { initialState } from "./components/Reducer/reducer";
export const ClothingShopContext = createContext<ShopState>(initialState);