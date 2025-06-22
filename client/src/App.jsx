import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';

import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import DAshboard from './pages/hotelOwner/DAshboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      { !isOwnerPath && <Navbar/>}

     {false && <HotelReg/>}

       

      <div className='min-h-[70vh]' >
        <Routes>
         <Route  path='/' element={<Home/> }/>
         <Route  path='/rooms' element={<AllRooms/> }/>
         <Route  path='/rooms/:id' element={<RoomDetails/> }/>
         <Route  path='/my-booking' element={<MyBookings/> }/>

          {/* this routing is for hotel owner  */}
         <Route path='/owner' element ={<Layout/>}>

         <Route index element= {<div className='pb-60 sm:pb-24'> <DAshboard/></div>}/>
         <Route path='add-room' element= {<AddRoom/>}/>
         <Route path='list-room' element= {<ListRoom/>}/>


         </Route>


        </Routes>
      </div>
    <Footer/>
    </div>
  )
}

export default App
