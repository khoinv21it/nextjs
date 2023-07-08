import React, { useCallback, useEffect, useState } from 'react';
import axiosClient from '../../libraries/axiosClient';
import AllProduct from '../AllProduct';
import ListCategories from '../ListCategories';
import FlashSale from '../FlashSale';
import LatestNews from '../LatestNews';
import Contact from '../Contact';

const Body = () => {
    const [products, setProducts] = useState([]);

    const getProductData = useCallback(async () => {
        try {
            const res = await axiosClient.get('/products');
            setProducts(res.data.payload);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getProductData();
    }, [getProductData]);


    return (
        <>
            <section id="sellers">
                <ListCategories />
                <FlashSale />
                <AllProduct />
            </section>
            <LatestNews />
            <Contact />
        </>
    )
}

export default Body