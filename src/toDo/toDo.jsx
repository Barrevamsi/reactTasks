// import { useState } from "react";
// function ToDo(){
//     const [input,setInput]=useState("")
//     const [tasks,setTasks]=useState([])
//     function add(){
//             setTasks([...tasks,input]);
//             setInput("")    
//     };
//     const deleteTask =(index)=>{
//         var a=tasks.filter((val,i)=>i!==index)
//         setTasks(a)
//     }
//     return(
//         <>
//         <input type="text" placeholder="ad the data" value={input} onChange={(e)=>{
//             e.preventDefault();
//             setInput(e.target.value)}}/>
//         <button onClick={add}>add</button>
//         <ul>
//            {tasks.map((val,ind)=>{
//            return <li key={ind}>
//                 {val}
//                { console.log(val)}
//                 <button onClick={()=>{deleteTask(ind)}}>delete</button>
//             </li>
//            })}
//         </ul>
//         </>
//         )
//     }
//     export default ToDo;

import { useState } from "react";
function ToDo(){
    const[val,setVal]=useState("");
    const[list,setList]=useState([])
    function add(){
        setList([...list,val])
        setVal("")
        // console.log(list)
    }
    function remove(ind){
        setList(list.filter((val,index)=>index!==ind))
    }
    function edit(){

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
                <button  style={{marginLeft:"12px",width:"100px"}}onClick={edit}> Edit</button>
                </li>
            })}
        </ul>
        </>
    )
    }
    export default ToDo;