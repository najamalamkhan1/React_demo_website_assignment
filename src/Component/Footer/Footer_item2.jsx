import React from 'react'
import Footer_button from './Footer_button'

function Footer_item2() {
  return (
    <React.Fragment>
        <div className="footer_subscription">
            <input type="email" placeholder='For more updates Subscribe now'/>
            <Footer_button />
        </div>
    </React.Fragment>
  )
}

export default Footer_item2