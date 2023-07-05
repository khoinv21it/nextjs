import React, { useCallback, useEffect, useState } from 'react'
import axiosClient from '../../libraries/axiosClient';

const Body = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    const [refresh, setRefresh] = useState(0);

    const getSuppliers = useCallback(async () => {
        try {
            const res = await axiosClient.get('/supplier');
            setSuppliers(res.data.payload);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const getCategories = useCallback(async () => {
        try {
            const res = await axiosClient.get('/categories');
            setCategories(res.data.payload || []);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const getProductData = useCallback(async () => {
        try {
            const res = await axiosClient.get('/products');
            setProducts(res.data.payload);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getSuppliers();

        getCategories();
    }, [getCategories, getSuppliers]);

    useEffect(() => {
        
        getProductData();
    }, [getProductData, refresh]);


    return (
        <>
        {
        products.map((p) => {
            <p>{p.name}</p>
        })
        }
            <section id="sellers">
                <div className="seller container">
                    <h2>Top Sales</h2>
                    <div className="best-seller">
                        {
                            products.map((p) => {
                                <div className="best-p1">
                            <img
                                src={p.image}
                                alt="img"
                            />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>{p.name}</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    {p.price}
                                    <div className="colors">
                                        <i className="bx bxs-circle green" />
                                        <i className="bx bxs-circle grey" />
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
                            })
                        }
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/8CmBZH5N/shoes.webp" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Shoes</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    $37.24
                                    <div className="colors">
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle blue" />
                                        <i className="bx bxs-circle white" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                    </button>
                                </div>
                                {/* <div class="add-cart">
                      <button>Add To Cart</button>
                  </div> */}
                            </div>
                        </div>
                        <div className="best-p1">
                            <img
                                src="https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png"
                                alt="img"
                            />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Jacket</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    $17.24
                                    <div className="colors">
                                        <i className="bx bxs-circle green" />
                                        <i className="bx bxs-circle grey" />
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
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/j2FhzSjf/bs2.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Shirt</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    $27.24
                                    <div className="colors">
                                        <i className="bx bxs-circle brown" />
                                        <i className="bx bxs-circle green" />
                                        <i className="bx bxs-circle blue" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/QtjSDzPF/bs3.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Shoes</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $43.67
                                    <div className="colors">
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle grey" />
                                        <i className="bx bxs-circle blue" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seller container">
                    <h2>New Arrivals</h2>
                    <div className="best-seller">
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England T-Shirt</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $10.23
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
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/zD02zJq8/na2.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Bag</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    $09.28
                                    <div className="colors">
                                        <i className="bx bxs-circle brown" />
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle green" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/Dfj5VBcz/sunglasses1.jpg" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Sunglass</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $06.24
                                    <div className="colors">
                                        <i className="bx bxs-circle grey" />
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle blank" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/FszW12Kc/na4.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Shoes</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $43.67
                                    <div className="colors">
                                        <i className="bx bxs-circle grey" />
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle blue" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seller container">
                    <h2>Hot Sales</h2>
                    <div className="best-seller">
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/jS7pSQLf/na4.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Shoes</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $37.24
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
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England T-Shirt</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $10.23
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
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/RhVP7YQk/hs1.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England T-Shirt</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $15.24
                                    <div className="colors">
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle blue" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/zD02zJq8/na2.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Bag</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    $09.28
                                    <div className="colors">
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle grey" />
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
                    </div>
                </div>
            </section>

            <section id="news">
                <div className="news-heading">
                    <p>LATEST NEWS</p>
                    <h2>Fashion New Trends</h2>
                </div>
                <div className="l-news container">
                    <div className="l-news1">
                        <div className="news1-img">
                            <img src="https://i.postimg.cc/2y6wbZCm/news1.jpg" alt="img" />
                        </div>
                        <div className="news1-conte">
                            <div className="date-news1">
                                <p>
                                    <i className="bx bxs-calendar" /> 12 February 2022
                                </p>
                                <h4>What Curling Irons Are The Best Ones</h4>
                                <a
                                    href="https://www.vogue.com/article/best-curling-irons"
                                    target="_blank"
                                >
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="l-news2">
                        <div className="news2-img">
                            <img src="https://i.postimg.cc/9MXPK7RT/news2.jpg" alt="img" />
                        </div>
                        <div className="news2-conte">
                            <div className="date-news2">
                                <p>
                                    <i className="bx bxs-calendar" /> 17 February 2022
                                </p>
                                <h4>The Health Benefits Of Sunglasses</h4>
                                <a
                                    href="https://www.rivieraopticare.com/blog/314864-the-health-benefits-of-wearing-sunglasses_2/"
                                    target="_blank"
                                >
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="l-news3">
                        <div className="news3-img">
                            <img src="https://i.postimg.cc/x1KKdRLM/news3.jpg" alt="img" />
                        </div>
                        <div className="news3-conte">
                            <div className="date-news3">
                                <p>
                                    <i className="bx bxs-calendar" /> 26 February 202
                                </p>
                                <h4>Eternity Bands Do Last Forever</h4>
                                <a
                                    href="https://www.briangavindiamonds.com/news/eternity-bands-symbolize-love-that-lasts-forever/" target="_blank"
                                >
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="contact container">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121169986175!2d73.90618951442687!3d18.568575172551647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c131ed5b54a7%3A0xad718b8b2c93d36d!2sSky%20Vista!5e0!3m2!1sen!2sin!4v1654257749399!5m2!1sen!2sin"
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <form action="https://formspree.io/f/xzbowpjq" method="POST">
                        <div className="form">
                            <div className="form-txt">
                                <h4>INFORMATION</h4>
                                <h1>Contact Us</h1>
                                <span>
                                    As you might expect of a company that began as a high-end interiors
                                    contractor, we pay strict attention.
                                </span>
                                <h3>USA</h3>
                                <p>
                                    195 E Parker Square Dr, Parker, CO 801
                                    <br />
                                    +43 982-314-0958
                                </p>
                                <h3>India</h3>
                                <p>
                                    HW95+C9C, Lorem ipsum dolor sit.
                                    <br />
                                    411014
                                </p>
                            </div>
                            <div className="form-details">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    required=""
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required=""
                                />
                                <textarea
                                    name="message"
                                    id="message"
                                    cols={52}
                                    rows={7}
                                    placeholder="Message"
                                    required=""
                                    defaultValue={""}
                                />
                                <button>SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}

export default Body