import { createContext, useContext, useState } from "react";
import GetValue from "./getValue";
import  {context}  from "./c";

function Context(){
    const [names,useNames]=useState(["vamsi","muni","murali","eswar"]);
    return(
        <>
        <context.Provider value={names}>
            <GetValue/>
        </context.Provider>
        </>
    )
}
export default Context;


