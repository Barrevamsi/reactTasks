function Form(){
    var a=false;
    return(
        <>
        <form action="submit" onChange={(e)=>e.preventDefault()}>
            <label htmlFor="">Enter the name</label>
            <input type="text" placeholder="enter the name" required/>
            <label htmlFor="">Enter the password</label>
            <input type="password" required/>
            <button onClick={()=>{
                a=true
            }}>click to sign in</button>
            <h2>sign in {a}</h2>
            <button onClick={()=>{
                if(a){
                    alert("sucessfully login")
                }
                else{
                    alert("sign in first")
                }
            }}>LOGIN</button>
        </form>
        </>
    )
}
export default Form