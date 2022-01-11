import { useApp } from "../../Context";
import Card from "../card/Card";
import * as styled from "./Styled";

export default function Cart() {
  const { cart } = useApp();

  const total = () => {
    let t = 0;
    cart.map((prod) => {
      let prodTotal = 0;
      prodTotal = prod.price * prod.quantity;
      t += prodTotal;
      return t;
    });
    return t;
  };

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <styled.Wrapper data-testid="cart-wrapper">
      <styled.Cart>
        <styled.Title>Cart</styled.Title>
        <styled.CartProducts>
          <table data-testid="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price(€)</th>
                <th>Quantity</th>
                <th>Total(€)</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td />
                <td>{totalItems}</td>
                <td>{total()}</td>
              </tr>
            </tbody>
          </table>
        </styled.CartProducts>
        <styled.Checkout>
          Total: € {total()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Checkout
        </styled.Checkout>
      </styled.Cart>
      <styled.Products data-testid="cart-products">
        {cart.map((product) => (
          <Card key={product.id} product={product} />
        ))}
        {[...Array(5)].map((e, i) => (
          <styled.EmptyCard data-testid="cart-empty-products" key={i} />
        ))}
      </styled.Products>
    </styled.Wrapper>
  );
}
