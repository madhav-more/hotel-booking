import React from 'react'
import Hero from '../components/Hero'
import FeauturedDestination from '../components/FeauturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero />
      <FeauturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home
