import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveProduct }) => {
    return (
        <div className='review-item'>
            <div className='first'>
                <img src={product.picture} alt="" />
                <div>
                    <h5>{product.name}</h5>
                    <p>Price: ${product.price}</p>
                    <p>quantity: {product.quantity}</p>
                </div>
            </div>
            <button onClick={() => handleRemoveProduct(product.id)}>Delete</button>
        </div>

    );
};
ReviewItem.propTypes;
export default ReviewItem;