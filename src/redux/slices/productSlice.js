import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    catdata:[],
    searchData:[],
    total: 12,
    status: 'idle',
    skip: 0,
    limit: 12,
}


export const getProducts = createAsyncThunk('products/get', async ({ limit, skip }) => {
    const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const result = await data.json();
    return result;
});

export const categorizedProducts = createAsyncThunk('products/getByCategory', async({category})=>{
    const data = await fetch(`https://dummyjson.com/products/category/${category}`);
    const result = await data.json();
    return result;
});

export const searchedProduct = createAsyncThunk('products/getSearchedProduct', async({search})=>{
    const data = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const result = await data.json();
    return result;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = state.data.concat(action.payload.products);
                state.skip = state.skip + state.limit;
                state.total = action.payload.total;
                state.status = 'loaded';
            })

            .addCase(categorizedProducts.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(categorizedProducts.fulfilled, (state,action)=>{
                state.catdata = action.payload.products;
                state.status = 'loaded';
            })
            .addCase(categorizedProducts.rejected, (state,action)=>{
                state.catdata = action.payload.products;
                state.status = 'rejected';
            })

            .addCase(searchedProduct.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(searchedProduct.fulfilled, (state, action)=>{
                state.searchData = action.payload.products;
                state.status = 'loaded';
            })
    }
});

export default productSlice.reducer;