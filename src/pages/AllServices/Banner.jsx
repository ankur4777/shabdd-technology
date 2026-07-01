import React from 'react'
import './Banner.css'

function Banner({title, subtitle, description}) {
  return (
    <div>
      <div className="allservices-banner">
        <img src="/allservices/Banner-all.png"/>
        <div className="allservices-banner-text">
            <h4>{title}</h4>
            <h1>{subtitle}</h1>
            <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
