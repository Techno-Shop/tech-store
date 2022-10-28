import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';



function RegisterForm() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);



    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        imageUrl: "",
    })
    const navigate = useNavigate();
    const { username, email, password, role, imageUrl } = form;
    const [err, setErr] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/auth/register", form, { withCredentials: true })
            .then(res => {
                alert(res.data.message); console.log(res);
                navigate('/login')
            })
            .catch(err => setErr(err.res.data))
    }




    return (
        <MDBContainer className="my-5 gradient-form">

        <MDBRow>
  
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">
  
              <div className="text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{width: '185px'}} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are The tech-store team</h4>
              </div>
  
              <p>Please fill your info here</p>
  
              <MDBInput wrapperClass='mb-4' label='username' id='form1' type='text' value={form.username} onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={form.email} onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={form.password} onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4' label='role' id='form2' type='text' value={form.role} onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4' label='imageUrl' id='form2' type='password' value={form.imageUrl} onChange={handleChange}/>
  
  
              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>
  
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">have an account already ?</p>
                <MDBBtn outline className='mx-2' color='blue'>
                  login
                </MDBBtn>
              </div>
  
            </div>
  
          </MDBCol>
  
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
  
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
  
            </div>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    )
}

export default RegisterForm;