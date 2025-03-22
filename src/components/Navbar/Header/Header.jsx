import React from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${assets.header_img})` }}>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose food dolor sit amet consectetur adipisicing elit. Incidunt tempore earum, laboriosam officiis, doloremque magnam maiores, expedita nemo voluptatum odio culpa molestiae dicta sed aliquid nulla at accusantium. Odio, sed?</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
