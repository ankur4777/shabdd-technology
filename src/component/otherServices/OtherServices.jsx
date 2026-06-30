import './otherservices.css';

function OtherServices()
{

  const otherServices = [
    {image:"other_services/1.png", Title:"YouTube Ads"},
    {image:"other_services/2.png", Title:"Meta Ads"},
    {image:"other_services/3.png", Title:"Social Media Marketing"},
    {image:"other_services/4.png", Title:"Graphic Designing"}
  ];

  const services = [...otherServices, ...otherServices];

  return (
    <div className="otherservices">
      <div className="otherservices-heading">
        <h1>Other <span>Services</span></h1>
        <p>Build a powerful digital presence with tailored solutions that captivate visitors and convert them into loyal customers.</p>
      </div>
      <div className="otherservice-container">
        <div className="otherservice-track">
          {services.map((e,index)=>(
            <div className="service-card" key={`${e.Title}-${index}`}>
              <div className="service-icon-wrap">
                <img src={e.image} alt={e.Title} />
              </div>
              <h3>{e.Title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
