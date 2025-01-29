import ErrorImg from ".././assets/error.jpg"
const Error = () => {
    return (
        <div className="py-16 px-16 ">
            <img src={ErrorImg} alt="" />
            <p className="text-2xl font-bold">Oops! The page you&apos;re looking for doesn&apos;t exist. </p>
        </div>
    );
};

export default Error;