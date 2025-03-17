const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => {
    return (<div className="flex justify-center items-center w-full h-screen">
        <div className="sm:h-[80vh] h-[75vh] w-[90vw] sm:w-[30vw] border border-gray-400 rounded-2xl shadow-sm shadow-gray-400">
            {props.children}
        </div>
    </div>)
}

export default PageLayout;