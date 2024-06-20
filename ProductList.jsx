import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../slices/productSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price} $</p>
          <p>{product.available ? 'Available' : 'Unavailable'}</p>
          <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
          <button onClick={() => dispatch(toggleAvailability(product.id))}>
            Toggle Availability
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
