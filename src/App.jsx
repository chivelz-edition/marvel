import React from "react";
import Header from './comp/header/Header'
import Nav from './comp/nav/Nav'
import About from './comp/about/About'
import Experince from './comp/experince/Experince'
import Services from './comp/services/services'
import Portfolio from './comp/portfolio/Portfolio'
import Testimonials from './comp/testimonials/Testimonials'
import Contact from './comp/contact/Contact'
import Footer from './comp/footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About/>
      <Experince/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
};

export default App;
