import { IoIosCloseCircleOutline } from "react-icons/io";
const CartDetails = ({product}) => {
    const {product_title, product_image, price, description} = product || {};
    return (
        <div className="flex flex-col md:flex-row gap-6 border border-gray-300 rounded-2xl p-6 mb-8">
            <div className="w-1/10">
                <img className="" src={product_image} alt="" />
            </div>
            <div className="text-start space-y-6 items-start w-full">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">{product_title}</h1>
                    <IoIosCloseCircleOutline size={20}/>
                </div>
                <p className="text-lg text-gray-400">{description}</p>
                <p className="font-bold text-xl">Price: ${price}</p>
            </div>
        </div>
    );
};

export default CartDetails;