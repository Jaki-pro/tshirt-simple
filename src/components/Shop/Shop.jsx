import React, { useEffect, useState } from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../fakeData/fakeDb';
import toast, { Toaster } from 'react-hot-toast';

const Shop = () => {
    const loader = useLoaderData();
    const products = loader; 
    const [cart, setCart] = useState([]); 
    const handleAddProduct=(product)=>{
        addToDb(product.id);
        let newCart = [];
        const exist  = cart.find(pd=>pd.id===product.id);
        if(!exist)
        {
            product.quantity=1;
            newCart=[...cart, product];
        }
        else
        {
            exist.quantity+=1;
            const remaining = cart.filter(pd=> pd.id!==exist.id);
            newCart = [...remaining, exist];
        }
        setCart(newCart); 
    }
    useEffect(()=>{
        const storedCart = getShoppingCart();
        let newCart = [];
        for(const id in storedCart)
        {
            const addedProduct = products.find(pd=>pd.id===id);
            if(addedProduct)
            {
                addedProduct.quantity=storedCart[id];
                newCart.push(addedProduct)
                

            }
        }
        setCart(newCart)
    },[products])
    const handleDeleteCart=()=>
    {
        setCart([]);
        deleteShoppingCart();
    }
    let path='/shop'; 
    if(cart.length!=0) path='/order';
    const toasting=()=>
    {
        if(cart.length===0) {toast('Your Cart is Empty'); } 
    } 
    return (
        <div className='shop'> 
            <div className='product-container'> 
                {
                    products.map(product => <Product handleAddProduct={handleAddProduct} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart handleDeleteCart={handleDeleteCart} cart={cart}>
                    <Link onClick={toasting} to={path}>Review Order</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;