import { useState } from "react";
const User=(props)=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return(
        <div className="user-card">
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <h3>Name : {props.name}</h3>
            <h3>Location: {props.location}</h3>
        </div>
    )
}

export default User;