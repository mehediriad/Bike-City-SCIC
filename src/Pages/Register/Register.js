import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link ,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Register = () => {
    const {user,registerUser , isLoading , authError , authErrorCode} = useAuth()
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();

    const handleOnChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        console.log(newRegisterData);
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = (e) =>{
        if(registerData.password !== registerData.re_password){
            alert('Your Password Did not Match!!')
            return;
        }
        registerUser(registerData.email , registerData.password ,registerData.displayName);
        history.push('/congratulations');
        e.preventDefault();
    }
    return (
    <>
    <Header></Header>
    <div>
        <div className="w-50 mx-auto mt-4">
          {user?.email && <Alert variant='success'> Your Account Registered Successfully!</Alert>}
          {authError && <Alert variant='danger'>{ authErrorCode}</Alert>}
          {!isLoading && <form onSubmit={handleRegisterSubmit}>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input onChange={handleOnChange} name="displayName" type="text" className="form-control" id="inputName" aria-describedby="inputHelp"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={handleOnChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="Password1" className="form-label">Password</label>
                <input onChange={handleOnChange} name="password" type="password" className="form-control" id="Password1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Password2" className="form-label">Confirm Password</label>
                <input onChange={handleOnChange} name="re_password" type="password" className="form-control" id="Password2"/>
            </div>
            <div className="mb-3 form-check">
                <Link to="/login">Already have an account.</Link>
               
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            </form>}
            {isLoading && <div className="reg-spinner login-lodding-box"><Spinner animation="border" variant="primary" /></div>}
        </div>
    </div>
    <Footer></Footer>
    </>
    );
};

export default Register;