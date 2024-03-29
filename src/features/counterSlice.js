import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
    error: null,
    data: null,
    count: 0 // Додаємо нове поле count до початкового стану
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    fetchDataRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    incrementCount: state => {
      state.count += 1;
    },
    decrementCount: state => {
      state.count -= 1;
    }
  }
});

export const { increment, decrement, fetchDataRequest, fetchDataSuccess, fetchDataFailure, incrementCount, decrementCount } = counterSlice.actions;

export default counterSlice.reducer;
