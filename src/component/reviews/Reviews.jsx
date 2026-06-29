import './reviews.css';

function Reviews() {
  const reviews = [
    {
      text: 'Shabdd Technology exceeded our expectations with their top-notch web development services. The team was professional and responsive. Highly recommended.',
      name: 'Raman Makkar',
      role: 'Client',
      initials: 'RM',
    },
    {
      text: 'Exceptional mobile app development experience. The app is sleek and delivered on time. Fantastic work by the team.',
      name: 'Deepak Rawat',
      role: 'Client',
      initials: 'DR',
    },
  ];

  return (
    <section className="reviews">
      <div className="reviews-panel">
        <div className="reviews-heading">
          <h2>
            Our <span>Client&apos;s</span> Reviews
          </h2>
          <p>
            Discover why businesses trust SHABDD Technology to elevate their
            digital presence and deliver outstanding results.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="quote-mark">&quot;</div>
              <p className="review-text">&quot;{review.text}&quot;</p>

              <div className="review-author">
                <div className="review-avatar">{review.initials}</div>
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="reviews-button" type="button">
          View All Reviews
        </button>
      </div>
    </section>
  );
}

export default Reviews;
