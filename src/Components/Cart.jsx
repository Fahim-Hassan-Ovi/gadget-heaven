import { FaSortAmountDown } from "react-icons/fa";
import CartDetails from "./CartDetails";
import { useEffect, useState } from "react";
import { clearCart, getAllCarts } from "../Utilities";
import ModalImg from "../assets/Group.png";
import { NavLink } from "react-router-dom";
const Cart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const carts = getAllCarts();
        setProducts(carts);
    }, []);


    // total cost count
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        setTotalCost()
        const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
        setTotalCost(totalPrice)
    }, [products])

    // handle purchase by click
    const handlePurchase = () =>{
        clearCart();

        setTotalCost(0);
        document.getElementById('my_modal_1').showModal();
    }



    // sort by price
    const handleSort = (sortBy) => {
        if (sortBy === 'price') {
            const sortProduct = [...products].sort((a, b) => b.price - a.price);
            setProducts(sortProduct);
        }
    }

    return (
        <div className="md:px-[106px]">
            <div className="flex justify-between items-center py-8">
                <div>
                    <p className="text-bold text-xl">Cart</p>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <p className="text-bold text-xl">Total cost : ${totalCost}</p>
                    <button onClick={() => handleSort('price')} className="btn h-[52px] rounded-full bg-transparent text-[#9538E2] border border-[#9538E2] font-bold
                        "><div className="flex justify-between gap-6 items-center">
                            <span>Sort By Price</span>
                            <FaSortAmountDown size={20} />
                        </div>
                    </button>
                    <button onClick={()=> {handlePurchase()}} className={`btn h-[52px] rounded-full bg-[#9538E2] text-white font-bold`}>Purchase</button>
                </div>
                {/* Modal */}
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box px-5 py-10 flex flex-col justify-center items-center">
                        <img className="text-6xl" src={ModalImg} alt="" />
                        <h3 className="font-bold text-2xl my-5">Payment Successfully </h3>
                        <div className="text-center">
                            <p className="text-gray-400">Thanks for purchasing. </p>
                            <p className="text-gray-400">Total: ${totalCost} </p>
                        </div>
                       
                            <NavLink to='/' id="btn-continue" className="btn bg-[] px-16 btn-md hover:bg-primary transition-colors ease-in duration-300 text-gray-400"
                            onClick={()=>document.getElementById('my_modal_1').closest()}
                            >Close</NavLink>
                    </form>
                </dialog>
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