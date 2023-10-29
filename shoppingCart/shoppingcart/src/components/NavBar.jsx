import React from "react";
import styles from "../styles/total.module.css";
import { useContext } from "react";
import { useValue } from "../ItemContext";


function Navbar() {
  const {item, total} = useValue();
  
  
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
