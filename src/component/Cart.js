import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const items=useSelector(store=>store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
  return (
    <div>
      <p className="text-center font-bold m-4 p-4 text-xl">Cart</p>
      <div className="w-7/12 p-4 text-center m-auto border-gray-400 rounded-lg">
        <button className="bg-black rounded-l text-white p-1" onClick={handleClearCart}>Clear Cart</button>
        <ItemList items={items}/>        
      </div>
    </div>
  );
};

export default Cart;
