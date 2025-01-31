import { FaSortAmountDown } from "react-icons/fa";
import CartDetails from "./CartDetails";
import { useEffect, useState } from "react";
import { getAllCarts } from "../Utilities";
const Cart = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const carts = getAllCarts();
        setProducts(carts);
    },[])
    return (
        <div className="md:px-[106px]">
            <div className="flex justify-between items-center py-8">
                <div>
                    <p className="text-bold text-xl">Cart</p>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <p className="text-bold text-xl">Total cost : test value</p>
                    <button className="btn h-[52px] rounded-full bg-transparent text-[#9538E2] border border-[#9538E2] font-bold
                        "><div className="flex justify-between gap-6 items-center">
                            <span>Sort By Price</span>
                            <FaSortAmountDown size={20}/>
                        </div>
                    </button>
                    <button className={`btn h-[52px] rounded-full bg-[#9538E2] text-white font-bold`}>Purchase</button>
                </div>
            </div>
            {/* Dynamic Cart Details */}
            <div className="flex flex-col gap-6">
            {
                products.map(product => <CartDetails key={product.product_id} product={product} />)
            }
            </div>
        </div>
    );
};

export default Cart;