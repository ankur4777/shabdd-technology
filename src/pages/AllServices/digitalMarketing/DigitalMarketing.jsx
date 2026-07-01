import React from 'react'
import Banner from '../Banner'
import servicesData from '../serviceData'

function DigitalMarketing() {
  return (
    <div>
      <Banner {...servicesData.digitalMarketing} />
    </div>
  )
}

export default DigitalMarketing
