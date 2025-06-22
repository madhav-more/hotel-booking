import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
    
  const [images , setImages] = useState({
    1: null,
    2:null,
    3: null,
    4:null,

  })

  const [inputs ,setInputs] = useState({
    roomType:'',
    pricePerNight : onabort,
    amenities: {
      'Free WiFi' : false,
      'Free BreakFast' : false,
      'Free Mountsin view' : false,
      'pool access' : false,
      'Room service' : false,
    }
  })


  return (
    <div>

      <form action="">


        <Title align='left' font='outfit' title='Add Room ' subTitle=' fill in the details carefully and acurate room details, pricing an amenites to enhance the user exprience'/>

         {/**  upload area for images */ }
         <p className='text-gray-800 mt-10'> Images</p>
         <div className='grid grid-cols-2 md:grid-cols-2 sm:flex gap-3 my-2 flex-wrap '>
          {Object.keys(images).map((key)=>(

            <label htmlFor={`roomImages${key}`} key={key}>

              <img className='max-h-16  max-w-25 cursor-pointer opacity-80'
               src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
               <input type="file" accept='image/*' id= {`roomImages${key}`} hidden 
               onChange={e=> setImages({...images , [key]:e.target.files[0]})}/>

            </label>

          )) }
         </div>



          {/**  upload area for room type and pricing*/ }

          <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4 '>

            <div className='flex-1 max-w-40'>
              <p className='text-gray-800 mt-4 '>Room type </p>

              <select value={inputs.roomType}
              onChange={e=> setInputs({...inputs , roomType:e.target.value})}
              className='border-3 opacity-70 border-gray-300 mt-1 rounded p-2 w-33'>
               <option value="" className='text-sm'> Select Room Type</option>
               <option value=" Double Bed">Double Bed</option>
                <option value=" Single Bed">Single Bed</option>
                 <option value=" luxury room">luxury room</option>
                  <option value=" Family suite">Family suite</option>
                
              </select>

            </div>

            {/**  upload area for pricing*/ }

            <div>
              <p className='mt-4 text-gray-800'>
                Price <span className='text-xs'>/night</span>
              </p>
              <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-25 '  value={inputs.pricePerNight}
              onChange={e=>setInputs({...inputs,pricePerNight:e.target.value})}
              
              />


            </div>

          </div>

          <p className='text-gray-800 mt-4 '>Amenities</p>

          <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
            {Object.keys(inputs.amenities).map((amenity,index)=>(
              <div key={index}>
                <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} 
                onChange={()=>setInputs({...inputs,amenities:{...inputs.amenities, [amenity]:!inputs.amenities[amenity]}})} />

                <label htmlFor={`amenities${index+1}`}>   {amenity} 
                   
                </label>


              </div>
            ))}

          </div>
          <button className='bg-primary text-white px-6 py-2 rounded mt-7 cursor-pointer mb-16'>
            Add room
          </button>






      </form>


      
    </div>
  )
}

export default AddRoom
