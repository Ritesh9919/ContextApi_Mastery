import React from "react";
import styles from "../styles/itemCard.module.css";
import { useContext } from "react";
import { useValue } from "../ItemContext";



function ItemCard({ name, price, id }) {
  console.log(name);
  const {handleAdd, handleRemove} = useValue();
  
  
  // const handleAdd = () => {
  //   setTotal(total + price);
  //   setItem(item +1);
  // };

  // const handleRemove = () => {
  //   if(total <= 0) {
  //     return;
  //   }
  //    setTotal((prevSate)=> prevSate - price);
  //    setItem(item-1);
  // };

  return (
    <div className={styles.itemCard}>
      
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id, name, price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
