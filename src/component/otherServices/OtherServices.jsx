import './otherservices.css';

function OtherServices()
{

  const otherServices = [
    {image:"other_services/1.png", Title:"YouTube Ads"},
    {image:"other_services/2.png", Title:"Meta Ads"},
    {image:"other_services/3.png", Title:"Social Media Marketing"},
    {image:"other_services/4.png", Title:"Graphic Designing"}
  ];

  return (
    <div className="otherservices">
        <h1>Other <span style={{ color: "red" }}>Services</span></h1> 
        <p style={{textAlign: "center"}}>Build a powerful digital presence with tailored solutions that captivate visitors and convert them into loyal customers.</p>
      <div >
        {otherServices.map((e,index)=>(
          <div key={index}>
            <img src={e.image} alt={e.Title} />
            <h3>{e.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherServices;
