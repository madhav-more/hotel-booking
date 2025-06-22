import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const DAshboard = () => {

  const [dashboardData , setdashboardData] = useState(dashboardDummyData)
 



  return (
    <div>

         <Title
         align='left' 
         font='outfit' 
          title='Dashboard' 
          subTitle='Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations.' 
          />

          {/**  total booking */ }

          <div className='flex flex-row gap-3  '>

          <div className= ' w-45 mt-6 h-15    bg-primary/3 border border-primary/10 w-3.5rounded flex p-4 pr-8 '>
          <img src={assets.totalBookingIcon} alt=""  className='max-sm:hidden h-8'/>

          <div className='flex flex-col sm:ml-4 font-medium'>
             <p className='text-blue-500 text-sm'>Total Booking</p>
          <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
          </div>


          {/**  total revenue */ }

          <div className= ' w-45 h-15  mt-6 bg-primary/3 border border-primary/10 w-3.5rounded flex p-4 pr-8 '>
          <img src={assets.totalRevenueIcon} alt=""  className='max-sm:hidden h-8'/>

          <div className='flex flex-col sm:ml-4 font-medium'>
             <p className='text-blue-500 text-sm'>Total Revenue</p>
          <p className='text-neutral-400 text-base'> ${dashboardData.totalRevenue}</p>
          </div>
          </div>
             


      </div>


      {/**  table for recent bookings */ }
<h2 className='text-xl text-blue-900/70 font-medium  mt-6 '>recent bookings</h2> 



     <div className="  w-125   text-left border mt-2  border-gray-300 rounded-lg overflow-x-scroll overflow-y-scroll">
  <table className="w-full  overflow-y-scroll ">
    <thead className="bg-gray-50">
      <tr>
        <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
        <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">Room Name</th>
        <th className="py-3 px-4 text-gray-800 font-medium text-center">Total Amount</th>
        <th className="py-3 px-4 text-gray-800 font-medium text-center">Payment Status</th>
      </tr>
    </thead>

    <tbody className="text-sm">
  {dashboardData.bookings.map((item, index) => (
    <tr key={index}>
      <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
        {item.user.username}
      </td>
      <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
        {item.room.roomType}
      </td>
      <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
        ${item.totalPrice}
      </td>
       <td className="py-3 px-4 border-t border-gray-300 flex">
        <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-600 ' : 'bg-amber-200 text-yellow-800'}`}>
          {item.isPaid ? 'completed' : 'pending'}
        </button>
       
      </td>
    </tr>
  ))}
</tbody>

  </table>
  
</div>











      
    </div>
  )
}

export default DAshboard
