import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchedProduct } from "../redux/slices/productSlice";

const NavBar = () => {

    const {totalQuantity} = useSelector(state => state.cart);

    const dispatch = useDispatch();

    let searchedValue='';

    const handleChange = (event)=>{
        searchedValue = event.target.value;
    }

    const handleClick = (event)=>{
        event.preventDefault();
        dispatch(searchedProduct({search:searchedValue}));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme='dark'>
                <div className="container-fluid">
                    <Link className="navbar-brand order-sm-2 order-md-1" to="/"><i className="fa-solid fa-umbrella-beach" style={{ color: 'white', }}> Shopping Hub</i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse order-sm-1 order-md-2" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <ul className="nav col-12 col-md-12 mb-2 mb-md-0">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Men
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/men-shirts" className="dropdown-item">Shirts</Link></li>
                                        <li><Link to="/men-shoes" className="dropdown-item">Shoes</Link></li>
                                        <li><Link to="/men-watches" className="dropdown-item">Watches</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Women
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/women-dresses" className="dropdown-item">Dresses</Link></li>
                                        <li><Link to="/women-shoes" className="dropdown-item">Shoes</Link></li>
                                        <li><Link to="/women-watches" className="dropdown-item">Watches</Link></li>
                                        <li><Link to="/women-bags" className="dropdown-item">Bags</Link></li>
                                        <li><Link to="/women-jewellery" className="dropdown-item">Jewellery</Link></li>
                                        <li><Link to="/tops" className="dropdown-item">Tops</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Electronics
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/smartphones" className="dropdown-item">Smartphones</Link></li>
                                        <li><Link to="/laptops" className="dropdown-item">Laptops</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Automotives
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/accessories" className="dropdown-item">Accessories</Link></li>
                                        <li><Link to="/motorcycles" className="dropdown-item">Motorcycles</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home Decor
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/home-decoration" className="dropdown-item">Home-decoration</Link></li>
                                        <li><Link to="/furniture" className="dropdown-item">Furniture</Link></li>
                                        <li><Link to="/lighting" className="dropdown-item">Lighting</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/fragrances" className="nav-link px-2" style={{ color: 'white', }}>Fragrances</Link></li>
                                <li><Link to="/skincare" className="nav-link px-2" style={{ color: 'white', }}>Skincare</Link></li>
                                <li><Link to="/groceries" className="nav-link px-2" style={{ color: 'white', }}>Groceries</Link></li>
                                <li><Link to="/sunglasses" className="nav-link px-2" style={{ color: 'white', }}>Sunglasses</Link></li>
                                <li><Link to="/about" className="nav-link px-2" style={{ color: 'white', }}>About</Link></li>
                            </ul>
                        </ul>
                        <form className="d-flex ms-auto me-4" role="search">
                            <input className="form-control search-input me-2 bg-light text-dark my-1 ms-5" onChange={handleChange} type="search" placeholder="Search for Products" aria-label="Search"/>
                                <button className="btn btn-danger" type="submit" onClick={handleClick}><Link to='/search' style={{textDecoration:'none', color:'white'}}>Search</Link></button>
                        </form>
                    </div>
                    <div className="ms-sm-auto ml-lg-0 mt-sm-2 mt-lg-0 position-relative bg-primary order-3 border-0">
                        <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">{totalQuantity}</span>
                        <Link to='/cart'><i className="fa-solid fa-cart-plus pe-2" style={{ fontSize: '1.9rem', color: 'white' }}></i></Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;