import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import StarRating from "../Components/StarRating";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { addCart, addWishlist } from "../Utilities";
const ProductDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [wishlistProduct, setWishlistProduct] = useState({});

    useEffect(() => {
        const singleWishlist = data.find(product => product.product_id === parseInt(id));
        setWishlistProduct(singleWishlist);
    }, [data, id]);

    useEffect(() => {
        const singleProduct = data.find(product => product.product_id === parseInt(id));
        setProduct(singleProduct);
    }, [data, id]);

    const { rating, availability, specifications, description, price, product_image, product_title } = product;

    // handle cart by click
    const handleCart = (product) =>{
        addCart(product);
    } 
    // handle wishlist by click
    const handleWishlist = (product) =>{
      
        addWishlist(product);
    }
    return (
        <div className="min-h-screen">
            <div className="md:px-[210px] pt-8 justify-center items-center text-center bg-[#9538E2] md:h-[430px] rounded-b-2xl md:relative">
                <h1 className="text-5xl font-bold text-white">Product Details</h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                {/* dynamic product details */}
                <div className="rounded-2xl md:max-w-[1280px] h-fit md:absolute inset-0 m-auto top-[450px] flex flex-col md:flex-row gap-8 bg-[#FFFFFF] p-8 border-gray-200 border-2">
                    {/* image */}
                    <div className="w-1/3 ">
                        <img className="rounded-2xl h-full" src={product_image} alt={product_title} />
                    </div>
                    {/* details */}
                    <div className="w-2/3 flex flex-col items-start gap-4">
                        <h2 className="text-3xl font-semibold">{product_title}</h2>
                        <p className="font-semibold text-xl">Price: {price}k</p>
                        <button className="btn border-green-800 border-2 rounded-full w-[87px] h-[32px]">{availability ? 'In Stock' : 'Out of Stock'}</button>
                        <p>{description}</p>
                        <p className="font-semibold text-xl">Specification</p>
                        <ul>
                            {
                                specifications &&specifications.map((specific, idx) => (
                                    <li className="list-decimal text-start ml-5" key={idx}>{specific}</li>
                                ))
                            }
                        </ul>
                        <p className="font-semibold text-xl">Rating</p>
                        <div className="flex justify-center items-center">
                        <StarRating rating={rating} />
                        <button className="btn-sm rounded-full">{rating}</button>
                        </div>
                        <div className="flex items-center gap-8">
                        <button onClick={()=> handleCart(product)} className="btn w-full h-[52px] rounded-full bg-[#9538E2] text-white font-bold
                        "><div className="flex justify-between gap-6 items-center">
                            <span>Add To Card</span>
                            <MdOutlineShoppingCart size={20} />
                        </div>
                        </button>
                        <button onClick={()=>handleWishlist(wishlistProduct)} className="btn btn-circle"><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;