import React from 'react'
import { useGlobalContext } from './context'

const CartContainer = () => {
    const {cart} = useGlobalContext();
    if(cart.length === 0 ){
        return (
            <section className='cart'>

            <header>
                <h2>your wishlist</h2>
                <h4 className='empty-cart'> is currently empty</h4>
            </header>
            </section>
        )
    }
  return (
    <section className='cart'>
      <header>
        <h2>your wishlist</h2>
      </header>
      <div>

      </div>
      <footer>
        <hr />
        <div className="class-total">
            <h4>total<span>$ 0.00</span></h4>
        </div>
        <button className='btn clear-btn' onClick={() => console.log('clear cart')}>clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer