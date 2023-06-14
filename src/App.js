import './App.css';
import Cart from './components/Cart';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import Category from './components/Category';
import SearchedProduct from './components/SearchedProduct';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/men-shirts' element = {<Category category='mens-shirts'/>}/>
      <Route path='/men-shoes' element = {<Category category='mens-shoes'/>}/>
      <Route path='/men-watches' element = {<Category category='mens-watches'/>}/>

      <Route path='/smartphones' element = {<Category category='smartphones'/>}/>
      <Route path='women-dresses' element = {<Category category='womens-dresses'/>}/>
      <Route path='/women-shoes' element = {<Category category='womens-shoes'/>}/>
      <Route path='/women-watches' element = {<Category category='womens-watches'/>}/>
      <Route path='/women-bags' element = {<Category category='womens-bags'/>}/>
      <Route path='/women-jewellery' element = {<Category category='womens-jewellery'/>}/>
      <Route path='/tops' element = {<Category category='tops'/>}/>

      <Route path='/smartphones' element = {<Category category='smartphones'/>}/>
      <Route path='/laptops' element = {<Category category='laptops'/>}/>

      <Route path='/accessories' element = {<Category category='automotive'/>}/>
      <Route path='/motorcycles' element = {<Category category='motorcycle'/>}/>

      <Route path='/home-decoration' element = {<Category category='home-decoration'/>}/>
      <Route path='/furniture' element = {<Category category='furniture'/>}/>
      <Route path='/lighting' element = {<Category category='lighting'/>}/>

      <Route path='/fragrances' element = {<Category category='fragrances'/>}/>
      <Route path='/skincare' element = {<Category category='skincare'/>}/>
      <Route path='/groceries' element = {<Category category='groceries'/>}/>
      <Route path='/sunglasses' element = {<Category category='sunglasses'/>}/>
      
      <Route path='/search' element = {<SearchedProduct/>}/>

      <Route path='/*' element={<h1 className='mt-5 pt-5'>404 Page Not Found</h1>}/>

    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
