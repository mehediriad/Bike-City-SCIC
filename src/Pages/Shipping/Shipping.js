import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const {bikeId} = useParams();
    console.log(bikeId)
    const [bike, setBike] = useState({});
    useEffect(()=>{
        console.log(bike)
        fetch(`https://protected-mountain-42023.herokuapp.com/bikes/${bikeId}`)
        .then(res => res.json())
        .then(result => setBike(result))
    },[])
    const onSubmit = data =>{
        const orderedData = {
            key: bike._id,
            name:data.name,
            email:data.email,
            address:data.address,
            city:data.city,
            phone:data.phone,
            title:bike.title,
            price:bike.price,
            model:bike.model,
            img:bike.img,
            status: 'Pandding'
        }

        fetch('https://protected-mountain-42023.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedData)
        })
        .then(res=>res.json())
        .then(response=> {
            if (response.insertedId) {
                alert('Order processed Successfully');
                
                reset();
            }
        })
    }
    return (
        <>
        <Header></Header>
        <Container>
            <h2>Please! Provide Your Shipping Information.</h2>
            <form className="shipping-form text-center" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" value="Place Order" />
            </form>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Shipping;