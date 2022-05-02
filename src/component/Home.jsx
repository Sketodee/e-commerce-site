import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div>
            <div className='hero'>
                <div className="card bg-dark text-white border-0">
                    <img src="/assets/bgim.jpg" class="card-img" alt="background image" height="550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-around">
                        <div className="container text-light">
                            <h5 className="card-title display-3 fw-bold mb-o"> CHECK OUT SOME ARRIVALS</h5>
                            <p className="card-text">EXPLORE LATEST TRENDS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home