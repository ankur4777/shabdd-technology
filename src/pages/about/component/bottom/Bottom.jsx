import React from 'react'
import './Bottom.css'

function Bottom() {
    const data = [
        {
            path: '/about/icon.png',
            h3: 'Operating All over the World',
            p: 'Shabdd Technologies serves clients globally, providing tailored IT solutions that drive success across diverse industries.'
        },
        {
            path: '/about/icon2.png',
            h3: 'Trusted by agile Company',
            p: 'Shabdd Technologies is the go-to partner for agile businesses seeking innovative IT solutions that enhance flexibility and drive growth.'
        }
    ]

    return (
        <div>
            <div className="about-container-bottom">
                <div className="about-container-bottom-item">
                    {data.map((item, index) => (
                    
                        <div key={index}>
                            <img src={item.path} alt="" />
                            <h3>{item.h3}</h3>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h1>Empowering Your Social Media Presence</h1>
                    <p>Shabdd Technologies provides strategic solutions that amplify your brand’s voice and engage your audience effectively.</p>
                </div>
            </div>
        </div>
    )
}

export default Bottom