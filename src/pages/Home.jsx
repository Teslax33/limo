import React from 'react'
import Hero from '../components/Hero'
import NavbarNav from '../components/NavbarNav'
import Service from '../components/service/Service'
import PickCar from '../components/carPick/PickCar'

const Home = () => {
  return (
    <>
    <NavbarNav />
        <Hero />
        <Service />
        <PickCar />
    </>
  )
}

export default Home