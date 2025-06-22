import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRatings from '../components/StarRatings';

const AllRooms = () => {


  const navigate = useNavigate();


  return (


    
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-30 px-4 md:px-12 lg:px-24
    xl:px-32 '>

      <div>
           <div className='flex flex-col items-start text-left'>
            <h1 className='font-playfair text-2xl md:text-[20px]'>Hotel Rooms</h1>
            <p className='text-[15px] md:text-[10px] text-gray-500/90 mt-2 max-w-80'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
           </div>

      {roomsDummyData.map((room)=>(

       <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>

        <img

         onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}

        src={room.images[0]} alt="hotwl-img"  title='View Room Details ' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />

        <div className='md:w-1/2 flex flex-col gap-2'>
          <p className='text-gray-500'> {room.hotel.city}</p>
          <p 
          onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}

          className='text-gray-800 text-2xl font-playfair cursor-pointer'>{room.hotel.name}</p>

          <div className='flex items-center'>

            <StarRatings />
            <p className='ml-2 md:text-[12px]'>200+ reviews</p>

          </div>

          <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm
          '>
            <img src={assets.locationIcon} alt="" className='w-3 h-6' />
            <span className='md:text-[12px]'>{room.hotel.address}</span>
          </div>

             {/* room amenities*/}

          <div className='flex flex-wrap items-center mt-3 mb-6 gap-3'>
              {room.amenities.map((item , index)=>(

                <div key={index} className='flex items-center gap-1.5
                px-3 py-2 rounded-lg bg-[#F5F5FF]/70

                '>

                  <img src={facilityIcons[item]} alt="facility icon"  className='w-2 h-2'/>
                  <p className='text-xs'> {item}</p>
 
                  </div>
              ))}
          </div>
          {/*  room price per night*/}

          <p className='text-2xl font-medium text-gray-700 '>${room.pricePerNight} /night</p>
        </div>
     </div>
        ))}

      </div>


      {/*filters*.  <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
  <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
    <p className='text-base font-medium text-gray-800'>FILTERS</p>
    <div className='text-xs cursor-pointer'>
      <span
        onClick={() => setOpenFilters(!openFilters)}
        className='lg:hidden'
      >
        {openFilters ? 'HIDE' : 'SHOW'}
      </span>
      <span className='hidden lg:block'>CLEAR</span>
    </div>
  </div>
</div>
*/}

      
    </div>
  )
}

export default AllRooms
