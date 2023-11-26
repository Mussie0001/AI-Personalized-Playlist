import React, {useState, useEffect} from 'react'
import { User } from '../types'
import Client from '../Client'

const Landing: React.FC = () =>{

    const[user, setUser] = useState<User | null>(null)

    const logoutUser = async() =>{
        const resp = await Client.post("//localhost:4500/logout");
        window.location.href="/"
    }

    useEffect(() => {
        (async () => {
            try{
           const resp = await Client.get("//localhost:4500/@me");

           setUser(resp.data);
            }catch(error){
                console.log("Not authenticated");
            }
        })();
    }, []);
    return (
        <div>
            <h1>Welcome to this React Application</h1>
            <br />
            {user != null? ( 
          <div>
          <h1>Logged in</h1>
          <h2>Email: {user.email}</h2>
          <h2>ID: {user.id}</h2>
          <button onClick = {logoutUser}>Logout</button>
          </div>
          ) : (
            <div>
                <p>You are not logged in</p>
                <div>
                <a href = "/login"><button>Login</button></a>
                 <a href = "/register"><button>Register</button></a>
                </div>
                </div>
          )}
        </div>
    );
};

export default Landing;