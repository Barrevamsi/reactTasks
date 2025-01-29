import { useState } from "react";
import Child from "./child";

function Parent(){

    const[val,setVal]=useState("hello");
    return(
        <>
        <Child prop={val}/>
        </>
    )

}
export default Parent;