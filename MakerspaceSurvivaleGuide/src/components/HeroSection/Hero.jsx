import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-info'>
            <button className='btn-secondery'>The Student Guide</button>
            <h1>How to Survivave at <br/>OsloMet Makerspace?</h1>
            <p>This is some of the most asked Question from student comming to OsloMet Makersapce. <br/>
                I this guide you will fine the most importen linkes, 
                answares and other information about the space. </p>
            <button className='btn'>Why do this exist?</button>
        </div>
    </div>
  )
}

export default Hero