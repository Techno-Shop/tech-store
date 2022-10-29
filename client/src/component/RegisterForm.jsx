import React, { useState } from 'react';
import axios from 'axios';
import { Link,  } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBCardImage,
}
  from 'mdb-react-ui-kit';
import Login from './Login';

function RegisterForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [log, setLog] = useState(false);
  
  const newUser= {
    username: username,
    email: email,
    password: password,
    role: role,
    imageUrl: imageUrl,
 }
  
 const hopIn = () => {
  axios.post('http://localhost:3001/auth/register', newUser)
  .then(response => {
    console.log(response)
  })
  .catch(err => { console.log(err)})
 }
  // enter the log in page 
  const loging = () => {
    if (log === false) {
      return (
        <MDBContainer className='my-5'> 
          <MDBCard>
            <MDBRow className='g-0 d-flex align-items-center'>

              <MDBCol md='4'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
              </MDBCol>

              <MDBCol md='8'>

                <MDBCardBody> Register
                  <MDBInput wrapperClass='mb-4' label='username' id='form1' type='text' onChange={
                    (e) => {
                      setUserName(e.target.value)
                    }
                  } />
                  <MDBInput wrapperClass='mb-4' label='email' id='form1' type='email' onChange={
                    (e) => {
                      setEmail(e.target.value)
                    }
                  } />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={
                    (e) => {
                      setPassword(e.target.value);
                    }} />
                    <MDBInput wrapperClass='mb-4' label='role' id='form1' type='text' onChange={
                    (e) => {
                      setRole(e.target.value)
                    }
                  } />
                  <MDBInput wrapperClass='mb-4' label='imageUrl' id='form1' type='text' onChange={
                    (e) => {
                      setImageUrl(e.target.value)
                    }
                  } />
                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  
                  </div>
                  <MDBBtn className="mb-4 w-100" onClick={() => { return hopIn() }} >REGISTER</MDBBtn>
                      you have an account already ?
                      <Link to="/login">
                  <MDBBtn className="mb-4 w-100" onClick={() => { setLog(true) }}>LOG IN</MDBBtn>
                  </Link>

                </MDBCardBody >

              </MDBCol>

            </MDBRow>
          </MDBCard>
        </MDBContainer>
      )
    }

    else {
      return < Login />

    }
  }

  return (
    <div>
      {loging()}
    </div>
  )


}

export default RegisterForm;