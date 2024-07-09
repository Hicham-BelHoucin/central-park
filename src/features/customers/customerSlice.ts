import { createSlice } from "@reduxjs/toolkit";
import Customer from "../../interfaces/customer";

const initialState: Customer[] = [];

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    customerAdded(state, action) {
      state.push(action.payload);
    },
    customerRemoved(state, action) {
      return state.filter((customer) => customer.id !== action.payload);
    },
    customerUpdated(state, action) {
      const { id, name } = action.payload;
      const existingCustomer = state.find((customer) => customer.id === id);
      if (existingCustomer) {
        existingCustomer.name = name;
      }
    },
    // set the state to the new array of customers
    customersReceived(state, action) {
      return action.payload;
    },
  },
});

export const {
  customerAdded,
  customerRemoved,
  customerUpdated,
  customersReceived,
} = customersSlice.actions;

export default customersSlice.reducer;
