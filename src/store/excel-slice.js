import { createSlice } from '@reduxjs/toolkit';

const excelReader = createSlice({
  name: 'exe',
  initialState: {
    excelUpLoad: false,
    excelResponse: { question: 'not ask' },
    chart: false,
    count: 0,
  },
  reducers: {
    excelUpLoad(state, action) {
      state.excelUpLoad = action.payload;
    },
    excelResponse(state, action) {
      state.excelResponse = action.payload;
    },
    chart(state, action) {
      state.chart = action.payload;
    },
  },
});

export const excelAction = excelReader.actions;

export default excelReader;
