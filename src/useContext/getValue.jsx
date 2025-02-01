import { useContext } from "react";
import {context} from "./c";
import Context from "./constext";
function GetValue(){
    var name=useContext(context); 
    console.log(name,"sdfg")
    return(
        <>
           
        </>
        )
}
export default GetValue;