import React from 'react'
import Banner from '../Banner'
import servicesData from '../serviceData'

function Seo() {
  return (
    <div>
      <Banner {...servicesData.seo} />
    </div>
  )
}

export default Seo
