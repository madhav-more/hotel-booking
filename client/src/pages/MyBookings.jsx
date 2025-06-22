import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
   
   const [bookings , setBookings] = useState(userBookingsDummyData)

  return (
    <div className='py-28 md:pb-35 md:pt-26 px-4 md:px-16 xl:px-32'>
      <Title title='My Bookings' subTitle=' book the hotels in simple clicks, plan your trips seamlessly with a few clicks' align='left' />
     

     <div className='max-w-6xl mt-8 w-full text-gray-800'>
       <div className=' items-center hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-ba py-3 '>
        <div className='w-1/3'>Hotels</div>
         <div className='w-'>Date & Timings</div>
          <div className='w-1/3'>Payments</div>
       </div>


       {bookings.map((booking)=>(
        <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first-border-t'>
          {/* ------hotel details------------ */}
           <div className='flex flex-col md:flex-row'>

            <img src={booking.room.images[0]} alt=""  className='min-md:w-28 rounded shadow object-cover '/>
            <div className='flex flex-col  gap-1.5 max-md:mt-3 min-md:ml-1'>
              <p className='font-playfair text-1xl'>{booking.hotel.name}
              <span className='font-inter text-xs'>({booking.room.roomType})</span> </p>

              <div className='flex items-center gap-1 text-xs text-gray-500'>
                <img src={assets.locationIcon} alt="" className='w-2' />
                <span>{booking.hotel.address}</span>
              </div>

              <div className='flex items-center gap-1 text-xs text-gray-500'>
                <img src={assets.guestsIcon} alt="" />
                <span> Guests:{booking.guests}</span>
              </div>

              <p className='text-base'>Total:${booking.totalPrice}</p>

              
            </div>
           </div>
           {/* ------date & timings------------ */}
           <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-6'>

            <div>
              <p>Check-In:</p>
              <p className='tect-gray-500 text-xs'> 
                {new Date(booking.checkInDate).toDateString()}
              </p>
            </div>

            <div>
              <p>Check-Out:</p>
              <p className='tect-gray-500 text-xs'> 
                {new Date(booking.checkOutDate ).toDateString()}
              </p>
            </div>



           </div>

             {/* ------payments------------ */}

             <div className='flex flex-col items-start justify-center  pl-3 '>
               <div className='flex items-center gap-2'>
                <div className={`h-2 w-2 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}>
                  <p className= {`text-sm pl-4 pt-0 ${booking.isPaid ? 'text-green-500' : 'text-red-500'}` }> {booking.isPaid ? 'paid' : 'unpaid'}</p>
                </div>
                {!booking.isPaid && (
                  <button className='px-2 py-1 mt-20 text-xs border border-gray-400 rounded-full hover:bg-gray-50 btransition-all cursor-pointer'>Pay now </button>
                )}

               </div>
             </div>


        </div>

       ))}


     </div>


    </div>
  )
}

export default MyBookings
