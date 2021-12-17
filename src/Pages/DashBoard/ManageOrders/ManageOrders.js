import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders , setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://protected-mountain-42023.herokuapp.com/orders')
        .then(res =>res.json())
        .then(data => setOrders(data))
    },[])

    const handleOrderDelete = id =>{
        const url = `https://protected-mountain-42023.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                
                const remainingOrders = orders.filter(order => order._id !== id);
                setOrders(remainingOrders);
                handleConfirmNo();
            }
        })
    }

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
            <h2>Manage Orders</h2>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            orders.map((order , index)=><tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.address}</td>
                            <td>{order.title}</td>
                            <td>${order.price}</td>
                            <td>{order.status}</td>
                            
                            <td>
                            
                                <button className="btn btn-success">Accept</button>
                                
                                <button className="btn btn-danger" onClick={handleConfirmPopUp}><FontAwesomeIcon icon={faTrash}/></button>
                            </td>



                            <div id="confirem-box">
                                    <div className="yes-no-box fixed-top">
                                        <div>
                                        <p>Are You Sure?</p>
                                        <button onClick={()=>handleOrderDelete(order._id)} className="btn btn-info">Yes</button>
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

export default ManageOrders;