import Username from "../Username/Username"
import { useState , useCallback } from "react"
function Counter(){

    const sayHello=useCallback(()=>console.log("hello username"),[])
    const [count,setCount]=useState(0);
    return(
        <>
        <p>count is : {count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}> plus count by 1</button>
        <Username onClick={sayHello} />
        </>
    )
}

export default Counter