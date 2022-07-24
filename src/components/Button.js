import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const Button = () => {
  return (
    <>
        <IconContext.Provider value={{ className:"arrow" }}>
                    <BsArrowLeftShort />
        </IconContext.Provider>
    </>
  )
}

export default Button