import React from 'react'
import Slider from '../components/Slider'
import Drinks from '../components/Drinks'
import AboutSection from '../sections/AboutSection'
import MiddleSection from '../sections/MiddleSection'
import ContactSection from '../sections/ContactSection'

const HomePage = () => {
  return (
    <>
     <section><Slider/></section> 
     <section className='bg-darkBlack'><Drinks/></section>
     <section className='bg-darkBlack '><AboutSection/></section>
     <section className='bg-darkBlack'><MiddleSection/></section>
     <section className='padding bg-darkBlack'><ContactSection/></section>
    </>
  )
}

export default HomePage
