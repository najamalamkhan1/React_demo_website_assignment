import React from 'react'
import Listitem_1 from './Listitem_1'
import Listitem_2 from './Listitem_2'
import Listitem_3 from './Listitem_3'
import Listitem_4 from './Listitem_4'
import Listitem_5 from './Listitem_5'
import Listitem_6 from './Listitem_6'
import Searchbar from '../Searchbar/Searchbar'
import Logo from '../Logo/Logo'
import './Navbar.css'

function Navbar() {
  return (
    <React.Fragment>
          <Logo />
      <div className="nav_container">
          <Searchbar />
        <ul>
          <Listitem_1 />
          <Listitem_2 />
          <Listitem_3 />
          <Listitem_4 />
          <Listitem_5 />
          <Listitem_6 />
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Navbar