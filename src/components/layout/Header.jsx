import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <input type="checkbox" name="" id="checkbox" />
                    <div className="hamburger-lines">
                        <span className="line line1" />
                        <span className="line line2" />
                        <span className="line line3" />
                    </div>
                    <ul className="menu-items">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#sellers">Shop</a>
                        </li>
                        <li>
                            <a href="#news">Blog</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="logo">
                        <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header