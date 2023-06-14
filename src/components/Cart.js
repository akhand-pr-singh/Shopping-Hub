import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, getCartTotal, increaseQuantity, remove } from '../redux/slices/cartSlice';

const Cart = () => {

    const {items, totalQuantity, totalPrice} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCartTotal());
    },[items]);

    const handleIncrement = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(remove(id));
    };


    const cards = items.map(product => {
        return (
            <div className="row d-flex justify-content-center" key={product.id}>
                <div className="card border-0 col-md-5 py-2">
                    <img src={product.thumbnail} alt="iphone" style={{ width: 'cover', height: '158px' }} />
                </div>
                <div className="col-md-7">
                    <div className="row justify-content-between">
                        <div className="col-md-5 my-2">
                            <h5>{product.title}</h5>
                            <p>Stock: {product.stock}</p>
                            <p>Rating: {product.rating}</p>
                            <button className="btn btn-danger me-2" onClick={()=>handleRemove(product.id)}><i className="fa-sharp fa-solid fa-trash"></i></button>
                            <button className="btn btn-secondary"><i className="fa-solid fa-heart text-light"></i></button>
                        </div>
                        <div className="col-md-5">
                            <div className="row py-2">
                                <div className="col-md-12">
                                    <p><small>Quantity</small></p>
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button className={`btn btn-primary ${(product.quantity===1?'disabled':'')}`} type="button" onClick={()=>handleDecrement(product.id)}>-</button>
                                        </span>
                                        <input id="quantityInput" type="number" className="form-control text-center" disabled value={product.quantity} onChange={()=>null} />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button" onClick={()=>handleIncrement(product.id)}>+</button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h6 className="text-center text-secondary">${product.price * product.quantity}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <hr />
            </div>
        )
    });

    const summary = (<div className="card d-flex-start align-self-start col-md-3 mt-1 pt-1"> <h4>Summary</h4>
        <hr />
        <div className="card-body">
            <p className="text-secondary">Total Quantity : {totalQuantity}pcs</p>
            <p><strong>Total Amount :  ${totalPrice}</strong></p>
            <button className="btn btn-primary px-5">Go to checkout</button>
        </div>
    </div>);


    return (
        <>
            <div className="container">
                <div className="row justify-content-start mt-5 pt-5">
                    <div className="card col-md-8 me-5 mt-1">
                        <div className="col-md-12 mt-1 pt-1 text-start"><h4>Cart - {items.length} items</h4></div>
                        <hr />
                        {cards}
                    </div>
                    {summary}
                </div>
            </div>
        </>
    );
};

export default Cart;