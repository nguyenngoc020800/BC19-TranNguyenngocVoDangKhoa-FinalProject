import React from 'react'
import Filter from '../components/Filter'
import HotelShowing from '../components/HotelShowing';
// import '../Styles/index.css';
// import '../../../SCSS/main.scss'
const Home = () => {
  return (
    <div className="Home">
        <Filter/>
        <HotelShowing/>
    </div>
  )
}

export default Home