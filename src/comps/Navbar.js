import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <style jsx>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');

                    .navbar{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 50px;
                        margin-bottom: 50px;
                    }
                    .navbar .media{
                        // border-bottom: 2px solid black;
                        margin: 25px;
                        cursor: pointer;
                        color: black;
                        font-family: 'Space Grotesk';
                        font-size: 20px;
                    }
                    .navbar .blog{
                        // border-bottom: 2px solid black;
                        margin: 25px;
                        cursor: pointer;
                        color: black;
                        font-family: 'Space Grotesk';
                        font-size: 20px;
                        color: #BDBF09;
                    }

                    .navbar .media:hover{
                        border-bottom: 1px solid black;
                    }

                    .navbar .media:active{
                        color: #ff4a4a
                    }

                    .navbar .blog:hover{
                        border-bottom: 1px solid black;
                    }

                    .navbar .blog:active{
                        color: #ff4a4a
                    }
                `}
            </style>
            <div className="navbar">
                <div className='media'><Link to="/" style={{textDecoration: 'none'}}>Media</Link></div>
                <div className='blog'><Link to="/blog" style={{textDecoration: 'none'}}>Blog</Link></div>
            </div>
        </>
    )
}

export default Navbar