import './Product.css'
const Product = ({product, handleAddProduct}) => {
    return (
        <div className='product'> 
            <img src={product.picture} alt="" />
            <h5>{product.name}</h5>
            <p style={{marginBottom:'30px'}}>Price: ${product.price}</p>
            <button onClick={()=> handleAddProduct(product)}>Add to Cart</button>
        </div>
    );
};
Product.propTypes;
export default Product;