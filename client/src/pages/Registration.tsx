import React, {useState} from 'react';
import Client from "../Client";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';


  const Registration: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const registerUser = async ()=>{
        console.log(email,firstName,lastName, password)

        try {
          await Client.post("//localhost:4500/register",{
            email,
            firstName,
            lastName,
            password,
        });

        window.location.href = "/spotify-auth";
    }
        catch(error: any){
            if (error.response.status === 401){ 
                alert("Invalid credentials");
            }
    };
    }

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

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(255, 100%, 100%)'}}>
            SoundScape AI
          </h1>

          <p className='custom-px-3' style={{color: 'hsl(218, 70%, 85%)'}}>
            Where artificial intelligence meets your music taste.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
            <div className="text-center">
            <h2 style={{alignItems: 'center'}} className="fw-bold mb-2">Registration</h2>
            <br></br>
            </div>
            <MDBInput labelStyle={{fontSize: '1.1em', paddingBlock: '0.2em'}} wrapperClass='mb-4' 
            value={firstName} onChange={(e) => setFirstName(e.target.value)} label='First Name:' id='form1' type='text'/>



              <MDBInput labelStyle={{fontSize: '1.1em', paddingBlock: '0.2em'}} wrapperClass='mb-4' value={lastName}
            onChange={(e) => setLastName(e.target.value)} label='Last Name:' id='form2' type='text'/>


              <MDBInput labelStyle={{fontSize: '1.1em', paddingBlock: '0.2em'}} value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email:' id='form3' type='email'/>

              <MDBInput value={password}onChange={(e) => setPassword(e.target.value)} labelStyle={{fontSize: '1.1em', paddingBlock: '0.2em'}} wrapperClass='mb-4' label='Password:' id='form4' type='password'/>



              <MDBBtn  onClick={() => registerUser()} className='w-100 mb-4' size='lg'>Sign up</MDBBtn>

              <div className="text-center">
                    <p>Existing User? <a href= "/"style={{fontWeight: "bold"}}>SIGN IN</a></p>
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>  
  );
}

export default Registration;