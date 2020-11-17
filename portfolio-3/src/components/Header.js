import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import avatar1 from '../assets/images/kangarooBig.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar1} alt="" />
      </a>
      <h1>
        Kangur Photography
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
