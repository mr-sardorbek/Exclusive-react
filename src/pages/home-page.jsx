import React from 'react'
import Sidebar from '../components/sidebar'
import Sections from '../components/sections'
import Cards from '../components/cards'
import { Button } from 'antd'

const HomePage = () => {
  return (
    <>
    <div className='container mx-auto'>
      <Sidebar/>
      <Sections title="Today’s" tag="Flash Sales" showTimer={true} showButtons={true}/>
      <Cards/>
     <div className='flex justify-center mt-[60px] mb-[60px]'>
      <Button type='primary'>View All Products</Button>
     </div>
    </div>
    </>
  )
}

export default HomePage
