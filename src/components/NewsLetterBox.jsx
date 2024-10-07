import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = ()=> {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Suscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Join our community and be the first to know about new arrivals, exclusive offers, and special events.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-2'>
            <input className='w-full sm:flex-1 outline-none' required type="email" placeholder='enter your e-mail' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox