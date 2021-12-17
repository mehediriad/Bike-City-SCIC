import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email , setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleMakeAdminSubmit = e =>{
        console.log(' hitting')
        const user = {email};
        fetch('https://protected-mountain-42023.herokuapp.com/users/admin' , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if (data.modifiedCount) {
                console.log(data);
                setEmail(' ');
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <div className="w-75">
            <h2>Make an Admin</h2>

            <form onSubmit={handleMakeAdminSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <div className="d-flex">
                    <input onBlur={handleOnBlur} name="email" type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <button type="submit" className="btn btn-primary">Make Admin</button>
                </div>
            </div>
            
            </form>
           
            {success && <Alert variant='success'> Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;