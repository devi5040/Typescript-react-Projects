import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {evaluate} from 'mathjs'

interface CalculatorState {
  inputString: string,
  output:number|string
}

const initialState: CalculatorState = {
  inputString: '',
  output:0
};

const calculatorSlice = createSlice ({
  name: 'calculator',
  initialState,
  reducers: {
    updateInput: (state, action: PayloadAction<string>) => {
      state.inputString += action.payload;
    },
    calculateOutput: (state,action: PayloadAction<string>) => {
      try {
        const result = evaluate(action.payload);
        state.output = result;
      } catch (error) {
        state.output = "Invalid Expression";
      }
    },
    clear: (state)=>{
      state.inputString='',
      state.output=0
    }
  },
});

export const {updateInput, calculateOutput,clear} = calculatorSlice.actions;
export default calculatorSlice.reducer;
