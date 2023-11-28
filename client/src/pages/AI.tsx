import React, {useState, useEffect} from 'react';
import { User } from '../types';
import Client from '../Client';
import './styles.css';
import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav,
    MDBCard,
    MDBRow,
    MDBRadio,
    MDBCardBody,
    MDBCol,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBInput,
    MDBContainer
  } from 'mdb-react-ui-kit';


const AI: React.FC = () => {
    const[user, setUser] = useState<User | null>(null)

    const logoutUser = async() =>{
        await Client.post("//localhost:4500/logout");
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

      {user != null? ( 

<div >
<header style={{ paddingLeft: 0 }}>
<MDBNavbar expand='lg' light  bgColor='white'>
  <MDBContainer fluid >
    <MDBNavbarToggler
      aria-controls='navbarExample01'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <MDBIcon fas icon='bars' />
    </MDBNavbarToggler>
    <div className='collapse navbar-collapse' id='navbarExample01'>
      <MDBNavbarNav right className='mb-2 mb-lg-0'>
        <MDBNavbarItem active>
          <MDBNavbarLink aria-current='page' href='/ai'>
            
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBNavbarLink onClick = {logoutUser} href="/"> Logout</MDBNavbarLink>
        </MDBNavbarItem>

      </MDBNavbarNav>
    </div>
    </MDBContainer >
</MDBNavbar>
</header>
<div
        className="bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp')",
          height: "100vh"
        }}
      >
<MDBContainer>
<MDBRow className='justify-content-center align-items-center m-5'>

<MDBCard>
  <MDBCardBody className='px-4'>

    <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration</h3>

    <MDBRow>

      <MDBCol md='6'>
        <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
      </MDBCol>

      <MDBCol md='6'>
        <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
      </MDBCol>

    </MDBRow>

    <MDBRow>

      <MDBCol md='6'>
        <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
      </MDBCol>

      <MDBCol md='6' className='mb-4'>
        <h6 className="fw-bold">Gender: </h6>
        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
        <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
        <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
      </MDBCol>

    </MDBRow>

    <MDBRow>

      <MDBCol md='6'>
        <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
      </MDBCol>

      <MDBCol md='6'>
        <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
      </MDBCol>

    </MDBRow>

    <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

  </MDBCardBody>
</MDBCard>

</MDBRow>
</MDBContainer>
</div>
      <div>
      <h1>Logged in</h1>
      <h2>Email: {user.email}</h2>
      <h2>ID: {user.id}</h2>
      <h2>Spotify_ID: {user.spotify_token}</h2>
      <button onClick = {logoutUser}>Logout</button>
      </div>
      </div>
      ) : (
        <div className='p-5 text-center' style={{height:'100vh', marginTop:"5%", color: 'black'}}>
          <img object-fit="cover" alt="" style={{width: "40vh", height:"40vh"}}  src={require('./images/not-logged-in.png')}></img>
            <br></br><br></br><br></br>
            <div>
            <h2 className='mb-3'>You are not logged in!</h2>
            <br></br><br></br>
              <div>
              <MDBBtn href="/" color="success" style={{ marginRight: '20px' }} className='w-25 mb-4' size='lg'>Login</MDBBtn>
              <MDBBtn href="/register" color="success" className='w-25 mb-4' size='lg'>Register</MDBBtn>
              </div>
            </div>
        </div>
      )}
    </div>
    );
};
export default AI;