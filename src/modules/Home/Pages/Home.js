import React from 'react'
import Filter from '../components/Filter'
import HotelShowing from '../components/HotelShowing';

const Home = () => {
  return (
    <div className="Home">
        <Filter/>
        <HotelShowing/>
    </div>
  )
}

export default Home