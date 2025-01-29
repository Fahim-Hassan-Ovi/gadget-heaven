import React from 'react';

const Card = ({ product }) => {
    const { price, product_title, product_image } = product;
    return (
        <div className="card bg-base-100 border  border-gray-200 flex flex-col w-[327px] md:w-full h-[380px]">
            <figure className="px-2 pt-2 ">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl w-[282px] h-[182px] flex-grow" />
            </figure>
            <div className="card-body items-start text-start">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}k</p>
                <div className="card-actions ">
                    <button className="btn w-[160px] border-[#9538E2] text-[#9538E2] rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;