import React from 'react'
import Sidebar from '../components/sidebar'
import Sections from '../components/sections'
import Cards from "../components/cards"
import { Button } from 'antd'
import Categories from '../components/categories'


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
      <hr className='mt-[60px] mb-[80px] my-4 border-t-2 border-gray-300'/>
      <Sections  title="Categories"  tag="Browse By Category" showTimer={false}/>
      <Categories/>
    </div>
    </>
  )
}

export default HomePage
