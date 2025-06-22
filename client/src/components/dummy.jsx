import React from 'react'

const dummy = () => {
  return (
    <div>


 {/**  table for recent bookings */ }
<h2 className='text-xl text-blue-900/70 font-medium  mt-2'>recent bookings</h2>      
     <div className="  max-w-2xl text-left border border-gray-300 rounded-lg lg:max-h-200 overflow-y-scroll">
  <table className="w-full overflow-y-scroll ">
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
        ${item.totalPrice}
      </td>
    </tr>
  ))}
</tbody>

  </table>
  
</div>













      
    </div>
  )
}

export default dummy
