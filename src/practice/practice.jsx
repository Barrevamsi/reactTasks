import { useEffect, useState } from "react"

function Practice(){
    let [val,setVal]=useState(null);
    useEffect(()=>{
        // fetch("https://fakestoreapi.com/products")
        // .then((res)=>{return res.json()})
        // .then((value)=>{
        //     setVal(value);
        // })
        const data=async ()=>{
            let res=await fetch("https://fakestoreapi.com/products");
           let d=await res.json();
            setVal(d)

        }
        data();
    },[])
    console.log(val)
    return(
        <>
        
        </>
    )
    
}
export default Practice;