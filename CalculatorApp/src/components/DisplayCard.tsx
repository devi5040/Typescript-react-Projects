import { RootState } from "../store/store"
import { useEffect } from "react";
import { useSelector } from "react-redux"

const DisplayCard = () => {
    const inputString = useSelector((state: RootState) => state.calculator.inputString)
    const result = useSelector((state: RootState) => state.calculator.output);
    useEffect(() => { }, [result, inputString]);
    return <div className="border border-gray-500 rounded-2xl h-[10vh] relative">
        <p className="absolute right-5 top-0.5 text-gray-300 font-semibold text-md">{inputString}</p>
        <h1 className="absolute right-5 bottom-2 text-white font-semibold text-3xl">{result}</h1>
    </div>
}

export default DisplayCard;