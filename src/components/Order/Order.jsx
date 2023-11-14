import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../fakeData/fakeDb';
import './../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react'; 
const Order = () => {
    const storedCart = getShoppingCart();
    const products = useLoaderData();
    let newCart = [];
    for (const id in storedCart) {
        const item = products.find(pd => pd.id === id);
        item.quantity = storedCart[id];
        newCart.push(item);
    }
    const [cart, setCart] = useState(newCart);
    const handleRemoveProduct = (id) => {
        let anotherNewCart = [];
        removeFromDb(id);
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const pd = cart.find(pd => pd.id === id);
            anotherNewCart.push(pd);
        }
        setCart(anotherNewCart);
    }
    //console.log(cart);
    const handleDeleteCart = () => {
        setCart([]);
        deleteShoppingCart();
    } 
    let message = '';
    if (cart.length === 0) message = 'Cart is Empty!';
    return (
        <div>
            <h3 style={{ textAlign: 'center'}}>{message}</h3>
            <div className='shop'>
                <div className='product-container'>
                    { 
                        cart.map(product => <ReviewItem handleRemoveProduct={handleRemoveProduct} key={product.id} product={product}></ReviewItem>)
                    }
                </div>
                <div className="">
                    <Cart handleDeleteCart={handleDeleteCart} cart={cart}>
                        <Link to='/proceed'>Proceed Checkout</Link>
                    </Cart>
                </div>
            </div>
        </div>

    );
};

export default Order;