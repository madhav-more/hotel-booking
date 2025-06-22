import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
  <form className='flex bg-white rounded-xl     max-w-2xl max-h-100
   max-md:mx-4xl'>
    <img
      src={assets.regImage}
      alt="reg-image"
      className='w-1/2 rounded-xl hidden md:block'
    />

    <div className='relative flex flex-col  items-center md:w-1/2 p-8 md:p-10'>
      <img
        src={assets.closeIcon}
        alt="close-icon"
        className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
      />
      <p className='text-1xl font-semibold  mt-1 my-0.5'>Register Your Hotel</p>

      {  /*  input filed for hotel name*/ }

      <div className='w-fit mt-1'>
        <label htmlFor="name" className='font-medium text-sm text-gray-500 '>
          Hotel Name
        </label>
        <input id='name'  type="text"  placeholder='Type here'  className='border border-gray-200 rounded w-full
          px-3 py-1 mt-1 outline-indigo-500 font-light ' required/>
      </div>

      {  /*  input filed for phone*/ }

      <div className='w-full mt-1.5 '>
        <label htmlFor="contact" className='font-medium text-sm text-gray-500 '>
          PHONE
        </label>
        <input id='contact' type="text"  placeholder='Type here'  className='border border-gray-200 rounded w-full  px-3 py-1 mt-1 outline-indigo-500 font-light ' required/>
      </div>

      {  /*  input filed for address*/ }

      <div className='w-full mt-1.5 '>
        <label htmlFor="address" className='font-medium text-sm text-gray-500 '>
        Address
        </label>
        <input id='address' type="text"  placeholder='Type here'  className='border border-gray-200 rounded w-full px-3 py-1 mt-1 outline-indigo-500 font-light ' required/>
      </div>


        {  /* select city dropdown*/ }

        <div className='w-full mt-1.5 max-w-60 mr-auto'>

          <label htmlFor="city" className='font-medium text-sm text-gray-500'> city </label>
          <select  id="city" className='border border-gray-200 rounded w-full  px-3 py-1mt-1 outline-indigo-500 font-light' required>
            <option value=""> Select City</option>
            {cities.map((city)=>(
             <option key={city} value={city} className='text-xs'> {city}</option>

            ))}
          </select>
        </div>

        <button className='bg-indigo-500 hover:bg-indigo-700 transition-all text-white mr-auto  px-6 py-2 rounded cursor-pointeer mt-6 text-sm '> Register </button>







    </div>
  </form>
</div>

  )
}

export default HotelReg
