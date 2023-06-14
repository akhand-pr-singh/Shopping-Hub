import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { searchedProduct } from "../redux/slices/productSlice";
import { add } from "../redux/slices/cartSlice";
import { getCartTotal } from "../redux/slices/cartSlice";

const SearchedProduct = () => {

    const { searchData, status } = useSelector(state => state.products);
    const { items } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    useEffect(() => {
        dispatch(getCartTotal());
    }, [items]);

    const cards = searchData.map(product => {
        return (
            <div className="card mb-3" key={product.id} style={{ width: '18rem' }}>
                <div className="text-center">
                    <img src={product.thumbnail} className="card-img-top" alt="..." style={{ width: 'stretch', height: '200px' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">USD ${product.price}</p>
                </div>
                <div className="card-footer" style={{ backgroundColor: 'white' }}>
                    <button onClick={() => handleAdd(product)} className="btn btn-primary">Add Item</button>
                </div>
            </div>
        );
    });

    return (
        <>
            {
                (status === 'loading') ? <Spinner className='mt-5 pt-5' /> :
                    <div className="container">
                        <h1 className='mt-5 pt-5'>Search Results</h1>
                        <hr />
                        <div className="row justify-content-evenly">
                            {cards}
                        </div>
                    </div>
            }

        </>
    );
};

export default SearchedProduct;
