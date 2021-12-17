import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts'

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    console.log(products);
    const handleProductDelete = id =>{
        const url = `https://protected-mountain-42023.herokuapp.com/bikes/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
               
                const remainingOrders = products.filter(product => product._id !== id);
                setProducts(remainingOrders);
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
            <h2>Manage Your Products</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            products.map((product , index)=><tr>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>
                                <button className="btn btn-info"><FontAwesomeIcon icon={faEdit}/></button>
                                <button className="btn btn-danger" onClick={handleConfirmPopUp}><FontAwesomeIcon icon={faTrash}/></button>
                            </td>


                            <div id="confirem-box">
                                <div className="yes-no-box fixed-top">
                                     <div>
                                        <p>Are You Sure?</p>
                                        <button onClick={()=>handleProductDelete(product._id)} className="btn btn-info">Yes</button>
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

export default ManageProducts;