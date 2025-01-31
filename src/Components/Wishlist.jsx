import { useEffect, useState } from "react";
import { getAllWishlist } from "../Utilities";
import CartDetails from "./CartDetails";

const Wishlist = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const wishlists = getAllWishlist();
        setProducts(wishlists);
    },[])
    return (
        <div className="flex flex-col gap-6">
        {
            products.map(product => <CartDetails key={product.product_id} product={product} />)
        }
        </div>
    );
};

export default Wishlist;