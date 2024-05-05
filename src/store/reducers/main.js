import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
    extraReducers: builder => builder.addDefaultCase(state => state),
});

export default mainSlice;
