import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./Context";

const CartContainer = () => {
  const { cart, amount , clearCart} = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your wishlist</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your wishlist</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="class-total">
          <h4>
            total<span>$ {total * 75}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
