import './blog.css';

function Blog() {
  const blogs = [
    {
      title: '7 Key Stages to Build a Powerful Social Media Plan',
      date: 'August 8, 2024',
      comments: '0 Comments',
      author: 'pardeep.bh@gmail.com',
      image: '/blog/1.jpg',
      description:
        "In today's digital-driven world, an IT solutions company can't afford to ignore the power of",
    },
    {
      title: 'Social Media Management for IT Solutions: Unlocking Growth in the Digital World',
      date: 'August 8, 2024',
      comments: '0 Comments',
      author: 'pardeep.bh@gmail.com',
      image: '/blog/2.jpg',
      description:
        "In a fast-paced digital era, where every business is fighting for visibility, IT solution companies",
    },
    {
      title: 'Social Media Management for IT Solution Companies: Boosting Visibility in the Digital Age',
      date: 'August 8, 2024',
      comments: '0 Comments',
      author: 'Pardeep.Bh@Gmail.Com',
      image: '/blog/3.jpg',
      description:
        "In the ever-evolving tech world, visibility is everything. No matter how innovative your IT solutions",
    },
  ];

  return (
    <section className="blog">
      <div className="blog-header">
        <h2 style={{ color: 'black' }}>
          Latest <span>Blog</span> & News
        </h2>
        <p>
          Our blog features expert articles, industry news, and updates on
          cutting-edge solutions from Shabdd Technology.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <article className="blog-card" key={blog.title}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-card-content">
              <h3>{blog.title}</h3>

              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.comments}</span>
              </div>
              <p className="blog-author">{blog.author}</p>
              <p className="blog-description">{blog.description}</p>

              <a className="blog-link" href="/">
                Learn More...
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
