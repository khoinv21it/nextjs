import React, { useCallback, useEffect, useState } from "react";
import axiosClient from "@/libraries/axiosClient";
import { useRouter } from "next/router";

const FlashSale = () => {
  const router = useRouter();
  function handleGetalldiscount() {
    router.push("/getalldiscount")
  }
  const [getdiscount, setGetdiscount] = useState([]);
  const getlist = useCallback(async () => {
    try {
      const res = await axiosClient.get("http://localhost:3333/products/flashsale");
      setGetdiscount(res.data.payload)
    } catch (error) {

    }
  }, []);

  useEffect(() => {
    getlist();
  }, [getlist]);

  return (
    <div className="seller container">
      <h2>Hot Sales</h2>
      <div className="best-seller">
        {getdiscount.length > 0 &&
          getdiscount.map((sale) => {
            return (
              <div className="best-p1" key={getdiscount._id}>
                <img src={sale.image} alt="img" />
                <div className="best-p1-txt">
                  <div className="name-of-p">
                    <p>{sale.name}</p>
                  </div>
                  <div className="rating">
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                  </div>
                  <div className="price">
                    ${sale.price}
                    <div className="colors">
                      <i className="bx bxs-circle grey" />
                      <i className="bx bxs-circle black" />
                      <i className="bx bxs-circle blue" />
                    </div>
                  </div>
                  <div className="buy-now">
                    <button>
                      <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                    </button>
                  </div>
                </div>
              </div>)
          })
        }
        <button className="btnmore" onClick={handleGetalldiscount}>
          {/* {" "} */}
          See More
        </button>
      </div>
    </div>
  )
}

export default FlashSale