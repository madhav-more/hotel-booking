import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRatings from '../components/StarRatings';

const RoomDetails = () => {

  const {id}= useParams();
  const [room , setRoom] = useState(null);
  const [mainImage , setMainImage] = useState(null);
  

  useEffect(()=>{
        const room = roomsDummyData.find(room => room._id ===id)

        room && setRoom(room)
        room && setMainImage(room.images[0])
  },[])

  return room &&  (

    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
     {/*  room image data*/}
    <div className='flex flex-col md:flex-row items-start md:items-center gap-2 '>
    <h1 className='text-2xl md:text-0.5xl font-playfair'>{room.hotel.name } <span className='font-inter  text-sm'>({room.roomType})</span></h1>
    <p className='text-xs rounded-full font-inter py-1.5 px-3 text-white bg-orange-500 '>20% OFF</p>

    </div>

     {/*  room rating */}

     <div className='flex items-center gap-1 mt-2
     '>
      <StarRatings/>
      <p className='ml-2'>200+ reviews</p>
     </div>

     {/*  room addtress */}
     <div className='flex items-center gap-1 text-gray-500 mt-2'>
      <img src={assets.locationIcon} alt=""  className=''/>
      <span>{room.hotel.address}</span>
     </div>

     {/*  room images */}
     <div className='flex  lg:flex-row mt-6 gap-6'>
      <div className='lg:w-1/2 w-full'>
        <img src={mainImage} alt="room-iamge" 
        className='w-full rounded-xl shadow-lg object-cover ' />
      </div>

      <div className="grid grid-cols-2 gap-2 lg:w-1/2 w-full">
  {room?.images?.length > 1 &&
    room.images.map((image, index) => (
      <img
        onClick={() => setMainImage(image)}
        key={index}
        src={image}
        alt={`room-image-${index}`}
        className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
          mainImage === image ? ' outline-2 outline-orange-500' : ''
        }`}
      />
    ))}
</div>

     </div>    



          {/*  room highlights*/}

          <div className='flex flex-col md:flex-row md:justify-between mt-10'>

            <div className='flex flex-col'>
              <h1 className='text-3xl md:text-3xl font-playfair '>Experience Luxury Like Never Before </h1>
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-2'>
                {room.amenities.map((item,index)=>(
                  <div key={index} className='flex text-[12px] items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 w-35'>
                    <img src={facilityIcons[item]} alt="" className='w-3 h-3'/>
                    <p className='texy-xs
                    '>{item}</p>


                  </div>
                ))}
              </div>

            </div>

           <p className='text-1xl font-medium'>${room.pricePerNight } /night</p>
          </div>
        {/*  checkin and check out form */}

       <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl md-w-4px h-40 mx-auto mt-16 max-w-6xl'>

  <div className='flex  flex-wrap items-center mt-2 gap-4 md:gap-4 text-gray-500'>
    
    <div className='flex h-5 flex-col'>
      <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
      <input 
        type="date" 
        id="checkInDate" 
        placeholder='Check-In' 
        className='w-36 rounded border border-gray-300 px-3 py-2 mt-0.5 outline-none' 
        required 
      />
    </div>
    <div className='w-px h-15 bg-gray-300/70 '></div>
    <div className='flex flex-col h-5'>
      <label htmlFor="checkOutDate" className='font-medium'>Check-Out </label>
      <input 
        type="date" 
        id="checkOutDate" 
        placeholder='Check-out ' 
        className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' 
        required 
      />
    </div>


    <div className='w-px h-15 bg-gray-300/70 '></div>
     <div className='flex flex-col h-4'>
      <label htmlFor="checkOutDate" className='font-medium'>guests </label>
      <input 
        type="number" 
        id="guest" 
        placeholder='0 ' 
        className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' 
        required 
      />
    </div>


  </div>

  <button 
    type='submit' 
    className='bg-primary hover:bg-primary-dull w-20 h-10 items-center active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
    check
  </button>
</form>
        {/*  common spefication */}
           <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index) => (
    <div key={index} className="flex items-start gap-2">
      <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6" />
      <div>
        <p className="text-base text-[15px]">{spec.title}</p>
        <p className="text-gray-500 text-[10px]">{spec.description}</p>
      </div>
    </div>
  ))}
</div>


<div>
  <p className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
    Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.


  </p>
</div>

        {/*  common spefication */}
        <div className='flex flex-col items-start gap-4'>
          <div className='gap-4'>
            <img src={room.hotel.owner.image} alt="" className='h-12 w-12 md:h-14 md:w-14 rounded-full '/>
            <div>
              <p className='text-lg md:text-xl'>hosted by {room.hotel.name}</p>
              <div className='flex items-center mt-1 '>
                <StarRatings/>
                <p className='ml-2 '> 200+ reviews </p>
              </div>
            </div>
          </div>
<button className='px-6 py-2.5 mt-3 rounded-4xl text-white bg-blue-400 hover:bg-primary transition-all cursor-pointer'>contact now </button>
        </div>


    </div>
  )
}

export default RoomDetails
