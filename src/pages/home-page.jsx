import React from 'react'
import Sidebar from '../components/sidebar'
import Sections from '../components/sections'
import Cards from "../components/cards"
import { Button } from 'antd'
import Categories from '../components/categories'
import SellingProduct from '../components/selling-product'
import ProductBanner from '../components/product-banner'
import OurProducts from '../components/our-products'
import Arrival from '../components/arrival'


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
      <hr className='mt-[60px] mb-[80px]  border-gray-400'/>
      <Sections  title="Categories"  tag="Browse By Category" showTimer={false}/>
      <Categories/>
      <hr className='mt-[70px] mb-[70px]  border-gray-400'/>
      <div className='flex mb-[-20px] justify-between'>
        <Sections title="This Month" tag="Best Selling Products" showTimer={false} showButtons={false}/>
      <div className='flex  mt-[60px] '>
        <Button type='primary'>View All</Button>
      </div>
      </div>
      <SellingProduct/>
      <ProductBanner/>
      <Sections title="Our Products" tag="Explore Our Products" showTimer={false} showButtons={true}/>
      <OurProducts/>
      <div className='flex justify-center mt-[60px] mb-[140px]'>
        <Button type='primary'>View All Products</Button>
      </div>
      <Sections title="Featured" tag="New Arrival" showTimer={false} showButtons={false}/>
      <Arrival/>
    </div>
    </>
  )
}

export default HomePage



















