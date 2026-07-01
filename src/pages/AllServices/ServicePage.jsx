import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from './Banner'
import servicesData from './serviceData'

function ServicePage() {
  const { serviceKey } = useParams()
  const service = servicesData[serviceKey]

  if (!service) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <p>The service key <strong>{serviceKey}</strong> is not valid.</p>
      </div>
    )
  }

  return (
    <div>
      <Banner {...service} />
    </div>
  )
}

export default ServicePage
