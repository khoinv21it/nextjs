import React, { useCallback, useEffect, useState } from "react";
import axiosClient from "@/libraries/axiosClient";
import Image from 'next/image';
import { useRouter } from "next/router";

const AllProduct = () => {

    const router = useRouter();
    function handleProducts() {
        router.push("/getall");
    }
    const [getlists, setGetlists] = useState([]);
    const getProduct = useCallback(async () => {
        try {
            const res = await axiosClient.get(
                "http://localhost:3333/products/getlist"
            );

            setGetlists(res.data.payload);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getProduct();
    }, [getProduct]);

    return (
        <>
            <div className="seller container">
                <h2>All Product</h2>
                <div className="best-seller">
                    {getlists.length > 0 &&
                        getlists.map((product) => {
                            return (
                                <div className="best-p1" key={product._id}>
                                    <img src={product.image} alt="img" />
                                    <div className="best-p1-txt">
                                        <div className="name-of-p">
                                            <p>{product.name}</p>
                                        </div>
                                        <div className="rating">
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                        </div>
                                        <div className="price">
                                            ${product.price}
                                            <div className="colors">
                                                <i className="bx bxs-circle blank" />
                                                <i className="bx bxs-circle blue" />
                                                <i className="bx bxs-circle brown" />
                                            </div>
                                        </div>
                                        <div className="buy-now">
                                            <button>
                                                <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        )}
                    <button className="btnmore" onClick={handleProducts}>
                        {/* {" "} */}
                        See More
                    </button>
                </div>
            </div>
        </>
    )
}

export default AllProduct