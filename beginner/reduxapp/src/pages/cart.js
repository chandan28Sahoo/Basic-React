import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
// import { useDispatch } from 'react-redux';

 const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.cart);
    // console.log("productsproducts",products);
    const handleRemove = (id) => {
        dispatch(remove(id));
    }
  return (
    <div className="cartWrapper">
    {products.map((product) => (
      <div className="cartCard" key={product.id}>
        <img className="image" src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <button onClick={()=> handleRemove(product.id)} className="btn">remove</button>
      </div>
    ))}
  </div>
  )
}



export default Cart;