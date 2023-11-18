import React from 'react'
import Hero from '../components/Hero'
import NavbarNav from '../components/NavbarNav'
import Service from '../components/service/Service'

const Home = () => {
  return (
    <>
    <NavbarNav />
        <Hero />
        <Service />
    </>
  )
}

export default Home