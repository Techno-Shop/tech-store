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
  MDBCheckbox,
  MDBIcon
  }
  from 'mdb-react-ui-kit';
import { Link,  useNavigate } from 'react-router-dom';
import Register from './Register';

function LoginForm(props) {
  const [emails, setEmail] = useState("");
  const [passwords, setPassword] = useState("");
  const [errors, setError] = useState(false);

  const navigate = useNavigate();
  console.log(props.sign)
  const newUser = {
    email: emails,
    password: passwords,
  }

  const login = () => {
    axios.post('http://localhost:3001/auth/login', newUser)
    .then(response => {
      if(response.data.status = "success"){
        console.log(response.data.user.username)
        props.user(response.data.user.username);
        response.data.user.role==="admin"? navigate("/admin"):navigate("/");
        // response.data.user === "" ? navigate('/register') : navigate("/login")
      }else if(response.data.status = "err"){
        
        alert(response.data.message)
        setError(response.data.message)
      }
    })
        .catch(err => { alert(err?.response?.data?.message);});
}


const gohome = () => {
  if (errors === true) {
      return (

        <Link to="/"/>
      )
  }
  else {
      return (

        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
  
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>
  
                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={
                                  (e) => {
                                      setEmail(e.target.value);
                                  }} />
                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={
                                  (e) => {
                                      setPassword(e.target.value);
                                  }} />
                                <Link to="/login"/>
  
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
  
                <MDBBtn size='lg' onClick={() => { return login() }}>
                  Login
                </MDBBtn>
                <hr className="my-4" />
                <p>Don't have an account yet? </p>
                <hr className="my-4" />
                <MDBBtn size='lg' onClick={() =>{ props.sign()}}>
                  <Link to="/register">
                     register
                  </Link>
                
                </MDBBtn>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>

      )
  }
}

const signup = () => {
  if (props.signState === false) {
      
    return (
     
      <Register />
  
  ) }
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