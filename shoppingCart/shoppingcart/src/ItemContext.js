import { createContext, useContext, useState } from "react";


const itemContext = createContext();

function useValue() {
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    
    const handleAdd = (price) => {
        setTotal(total + price);
        setItem(item +1);
      };
    
      const handleRemove = (price) => {
        if(total <= 0) {
          return;
        }
         setTotal((prevSate)=> prevSate - price);
         setItem(item-1);
      };

    return (
    <itemContext.Provider value={{total, handleAdd, handleRemove, setTotal, item, setItem}}>
       {children}
    </itemContext.Provider>
    )
}
export {itemContext, useValue};
export default CustomItemContext;