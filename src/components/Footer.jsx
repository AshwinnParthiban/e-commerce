import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="logo" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                Stay connected with us for the latest updates, promotions, and exclusive offers. Your journey to great products starts here!
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-9933645873</li>
                    <li>contactForeveryou.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2024@ forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer