const Heading: React.FC<{ heading: string }> = ({ heading }) => {
    return <h1 className="text-center my-10 font-bold dark:text-white text-3xl">{heading}</h1>
}
export default Heading;