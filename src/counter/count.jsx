import { useState } from "react";

function Count(){
    const[count,setcount]=useState(0);
    function increase(){
        setcount(count+2)
    }
    function decrease(){
        setcount(count-1)
    }
    const Reset = (e) =>{
        setcount(0)
    }
    return(
        <>
        <h2>{count}</h2>
        {console.log(count)}
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={Reset}>reset</button>
        </>
    )
}
export default Count;