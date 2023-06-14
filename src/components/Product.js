import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";
import Spinner from "./Spinner";
import { add } from "../redux/slices/cartSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCartTotal } from "../redux/slices/cartSlice";


const Product = () => {
    const dispatch = useDispatch();
    const { data, limit, skip, total } = useSelector(state => state.products);
    const {items} = useSelector(state=>state.cart);


    const handleAdd = (product) => {
        dispatch(add(product));
    }

    const handleLoadMore = () => {
        dispatch(getProducts({ limit: limit, skip: skip }));
    }

    useEffect(() => {
        dispatch(getProducts({ limit: limit, skip: skip }));
        dispatch(getCartTotal());
    }, [dispatch, items]);

    const cards = data.map(product => {
        return (
            <div className="card mb-3" key={product.id} style={{ width: '18rem' }}>
                <div className="text-center">
                    <img src={product.thumbnail} className="card-img-top" alt="..." style={{ width: 'stretch', height: '200px' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">USD ${product.price}</p>
                </div>
                <div className="footer card-footer" style={{ backgroundColor: 'white' }}>
                    <button onClick={() => handleAdd(product)} className="btn btn-primary">Add Item</button>
                </div>
            </div>
        );
    });


    return (
        <>
            <InfiniteScroll
                dataLength={data.length}
                next={handleLoadMore}
                hasMore={data.length < total} 
                loader={<Spinner />}
                endMessage={<p>Looks like you have rendered all the items.</p>}
            >

                <div className="container">
                    <h1 className="mt-5 pt-5 mb-2">All Products</h1>
                    <hr/>
                    <div className="row justify-content-around">
                        {cards}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

export default Product;