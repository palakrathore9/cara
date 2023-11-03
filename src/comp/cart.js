import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({ cart, setCart }) => {
  const incqty = (product) => {
    const updatedCart = cart.map((curElm) => curElm.id === product.id ? { ...curElm, qty: curElm.qty + 1 } : curElm);
    setCart(updatedCart);
  }

  const decqty = (product) => {
    const updatedCart = cart.map((curElm) => {
      if (curElm.id === product.id) {
        const updatedQty = curElm.qty - 1;
        return { ...curElm, qty: updatedQty >= 1 ? updatedQty : 1 };
      }
      return curElm;
    });
    setCart(updatedCart);
  }

  const removeproduct = (product) => {
    const updatedCart = cart.filter((curElm) => curElm.id !== product.id);
    setCart(updatedCart);
  }

  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className='cart'>
        <h3>#cart</h3>
        {cart.length === 0 &&
          <>
            <div className='empty_cart'>
              <h2>Your Shopping cart is empty</h2>
              <Link to='/shop'><button>Shop Now</button></Link>
            </div>
          </>
        }
        <div className='container'>
          {cart.map((curElm) => {
            return (
              <>
                <div className='box' key={curElm.id}>
                  <div className='img_box'>
                    <img src={curElm.image} alt='' />
                  </div>
                  <div className='detail'>
                    <div className='info'>
                      <h4>{curElm.cat}</h4>
                      <h3>{curElm.Name}</h3>
                      <p>Price: ${curElm.price}</p>
                      <p>Total: ${curElm.price * curElm.qty}</p>
                    </div>
                    <div className='quantity'>
                      <button onClick={() => incqty(curElm)}>+</button>
                      <input type='number' value={curElm.qty} readOnly />
                      <button onClick={() => decqty(curElm)}>-</button>
                    </div>
                    <div className='icon'>
                      <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className='bottom'>
          {cart.length > 0 &&
            <>
              <div className='Total'>
                <h4>Sub Total: ${total}</h4>
              </div>
              <button>checkout</button>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Cart;




