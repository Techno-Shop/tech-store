import React, {useState} from 'react';
import axios from 'axios';
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
import { Link,  useNavigate } from 'react-router-dom';
import Register from './Register';

function LoginForm() {
  const [emails, setEmail] = useState("");
  const [passwords, setPassword] = useState("");
  const [errors, setError] = useState(false);

  const [sign, setSing] = useState(false)
  const navigate = useNavigate();
  const newUser = {
    email: emails,
    password: passwords,
  }

  const login = () => {
    axios.post('http://localhost:3001/auth/login', newUser)
    .then(response => {
      console.log(response)
      if(response.data.status === "success"){
      alert(response.data.message)
        navigate("/admin")
      }else if(response.data.status === "err"){
        
        alert(response.data.message)
        setError(response.data.message)
      }
    })
        .catch(err => { alert(err?.response?.data?.message);});
}


const gohome = () => {
  if (errors === true) {
      return (

        <Link to="/admin"/>
      )
  }
  else {
      return (

          <MDBContainer fluid>
              <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                  <MDBCol col='12'>
                      <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                              <p className="text-white-50 mb-5">Please enter your login and password!</p>
                              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='email' id='formControlLg' type='email' size="lg" onChange={
                                  (e) => {
                                      setEmail(e.target.value);
                                  }} />
                              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={
                                  (e) => {
                                      setPassword(e.target.value);
                                  }} />
                                <Link to="/login">
                              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={() => { return login() }}>
                                  Login
                              </MDBBtn>
                              </Link>
                              <div>
                                <Link to="/register">
                                  <p className="mb-0">Don't have an account yet? <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={() => { setSing(true) }}>CLICK HETE TO REGISTER</MDBBtn></p>
                                  </Link>
                              </div>

                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>

      )
  }
}

const signup = () => {
  if (sign === true) {
      return <Register />
  }
  else {
      return gohome()
  }
}
return (
  <div>

     {signup()}

  </div>
)
}

export default LoginForm;