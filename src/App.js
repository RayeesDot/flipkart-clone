import {Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Navbar from './components/navbar';
import '@coreui/icons/css/all.min.css';
import Dashboard from './components/dashboard';
import TestComp from './components/athContent/testComp';
import Carousel from './components/carousel';
import ProductsDetails from './components/ProductsDetails';
 

function App() {
  return (
    <>
     <Header />
      <Navbar />
     
      <Routes>
        <Route path='/' element={<> <Carousel/> <Dashboard /> </>} />          {/* both the Carousel and Dashboard components for the root path ('/') */}
        <Route path='/main' element={<Main />} />
        <Route path='/testComp' element={<TestComp />} />
        <Route path='/product-details/:id' element={<ProductsDetails />} />
      </Routes>
      <Footer />
    </>
  );


}

export default App;
