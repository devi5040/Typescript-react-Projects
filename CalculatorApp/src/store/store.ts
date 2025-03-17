import {configureStore} from '@reduxjs/toolkit';
import calculatorSlice from './slice'

const store = configureStore ({
  reducer: {
    calculator: calculatorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
