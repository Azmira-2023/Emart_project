import React from 'react'
import Products from './Products'
import NavBar from './NavBar'
import Footer from './Footer'

function Home() {
  return (
  
    <div className='hero'>
      <NavBar />
      <div className="card text-bg-dark text-white border-0">
        <img src="public\assets\bg.jpg" className="card-img" alt="Background" height="600px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className='container'>

            </div>
            <h4 className="card-title display-3 fw-bolder mb-0">All New Trends Are Here</h4>
            <p className="card-text lead fs-2 fw-bolder text-dark text-uppercase">
              Checkout....
             </p>
           
          </div>
      </div>
      <Products/>
      <Footer/>
      
    </div>
  )
}

export default Home