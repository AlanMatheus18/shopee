import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Menus from '../components/Menus'
import SectionProducts from '../components/SectionProducts'


// icones
import { Gift } from 'lucide-react';
import { CirclePoundSterling } from 'lucide-react';
import { Search } from 'lucide-react';
import { Truck } from 'lucide-react';
import { Ticket } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Handbag } from 'lucide-react';
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const Home = () => {

  return (
    <>


      <Header />
      <Body />
      <div className='flex items-center justify-around'>
        <Menus icon={<CirclePoundSterling className='text-amber-300 h-10 w-8' />} text='ola mundoo'/>
        <Menus icon={<Gift className='text-blue-600 h-10 w-8' />} text='ola mundoo'/>
        <Menus icon={<Search className='text-blue-500 h-10 w-8' />} text='ola mundoo'/>
        <Menus icon={<Truck className='text-emerald-700 h-10 w-8' />} text='ola mundoo'/>
        <Menus icon={<Ticket className='text-amber-700 h-10 w-8' />} text='ola mundoo'/>
        <Menus icon={<ShoppingBag className='text-red-600 h-10 w-8'/>} text='ola mundoo'/>
        <Menus icon={<Handbag className='text-red-400 h-10 w-8' />} text='ola mundoo'/>
        <Menus img="https://cf.shopee.com.br/file/br-11134258-81z1k-mf8fz9mkfhtxef_xhdpi" text='ola mundoo'/>
        <Menus icon={<House className='text-emerald-700 h-10 w-8' />} text='ola mundoo' />
        <Menus icon={<ShoppingCart className='text-blue-500 h-10 w-8' />} text='ola mundoo' />
      </div>
      <SectionProducts />

    </>
  )
}

export default Home