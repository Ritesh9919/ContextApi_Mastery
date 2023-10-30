import React from "react";
import styles from "../styles/total.module.css";
import { useValue } from "../ItemContext";



function Navbar() {
  const {item, total, toggle, handleReset} = useValue();
  
  
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styles.button} onClick={toggle}>Cart</button>
      <button onClick={handleReset} className={styles.button}>Reset</button>


    </div>
  );
}

export default Navbar;
