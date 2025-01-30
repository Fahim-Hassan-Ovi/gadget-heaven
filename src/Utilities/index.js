import toast from "react-hot-toast";
// get all carts from local storage
const getAllCarts = () => {
    const all = localStorage.getItem('cart');
    if (all) {
        const carts = JSON.parse(all);
        return carts;
    }
    else {
        return [];
    }
}

// add a cart product in local storage
const addCart = product => {
    // get all previous saved products
    const carts = getAllCarts();
    carts.push(product);
    localStorage.setItem('cart', JSON.stringify(carts));
    toast.success('Successfully Added To The Cart');
}

export{addCart, getAllCarts};