import { useState } from "react";

function Counter(){
    const [count,setcount]=useState(0)
    const[theme,settheme]=useState("black");
    function inc()
    {
        setcount(count+1)
    }
    function dec(){
        setcount(count-1)
    }
    function change(){
        if(theme=="black"){
            settheme("white")
        }
        else{
            settheme("black")
        }
        var a=document.getElementById("color");
        a.setAttribute('style',`background-color:${theme}`)

    }
    return(
        
        <div id="color" style={{height:`100vh`,width:`100%`}}>
        <h2>{count}</h2>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        <button onClick={()=>{
            setcount(0)
        }}>reset</button>
        <br /><br />
        <button onClick={change}>theme</button>
        </div>
        
        
    )
}
export default Counter;