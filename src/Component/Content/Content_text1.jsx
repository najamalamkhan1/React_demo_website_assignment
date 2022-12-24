import React from 'react'
import Content_button from './Content_button'
import Content_button1 from './Content_button1'
import Prize_item1 from './Prize_item1'

function Content_text1() {
  return (
    <React.Fragment>
        <div className="cont_text1">
            <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam saepe, laboriosam laborum magnam deserunt illo, ea ad exercitationem commodi quaerat ratione sint hic similique? Facilis perspiciatis impedit quam eius eligendi?</p>
            <Prize_item1 />
            <Content_button />
            <Content_button1 />
        </div>
    </React.Fragment>
  )
}

export default Content_text1