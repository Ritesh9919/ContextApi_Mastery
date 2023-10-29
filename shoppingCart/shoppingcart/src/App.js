

import './App.css';
import Items from './components/Items';
import Navbar from './components/NavBar';
import CustomItemContext, { itemContext } from './ItemContext';



function App() {
  
  
  return (
       
        <CustomItemContext>
          <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>
        </CustomItemContext>
        

      
  );
}
export default App;