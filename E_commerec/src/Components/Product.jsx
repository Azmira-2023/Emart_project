import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
//  import {addCart} from '../Redux/action';
import { Link, useParams } from 'react-router-dom';
import NavBar from './NavBar';
// import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // const dispatch = useDispatch();
    // const addProduct = (product) => {
    //     dispatch(addCart(product));
    // }
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);
    if (!product) {
        return <div>Loading...</div>;
    }

    

    return (
        <>
            <NavBar />
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Ratings {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    ${product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2'> 
                {/* onClick={()=>addProduct(product)} */}
                    Add to cart
                </button>
                <Link to="/cart" className='btn btn-outline-dark ms-2 px-3 py-2'>
                    Go to cart
                </Link>
            </div>
            <Footer />

        </>
    )
    
}

export default Product;