import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                            <h2 className="fw-bold mb-2 text-uppercase">WELCOME</h2>
                            <p className="text-white-50 mb-5">Sign up now</p>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='username' id='formControlLg' type='email' size="lg" value={form.username} onChange={handleChange} />
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='email' id='formControlLg' type='email' size="lg" value={form.email} onChange={handleChange}/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='password' id='formControlLg' type='password' size="lg" value={form.password} onChange={handleChange}/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='role' id='formControlLg' type='text' size="lg" value={form.role} onChange={handleChange}/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='imageUrl' id='formControlLg' type='text' size="lg" value={form.imageUrl} onChange={handleChange}/>
                            <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                            <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                REGISTER
                            </MDBBtn>

                            <div className='d-flex flex-row mt-3 mb-5'>
                                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                    <MDBIcon fab icon='facebook-f' size="lg" />
                                </MDBBtn>
                                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                    <MDBIcon fab icon='google' size="lg" />
                                </MDBBtn>
                            </div>

                            <div>
                                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

                            </div>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}

export default RegisterForm;