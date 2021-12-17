import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [myOrders , setMyOrders] = useState([]);
    const {user}= useAuth();
    const url = `https://protected-mountain-42023.herokuapp.com/orders/${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[]);

    const handleDeleteMyOrder = (id) =>{

        const url = `https://protected-mountain-42023.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                
                const remainingOrders = myOrders.filter(order => order._id !== id);
                setMyOrders(remainingOrders);
                handleConfirmNo();
            }
        })



        
        console.log('hitting')
    }

    let orderIndex = 1;

    
    const handleConfirmPopUp = () =>{
        const id = document.getElementById('confirem-box');
        id.style.display ='block';
    }
    const handleConfirmNo = () =>{
        const id = document.getElementById('confirem-box');
        id.style.display ='none';
    }
    return (
        <div>
            <h2>My Orders</h2>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            
                          {
                              myOrders.map(myOrder=> <tr>
                                <td>{orderIndex++}</td>
                                <td>{myOrder.title}</td>
                                <td>${myOrder.price}</td>
                                <td>Pandding</td>
                                <td>
                                    
                                    
                                    <button className="btn btn-danger" onClick={handleConfirmPopUp}><FontAwesomeIcon icon={faTrash}/></button>
                                </td>
                                <div id="confirem-box">
                                    <div className="yes-no-box fixed-top">
                                        <div>
                                        <p>Are You Sure?</p>
                                        <button onClick={()=>handleDeleteMyOrder(myOrder._id)} className="btn btn-info">Yes</button>
                                        <button onClick={handleConfirmNo} className="btn btn-warning">No</button>
                                        </div>
                                    </div>
                                </div>

                            </tr>)
                          }
                        
                    
                    </tbody>
                    </Table>
                    
                    
        </div>
    );
};

export default MyOrders;