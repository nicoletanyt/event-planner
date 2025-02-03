import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartShown: false
}

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			state.cartItems.push({ ...action.payload, quantity: 1 });
            console.log(state.cartItems)
		},
		removeItem(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
			);
		},
		increaseItemQuantity(state, action) {
			const item = state.cartItems.find((item) => item.id === action.payload);
			if (item) {
				item.quantity += 1;
			}
		},
		decreaseItemQuantity(state, action) {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        toggleCart(state) {
            if (state.cartShown) state.cartShown = false;
            else state.cartShown = true;
        }
	},
});

export const {
	addItem,
	removeItem,
	increaseItemQuantity,
	decreaseItemQuantity,
	toggleCart,
} = CartSlice.actions;
export default CartSlice.reducer;