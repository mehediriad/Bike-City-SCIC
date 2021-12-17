import React from 'react';
import { Container } from 'react-bootstrap';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import './DashBoard.css'
import Review from './Review/Review';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Shared/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import DashBoardHome from '../DashBoardHome/DashBoardHome';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {logOut,admin,user} = useAuth();

    return (
        <>
        <div className="bg-primary py-1">
           <Container className="flex-header">
                <div>
                    <h2 className="dashboard-heading fw-bold">Dashboard</h2>
                    <h6>{user.displayName}</h6>
                </div>
                <Link className="text-color" to={`/home`}>Go to Home</Link>
           </Container>
        </div>
        <Container className="dashboard">
            
          <div className = "dashboard-container">
          <div className="w-25 dashboard-sidebar">
                <Link to={`/dashboard`}>Dashboard</Link>
                {admin && <div>
                <Link to={`${url}/add-product`}>Add Product</Link>
                <Link to={`${url}/make-admin`}>Make Admin</Link>
                <Link to={`${url}/manage-products`}>Manage Products</Link>
                <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                </div>}
                <Link to={`${url}/payment`}>Payment</Link>
                <Link to={`${url}/my-orders`}>My Orders</Link>
                <Link to={`${url}/review`}>Review Site</Link>
            <br/>
            <button className="btn btn-primary" onClick={logOut}>LogOut</button>
           </div>

            <div className="w-75 p-3">
                <div className="dashboard-content">
                    <div>
                        <Switch>
                        <Route exact path={path}>
                            <DashBoardHome></DashBoardHome>
                        </Route>
                        <AdminRoute path={`${path}/add-product`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-orders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/my-orders`}>
                            <MyOrders></MyOrders>
                        </Route>
                    </Switch>
                    </div>
                    <div>
                        <p>&copy; BikeCity! - Online Bike Delivery Site. All Rights Reserved.</p>
                    </div>
                </div>
                
                
            </div>
            
          </div>

            
        </Container>
        </>
    );
};

export default DashBoard;