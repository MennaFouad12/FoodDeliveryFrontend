import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
export default function Home() {
const [category, setCategory] = useState("All")
const {categories,setCategories}=useContext(StoreContext)
  return (
    <div>
      <Header></Header>
      {/* <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu> */}
      <ExploreMenu categories={categories} setCategories={setCategories}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}
 