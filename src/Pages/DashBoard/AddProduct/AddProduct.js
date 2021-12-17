import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://protected-mountain-42023.herokuapp.com/bikes', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
        <h2 className='text-center'>Please Add a Bike Items</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true, maxLength: 60 })} placeholder="Post Title" />
            <input {...register("brand", { required: true, maxLength: 60 })} placeholder="Brand Name" />
            <input {...register("company", { required: true, maxLength: 60 })} placeholder="Company Name" />
            <input {...register("model", { required: true, maxLength: 60 })} placeholder="Bike Model" />
            <input {...register("release", { required: true, maxLength: 60 })} placeholder="Release Year" />
            <input {...register("type", { required: true, maxLength: 60 })} placeholder="Type" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("img")} placeholder="image url" />
            <input type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;