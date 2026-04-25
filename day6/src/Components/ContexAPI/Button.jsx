import React, { useContext } from "react"
import { UserContext } from "../../Contex/UseContex"
function Button(){
    const {buttonName, login}=useContext(UserContext)
    return(
        <div>
            
            <button onClick={()=>login("John","john@gmail.com")}>{buttonName}</button><br/>
           <h2>This is Button</h2> 

        </div>
    );
}
export default Button