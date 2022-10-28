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
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import {Link, useNavigate} from 'react-router-dom';

function LoginForm() {
   const [ form, setForm] = useState({});
   const [ isConnected, setIsConnected] = useState(false);
   const [ errors, setErrors] = useState(false);
   const navigate = useNavigate();

   const handleChange = (event) =>{
     setForm({...form, [event.target.name]: event.target.value});
         console.log(form);
    }
//   XMLHttpRequest from a different domain cannot set cookie values for their own 
//  domain unless withCredentials is set to true before making the request.
   const handleSubmit = (e) => {
   e.preventDefault();
   axios.post("/auth/login", {withCredentials:true})
   .then(res=>{
    alert(res.data.message)
    console.log(res.data);
    setIsConnected(true)
    navigate('/')
   })
   .catch(err=>setErrors(err.res.data))
}

   



  return (
    
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg'>
                Login
              </MDBBtn>

              <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default LoginForm;