import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {

  const [categoty, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu categoty={categoty} setCategory={setCategory} />
      <FoodDisplay categoty={categoty} />
    </div>
  )
}

export default Home
