import { useValue } from "../ItemContext";
import styles from "../styles/cartModel.module.css";

function CartModel() {
  const { toggle, cart, total, handleReset } = useValue();
  console.log("cart",cart);
  return (
    <div>
      <div className={styles.buttonContainer}>
        <div onClick={toggle}>Close</div>
        <div onClick={handleReset}>Clear</div>
      </div>

      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h2>x {item.quantity}</h2>
              <h2>x {item.quantity * item.price}</h2>
            </div>
          );
        })}
      </div>
      <div className={styles.priceTotal}>
        <div>Total</div>
        <div>${total}</div>
      </div>
    </div>
  );
}

export default CartModel;
