import React from 'react'
import Footer from '../Footer/Footer'
import './Content.css'
import Content_image1 from './Content_image1'
import Content_image2 from './Content_image2'
import Content_image3 from './Content_image3'
import Content_text1 from './Content_text1'
import Content_text2 from './Content_text2'


function Content() {
    return (
        <React.Fragment>
            <div className="cont_container">

            <Content_image1 />
            <Content_text1 />
            <Content_image2 />
            <Content_text2 />
            <Content_image3 />
            <Footer />
            </div>
        </React.Fragment>
    )
}

export default Content