import React from 'react'
import { Link } from "react-router-dom"
import "./service.css"

function Services() {

  const services = [
    { lable: "Web Development", path: '/services/web-development', image: "/background/Web developer.png", description: " Tailored websites that combine functionality with aesthetics, ensuring your online presence is both dynamic and user-friendly." },
    { lable: "Web Application", path: '/services/web-application', image: "/background/Web Application.png", description: "Transform your ideas into functional, user-friendly mobile applications. Our team builds apps tailored to your business needs, ensuring seamless performance across all devices" },
    { lable: "Digital Marketing", path: '/services/digital-marketing', image: "/background/Marketing Icon.png", description: "Amplify your brand’s voice and engage with your audience on social media platforms. We create data-driven campaigns that foster interaction and promote brand loyalty." },
    { lable: "Search Engine optimization", path: '/services/seo', image: "/background/SEO.png", description: "Enhance your website’s visibility on search engines with our comprehensive SEO strategies. We optimize your online presence to drive organic traffic and boost your rankings." },
    { lable: "Meta ADS", path: '/services/meta-ads', image: "/background/Meta Ads.png", description: "Amplify your brand’s voice and engage with your audience on social media platforms. We create data-driven campaigns that foster interaction and promote brand loyalty. " },
    { lable: "Graphic Designing", path: '/services/graphic-designing', image: "/background/Graphic designer.png", description: "Transform your digital presence into a modern, user-friendly experience that captivates visitors and breathes new life into your business." },
    { lable: "Youtube ADS", path: '/services/youtube-ads', image: "/background/Youtub Ads (2).png", description: "We specialize in every YouTube ad format to align with your marketing goals – whether it’s brand awareness, engagement, or direct conversions." }
  ]


  // servicesData.js
const servicesData = {
  webDevelopment: {

    title: "Build Fast, Secure, and Stunning Websites",
    subtitle:"Websites That Truly Stand Out",
    description: "Make unforgettable impressions with purpose-built websites that are visually appealing, effortless to navigate, and simple to manage. Our websites Improve engagement and satisfaction through responsive, user-friendly designs, while you enjoy an edge over competitors."
  },
  webApplication: {
    title: "Next Gen Web Applications",
    subtitle:"Web Application Development Services",
    description: "We build high-performance web applications that work smarter, scale effortlessly, and deliver real value. Whether you're automating workflows, integrating AI, or launching a next-gen SaaS, we turn your vision into reality."
  },
  digitalMarketing: {
    title: "Drive Engagement and Conversions",
    subtitle:"Get Qualified Enrollments Leads with shabdd innovations",
    description:"Increase your online visibility and boost your student enrollments with proven and tested digital marketing strategies."
  },
  seo: {
    title: "SEO Management",
    subtitle:"",
    description: ""
  },
   metaAds: {
    title: "Facebook, Instagram & WhatsApp Advertising",
    subtitle:"Turn Clicks Into Customers with Meta Ads",
    description: "Unleash the full potential of Facebook & Instagram Ads with precision targeting, engaging creatives, and AI-driven optimization. We design high-converting ad campaigns that increase brand visibility, drive traffic, and boost ROI."
  },
   seo: {
    title: "Transform Your Brand with Stunning Graphic Design",
    subtitle:"Creative Designs to Captivate, Engage, and Inspire Your Audience",
    description: "Create your digital presence with intuitive graphics, engaging visuals, and user-centric experiences, crafted to drive engagement and conversion."
  },
   YoutubeADS: {
    title: "Engage, Convert, Scale with Video",
    subtitle:"Drive Results YouTube Ads Marketing",
    description: "Capture attention, drive conversions, and maximize brand visibility with YouTube ad campaigns. We leverage AI-driven insights, strategic targeting, and creative storytelling to deliver high-performing video ads that generate measurable business results."
  },
};



  return (
    <div className="root">
      <h3>Our Service</h3>
      <h4>Driving Digital Excellence with Tailored Solutions </h4>
      <h5 style={{color: 'gray'}}>At Shabdd Technologies, we don't just offer services; we deliver expert-driven solutions designed to empower your business. Explore the unique advantages we bring to the table:</h5>
      <div className='services'>
        {services.map((e) => (
          <Link className="service-link" to={e.path} key={e.path}>
            {<div className='container'>
              <img src={e.image} alt="" />
              <h3>{e.lable}</h3>
              <p className='description'>{e.description}</p>

            </div>}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services; 
