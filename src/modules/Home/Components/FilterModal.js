import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const FilterModal = ({setOpen}) => {
    console.log(setOpen)
  return (
    <div className="cover-dark" onClick={()=>setOpen(false)}>
        <h1>Modal</h1>
    </div>
  )
}

export default FilterModal