import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const onlineStatus=useOnlineStatus();
  const [displayButtonText,setDisplayButtonText]=useState("Login");

  const items=useSelector(store=>store.cart.items);

  const handleLoginButtonClick=()=>{
    if(displayButtonText == "Login"){
      setDisplayButtonText("Logout");
    }else{
      setDisplayButtonText("Login");
    }
  }

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div >
        <img className="w-28" src="https://t3.ftcdn.net/jpg/03/33/90/46/360_F_333904627_tnCepUpc3Uynb6stmEbverr8HeWS2VZl.jpg" alt="logo"/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">User Status : {onlineStatus?"🟢":"🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/cart">Cart🛒({items.length})</Link></li>
          <li><button className="text-white bg-black p-1 rounded-xl" onClick={()=>{handleLoginButtonClick()}}>{displayButtonText}</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
