import { useState } from "react";
function ToDo(){
    const[val,setVal]=useState("");
    const[list,setList]=useState([]);
    const[ed,setEdit]=useState(null);

    function add(){
        if(val!==""){
            
            if(ed!==null){
                var update=[...list]
                update[ed]=val
                setList(update)
                setEdit(null)
            }
            else{
                setList([...list,val]);
            }
        }
        else{
            alert("Enter the input")
        }
       setVal("")
    }
    function remove(ind){
        setList(list.filter((val,index)=>index!==ind))
    }
    function edit(ind){
       setVal(list[ind])
       setEdit(ind)

    }

    return(
        <>
        <input type="text" value={val} onChange={(e)=>{
            // e.preventDefault();
            setVal(e.target.value)

        }}/>
        {/* {console.log(val)} */}
        
        <button style={{marginLeft:"12px",width:"100px"}} onClick={add}>Add</button>
        <ul>
            {list.map((value,ind)=>{
                return <li key={ind}>{value}
                <button  style={{marginLeft:"12px",width:"100px"}} onClick={()=>remove(ind)}> Remove</button>
                <button  style={{marginLeft:"12px",width:"100px"}}onClick={()=>edit(ind)}> Edit</button>
                </li>
            })}
        </ul>
        </>
    )
    }
    export default ToDo;