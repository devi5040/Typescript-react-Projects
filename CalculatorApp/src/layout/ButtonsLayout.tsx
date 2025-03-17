import Button from "../components/Button"

const ButtonsLayout = () => {
    return <div className="grid grid-cols-4 gap-5 sm:gap-2 my-5">
        <Button title="AC" btnColor="btn-green" />
        <Button title="%" btnColor="btn-green" />
        <Button title="/" btnColor="btn-green" />
        <Button title="!" btnColor="btn-red" />
        <Button title="7" btnColor="gray-300" />
        <Button title="8" btnColor="gray-300" />
        <Button title="9" btnColor="gray-300" />
        <Button title="*" btnColor="btn-red" />
        <Button title="4" btnColor="gray-300" />
        <Button title="5" btnColor="gray-300" />
        <Button title="6" btnColor="gray-300" />
        <Button title="-" btnColor="btn-red" />
        <Button title="3" btnColor="gray-300" />
        <Button title="2" btnColor="gray-300" />
        <Button title="1" btnColor="gray-300" />
        <Button title="+" btnColor="btn-red" />
        <Button title="R" btnColor="btn-green" />
        <Button title="0" btnColor="gray-300" />
        <Button title="." btnColor="gray-300" />
        <Button title="=" btnColor="btn-red" />
    </div>
}

export default ButtonsLayout