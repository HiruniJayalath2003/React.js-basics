import React, { useContext,useState } from "react"
import { UserContext } from "../../Contex/UseContex"

function Message() {
    const { user, login, logout } = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div>
           <h3> This is Message.</h3><br/>
            {
                user ? (
                    <div>
                        <h4>Hello {user.name}</h4>
                        <h4>Your E-mail is:  {user.email}</h4>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <input
                            type="text" placeholder="Name" value={name}onChange={(e) => setName(e.target.value)}
                        />
                        <br/>
                        <br/>

                        <input
                            type="text" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/>
                        <br/>

                        <button onClick={()=>login(name,email)}>Login</button>
                    </div>
                )}
        </div>
    );
}
export default Message