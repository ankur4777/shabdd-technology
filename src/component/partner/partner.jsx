import './partner.css';

function Partner() {
  const companyLogo = [
    { path: '/company_logo/PrtnerBackground.png' },
    { path: '/company_logo/Untitled-design-8.png' },
    { path: '/company_logo/Untitled-design-9.png' },
  ];

  return (
    <div className="partner">
      <img className="partner-bg" src="/PrtnerBackground.png" alt="" />
      <div className="partner-content">

        <div className="partner-logo">
          {companyLogo.map((e, index) => (
            <img key={index} src={e.path} alt={`Partner logo ${index + 1}`} />
          ))}
        </div>

        <div className="partner-text">
          <h1>Our Genuine Trusted</h1>
          <h1>Partners & Clients</h1>
        </div>
        
      </div>
    </div>
  );
}

export default Partner;
