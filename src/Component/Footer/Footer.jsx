import React from 'react'
import Footer_item1 from './Footer_item1'
import Footer_item2 from './Footer_item2'

function Footer() {
    return (
        <React.Fragment>
            <div className="footer_container">
                <Footer_item1 />
                <Footer_item2 />
            </div>
        </React.Fragment>
    )
}

export default Footer