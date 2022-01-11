import { useApp } from "../../../Context";
import * as styled from "./Styled";

export const AddToCart = ({ product }) => {
  const { addToCart, cart } = useApp();

  const isProductInCart = () => {
    if (cart.length > 0) {
      const prod = cart.find((item) => item.id === product.id);
      return !!prod;
    } else return false;
  };

  return (
    <styled.AddToCart
      data-testid="add-to-cart"
      className="add-to-cart"
      added={isProductInCart()}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
      }}
    >
      {isProductInCart() ? 'Added to cart' : 'Add to cart'}
    </styled.AddToCart>
  );
};

export const IncreaseDecrease = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useApp();

  return (
    <styled.IncreaseDecrease data-testid="increase-decrease">
      <button onClick={() => addToCart(product)}>+</button>
      <span>
        {cart.length && cart.find((item) => item.id === product.id).quantity}
      </span>
      <button onClick={() => removeFromCart(product)}>-</button>
    </styled.IncreaseDecrease>
  );
};
