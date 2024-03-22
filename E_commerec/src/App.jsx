import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';
import Product from './Components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Cart from './Components/Cart'
// import { Login } from './Components';
// import Register from './Components';


function App() {
  return (
    <>
      {/* <Navbar/>
    <Home/>
    <Product/> */}

       <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={< Navbar />} />  */}
          <Route exact path="/" element={< Home />} />
          <Route exact path="product/:id" element={<Product/>} />
          {/* <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} /> */}
          {/* <Route exact path="/cart" component={Cart} /> */}
          {/* <Route exact path="products/:category" element={<Category />} /> */}
        </Routes>
      </BrowserRouter> 

    </>
  );
}

export default App;
