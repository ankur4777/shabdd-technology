import React from 'react'
import {Link} from "react-router-dom"

function Services() {

  const services=[
    {lable:"Web Development", path: '/services/web-development', image:"/background/Web developer.png", description:" Tailored websites that combine functionality with aesthetics, ensuring your online presence is both dynamic and user-friendly."},
    {lable:"Web Application", path: '/services/web-development', image:"/background/Web Application.png", description:"Transform your ideas into functional, user-friendly mobile applications. Our team builds apps tailored to your business needs, ensuring seamless performance across all devices"},
    {lable:"Digital Marketing", path: '/services/web-development', image:"/background/Marketing Icon.png", description:"Your digital marketing strategy plays a pivotal role in elevating awareness, building a strong brand presence, meeting enrollment targets, and cultivating a diverse network of advocates who will support your institution for years to come."},
    {lable:"Search Engine optimization", path: '/services/web-development', image:"/background/SEO.png", description:"Enhance your website’s visibility on search engines with our comprehensive SEO strategies. We optimize your online presence to drive organic traffic and boost your rankings."},
    {lable:"Meta ADS", path: '/services/web-development',image:"/background/Meta Ads.png", description: "Amplify your brand’s voice and engage with your audience on social media platforms. We create data-driven campaigns that foster interaction and promote brand loyalty. "},
    {lable:"Graphic Designing", path: '/services/web-development', image:"/background/Graphic designer.png", description: "Transform your digital presence into a modern, user-friendly experience that captivates visitors and breathes new life into your business."},
    {lable:"Youtube ADS", path: '/services/web-development',image:"/background/Youtub Ads (2).png", description:"We specialize in every YouTube ad format to align with your marketing goals – whether it’s brand awareness, engagement, or direct conversions."}
  ]
  return (
    <div>
      <h3>Our Service</h3>
      <div className='services'>
            {services.map((e) => (
                    <Link className="dropdown-link" to={e.path} key={e.path}>
                      {<div className='container'>
                        <img src={e.image} alt="" />
                        <h3>{e.lable}</h3>
                        <h4>{e.description}</h4>
                        </div>}
                    </Link>
                  ))}
      </div>
    </div>
  )
}

export default Services; 