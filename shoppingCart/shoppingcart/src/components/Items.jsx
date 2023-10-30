import styles from "../styles/item.module.css";
import ItemCard from "./ItemCard";
import itemData from '../data/itemData';

function Items() {
  return (
    <div className={styles.wrapper}>
      {itemData.map((data)=> {
        return <ItemCard  key={data.id} id={data.id} name={data.name} price={data.price} />
      })}
      
    </div>
  );
}

export default Items;