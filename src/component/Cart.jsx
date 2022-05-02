import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    console.log(state)

    const [cart, setCart] = useState(state)
    console.log(cart)

    const increment = (id) => {
        setCart(cart.map((x) => x.id === id ? {...x, qty: x.qty + 1} : x))
    }

    const decrement = (id) => {
        setCart(cart.map((x) => x.id === id ? {...x, qty: x.qty - 1} : x))
    }
    
    const deleteItem = (id) => {
    setCart(cart.filter((x) => x.id !== id ))
    }

    const ShowCart = () => {
        return (
            cart.map((cartItem) => {
                return (
                    <>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-4 col-12 text-center">
                                    <img src={cartItem.image} alt={cartItem.title}  height="100px" />
                                </div>
                                <div className="col-md-4 col-12 text-center">
                                    <h3>{cartItem.title}</h3>
                                    <p className="lead fw-bold">
                                        {cartItem.qty} x ${cartItem.price} = ${cartItem.qty * cartItem.price}
                                    </p>
                                    <button className="btn btn-outline-dark btn-sm mx-2" onClick={() => decrement(cartItem.id)} >  <i className="fa fa-minus"></i> </button>
                                    <button className="btn btn-outline-dark btn-sm" onClick={() => increment(cartItem.id)}> <i className="fa fa-plus"></i> </button>
                                </div>
                                <div className="col-md-4 col-12 text-center my-3">
                                    <button className="btn btn-danger" onClick={() => deleteItem(cartItem.id)}> <i className="fa fa-trash"></i> Remove Item </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }

    const Cartprompt = () => {
        return (
            <> 
                <div className="container mt-5">
                    <div className="row">
                        <h3 className='text-center'>Why is your cart empty? Go do some shopping bro :)</h3>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {cart.length > 0 ? (<ShowCart increment= {increment} decrement= {decrement} />) : (<Cartprompt />)} 
        </>
    )
}

export default Cart
