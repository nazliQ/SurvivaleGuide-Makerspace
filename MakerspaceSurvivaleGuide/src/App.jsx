import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import CardSection from './components/QuestionSection/CardSection.jsx'
import Footer from './components/Footer/Footer.jsx'


const App = () => {

  return (
    <div>
        <Navbar />
        <Hero />
        <CardSection />
        <Footer />
    </div>
  )
}

export default App