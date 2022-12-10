import React, { useState } from "react";
import './cart.css'
import TotalView from "./TotalView";

const GroupedButton = () => {
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };
   let amo=counter

    return (
        <div class="group-buttons">
            <button onClick={() => handleDecrement()} disabled={counter == 0}>-</button>
            <button disabled id="product-icrement" onChange={()=>props.alert(amo)}>{counter}</button>
            <button onClick={() => handleIncrement()}>+</button>
        </div>
    );
}

export default GroupedButton;