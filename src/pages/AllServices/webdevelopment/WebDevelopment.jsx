import React from 'react'
import Banner from '../Banner'
import servicesData from '../serviceData'

function WebDevelopment() {
  return (
    <div>
      <Banner {...servicesData.webDevelopment} />
    </div>
  )
}

export default WebDevelopment;