import React, { Component } from 'react'
import './HomePage.css'
import hm from './hm.png'

const Home = () =>{
    return(
        <div className='home_page'>
        <div className='logo'><img src={hm} alt="My Logo" /></div>
        </div>
    )
}

export default Home;