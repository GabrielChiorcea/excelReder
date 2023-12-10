import { configureStore } from '@reduxjs/toolkit';

import excelReader from './excel-slice';

const store = configureStore({
  reducer: { exe: excelReader.reducer },
});

export default store;
