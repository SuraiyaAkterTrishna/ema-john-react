import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleAddToCart}) => {
  const { img, name, seller, price, ratings, shipping } = product;
  
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p className="price">Price: ${price}</p>
        <p className="seller">Manufacturer: {seller}</p>
        <p className="rating">Rating: {ratings}</p>
        <p className="shipping">Shipping Charge: {shipping}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
