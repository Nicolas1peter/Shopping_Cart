import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Product {
    title: string;
    price: number;
    id: string;
}

const initialState: Product[] =  [
    {title: 'Minecraft', price: 10, id: 'mc'},
    {title: 'Dofus', price: 0, id: 'df'},
    {title: 'StarCraft2', price: 25, id: 'sc2'}
]

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state]
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            return state.filter(product => product.id !== action.payload)
        }
    }
})

export const {addProduct, removeProduct} = productsSlice.actions;


export const getProductsSelector = (state: RootState) => state.products;

export default productsSlice.reducer;

