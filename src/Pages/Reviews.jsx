import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../Components/Review";

const Reviews = () => {
    const data = useLoaderData();
    const [reviews,setReviews]= useState([]);
    useEffect(()=>{
        setReviews(data);
    },[data])
    return (
        <div className="">
            <div className="md:px-[210px] pt-8 justify-center items-center text-center bg-[#9538E2]   ">
                <h1 className="text-5xl font-bold text-white">Review</h1>
                <p className="py-6 text-white">
                This gadget exceeded my expectations with its sleek design, fast performance, and long-lasting battery life. The display is crisp and vibrant, making it perfect for both work and entertainment. It&apos;s lightweight yet powerful, and the user experience is smooth and intuitive. Definitely a great investment!
                </p>
                
            </div>
                {/* dynamic product details */}
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    {
                        reviews.map(review => <Review key={review.customer_id} review={review} />)
                    }
                </div>
        </div>
    );
};

export default Reviews;