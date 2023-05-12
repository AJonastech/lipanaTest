/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import circle from "../Assets/Images/Ellipse 1.png"
function BackImages() {
    return (
      <>
        <img className='absolute top-4 left-[-40px]' src={circle} alt="image"/>
          <img className='absolute bottom-[-40px] left-7 ' src={circle} alt="image"/>
          <img className='absolute bottom-[-150px] right-[-120px] ' src={circle} alt="image"/>
          <img className='absolute top-[-150px] right-[-70px] ' src={circle} alt="image"/>
      </>
    )
}

export default BackImages
