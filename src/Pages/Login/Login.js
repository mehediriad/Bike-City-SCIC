import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Login.css';
const Login = () => {
    const {user , loginUser ,signInWithGoogle, isLoading ,authError , authErrorCode} = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }
    const handleGoogleLogedIn = (e) =>{
        signInWithGoogle(location,history);
        e.preventDefault();
    }
    return (
        <>
        <Header></Header>
        <div className="login-width mx-auto mt-4">
            {user?.email && <Alert variant='success'> Your Account LogedIn Successfully!</Alert>}
            {authError && <Alert variant='danger'>{ authErrorCode}</Alert>}
            {!isLoading && <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={handleOnChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={handleOnChange} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <p>---------------------------- or ---------------------------- </p>
            <div className="mb-3 form-check">
                <button className="btn btn-outline-info" onClick={handleGoogleLogedIn}>Login with Google</button>
                <br />
                <br />
                <Link to="/register" className="ms-3">New User</Link>
                <Link to="/register" className="ms-3">Forget Password?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>}
            {isLoading && <div className="reg-spinner login-lodding-box"><Spinner animation="border" variant="primary" /></div>}
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;