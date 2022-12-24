import React from 'react'
import './Searchbar.css'
import Searchbutton from '../Searchbutton/Searchbutton'

function Searchbar() {
  return (
    <React.Fragment>
        <div className="search_bar">
            <input type="text" placeholder="Search For plots?"/>
        </div>
            <Searchbutton />
    </React.Fragment>
  )
}

export default Searchbar