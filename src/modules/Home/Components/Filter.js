import React from 'react'
import data from '../../../constant/staticData';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineFilter } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';

const Filter = () => {
  let filter = data.filters;
  console.log(data);

  return (
    <div className="nav-filter container-fluid row">
      <div className="icon-places col-11 row">
        {filter.map((item, index) => {
          return (
            <div key={index} className="place col p-0">
              <p className="m-0">{item.place}</p>
            </div>
          )
        })}
        <IconContext.Provider value={{ className: `arrow` }}>
          <BsArrowLeftShort />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: `arrow` }}>
          <BsArrowRightShort />
        </IconContext.Provider>
      </div>




      <div className="filter-button col-1 p-0">
        <button className="filter">
          <AiOutlineFilter />
          <span className="">Filter</span>
        </button>
      </div>
    </div>
  )
}

export default Filter