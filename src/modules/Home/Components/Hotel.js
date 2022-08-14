import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { IconContext } from 'react-icons/lib';
import HotelSlide from './HotelSlide';
const Hotel = () => {
    return (
        <div className="card hotel col-6 col-md-3 border-0 mb-5" >
            <div className="hotel-header">
                <HotelSlide image={`https://picsum.photos/seed/picsum/200/300`} />

                <IconContext.Provider value={{ className:"arrow" }}>
                    <BsArrowLeftShort />
                    
                </IconContext.Provider>


                <IconContext.Provider value={{ className:"arrow"}}>
                    <BsArrowRightShort />
                </IconContext.Provider>


            </div>
            <div className="card-body hotel-body">
                <div className="hotel-title row">
                    <span className="hotel-name col-8 font-weight-bold">Ten Khach San,Thanh Pho</span>
                    <span className="hotel-status col-4 font-weight-bold text-right"><BsStarFill className="star-icon" /> New</span>
                </div>
                <div className="hotel-detail">
                    <p className="hotel-adress m-0">Khoang Cach</p>
                    <p className="hotel-adress m-0">Dia diem, Thanh pho, Dat nuoc</p>
                    <p className="hotel-adress m-0">Price: 90000/night</p>
                </div>

            </div>
            
        </div>
    )
}

export default Hotel