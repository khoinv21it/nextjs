import React, { useCallback, useEffect, useState } from "react";
import axiosClient from "@/libraries/axiosClient";

const ListCategories = () => {
    const [listproducts, setListproducts] = useState([]);

    const getProducts = useCallback(async () => {
        try {
            const res = await axiosClient.get("http://localhost:3333/categories");
            setListproducts(res.data.payload);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <>
            <div className="seller container">
                <h2>Categories</h2>
                <div className="best-seller">
                    {
                        listproducts.map((category) => {
                            return (<div className="best-p1" key={category._id}>
                                <img
                                    src={category.image} alt="img" />
                                <div className="best-p1-txt">
                                    <div className="name-of-p">
                                        <p>{category.name}</p>
                                    </div>

                                    <div className="buy-now">
                                        <button>
                                            <a href="">Get all</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        
                        )})
                    }
                </div>
            </div>
        </>
    )
}

export default ListCategories