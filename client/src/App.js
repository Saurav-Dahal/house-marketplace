import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import ForgetPassword from './pages/ForgetPassword';
import Offers from './pages/Offers';
import ProductDetails from './pages/ProductDetails';
import ProductListing from './pages/ProductListing';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {

  return (
    <>  
      <Router>
        <Routes>
          <Route path='/' element={<Explore />}></Route>
          <Route path='/forget-password' element={<ForgetPassword />}></Route>
          <Route path='/offers' element={<Offers />}></Route>
          <Route path='/product-details' element={<ProductDetails />}></Route>
          <Route path='/product-listing' element={<ProductListing />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
        {<Navbar></Navbar>}
      </Router>
    <h1>Hey</h1>
    </>
  );

}


export default App;
