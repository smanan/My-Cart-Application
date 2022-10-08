const reducer = (state, action) => {
  // return state;
  if (action.type === "CLEAR CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem !== 0);
    return { ...state, cart: tempCart };
  }
  if(action.type === "GET_TOTALS"){
    let {total,amount} = state.cart.reduce(
        (cartTotal ,cartItem) =>{
            const {price , amount} = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
        }
    )
  }
};

export default reducer;
