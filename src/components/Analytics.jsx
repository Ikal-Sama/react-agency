import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='about'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum earum, labore officiis eius adipisci consectetur ad quaerat odit magnam quisquam eveniet, quam cupiditate. Ratione, beatae. Harum consequatur aspernatur debitis culpa.</p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black hover:bg-[#00df9a] hover:text-black hover:border'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics