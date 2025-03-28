import { useEffect, useState } from "react";

function Api(){
    const[data,setData]=useState([]);
    const[fdata,setFdata]=useState([])
    const [filter,setCategory]=useState("");
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setData(data)
            setFdata(data)
        })
        .catch((error)=>console.log(error))
    },[])

    useEffect(()=>{
        if(filter==="all"){
            setFdata(data)
        }
        else if(filter){
            setFdata(data.filter((item)=>item.category===filter))
        }
        else{
            setData(data)
        }
    },[filter,data])
    function change(e){
        setCategory(e.target.value);
    }

    return(
        <>
        <label  >select categoy</label>
        <select name="select" id="catogory" onChange={change}>
            <option value="all" >all</option>
            <option value="men's clothing">men's cloathing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's cloathing</option>
        </select>
        {console.log(data)}
        {fdata.map((val,ind)=>{
            return(
               <table key={ind} style={{border:"1px solid black"}}>
                <tbody>
                    <tr>
                        <td style={{width:"50px"}}>{val.id}</td>
                        <td style={{width:"150px"}}>{val.category}</td>
                        <td style={{width:"400px"}}>{val.title}</td>
                        <td><img src={val.image} alt="a" height={"100px"} width={"100px"} /></td>
                    </tr>  
                </tbody>       
               </table>
            )
        })}

        </>
    )
}
export default Api;