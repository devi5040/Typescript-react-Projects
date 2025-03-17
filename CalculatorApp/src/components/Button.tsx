import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateOutput, updateInput, clear } from "../store/slice";
import { RootState } from "../store/store";


const Button: React.FC<{ title: string; btnColor: string }> = ({ title, btnColor }) => {
    const dispatch = useDispatch();
    const currentInput = useSelector((state: RootState) => state.calculator.inputString);
    const clickHandler = () => {
        if (title !== '=') {
            if (title === 'AC')
                dispatch(clear())
            else
                dispatch(updateInput(title));
        }
        else {
            dispatch(calculateOutput(currentInput))
        }
    }

    return <div className="bg-primary border border-gray-600 py-3 sm:w-[5vw] flex justify-center items-center rounded-xl shadow shadow-gray-600">
        <h2 className={`text-2xl font-semibold text-${btnColor} cursor-pointer`} onClick={clickHandler}>{title}</h2>
    </div>
}

export default Button;