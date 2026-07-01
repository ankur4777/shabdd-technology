import React from 'react'
import Banner from '../Banner'
import servicesData from '../serviceData'

function WebApplication() {
  return (
    <div>
      <Banner {...servicesData.webApplication} />
    </div>
  )
}

export default WebApplication
