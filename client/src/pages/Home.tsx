import React, {useState, useEffect} from 'react';
import Client from "../Client";
import { User } from '../types'
import './styles.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[user, setUser] = useState<User | null>(null)


  const logInUser = async ()=>{
      try{
      const resp = await Client.post("//localhost:4500/login",{
          email,
          password,
      });

      window.location.href = "/ai-session";
  }
      catch(error: any){
          if (error.response.status === 401){
              alert("Invalid credentials");
          }
  };
  }

useEffect(() => {
      (async () => {
          try{
         const resp = await Client.get("//localhost:4500/@me");

         setUser(resp.data);
         window.location.href ="/ai-session";
          }catch(error){
              console.log("Not authenticated");
          }
          if(user!= null){
              window.location.href = "/ai-session";
          }
      })();
  }, []);
return ( 
  <div
        className="bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp')",
          height: "100vh"
        }}
      >
  <MDBContainer>
  <MDBRow style={{marginTop:'10%'}}>
    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 85%)'}}>
          SoundScape AI
        </h1>
        <p className='custom-px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
        Where artifical intelligence meets your music taste.
        </p>
    </MDBCol>
    <MDBCol md='6' className='position-relative'>
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>
          <div className="text-center">
          <h2 style={{alignItems: 'center'}} className="fw-bold mb-2">Sign in</h2>
          <br></br>
          </div>
            <MDBInput labelStyle={{fontSize: '1.1em', paddingBlock: '0.2em'}} wrapperClass='mb-4'  value={email} onChange={(e) => setEmail(e.target.value)} label='Email*' id='form3' type='email'/>
            <MDBInput labelStyle={{fontSize: '1.1em', paddingBlock: '0.2em'}} wrapperClass='mb-4'  value={password} onChange={(e) => setPassword(e.target.value)} label='Password*' id='form4' type='password'/>
            <MDBBtn  onClick={() => logInUser()} className='w-100 mb-4' size='lg'>Log in</MDBBtn>

            <div className="text-center">
              <p>Don't have an account? <a href= "/register"style={{fontWeight: "bold"}}>Register</a></p>
            </div>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </div>
    );
};

export default Home;