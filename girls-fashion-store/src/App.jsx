import { useState } from "react";
import "./App.css";
import Admin from "./Admin";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span>✨</span> MAYUS
          <small>BOUTIQUE</small>
        </div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button>🔍</button>
          <button>♡</button>
          <button>🛒</button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small">NEW COLLECTION 2026</p>

          <h1>
            Elegance That
            <br />
            <span>Defines You.</span>
          </h1>

          <p className="hero-description">
            Discover beautiful sarees, blouses and stylish
            women's wear curated specially for you.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              Shop Now →
            </a>

            <a href="#categories" className="secondary-btn">
              Explore Collection
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>
          <div className="hero-card">
            <span>NEW</span>
            <h3>Festive<br />Collection</h3>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" id="categories">
        <div className="section-heading">
          <p>SHOP BY CATEGORY</p>
          <h2>Find Your Style</h2>
          <span>
            Explore our carefully selected women's fashion collection.
          </span>
        </div>

        <div className="category-grid">

          <div className="category-card saree">
            <div className="category-overlay">
              <p>01</p>
              <h3>Sarees</h3>
              <button>Explore →</button>
            </div>
          </div>

          <div className="category-card blouse">
            <div className="category-overlay">
              <p>02</p>
              <h3>Blouses</h3>
              <button>Explore →</button>
            </div>
          </div>

          <div className="category-card kurti">
            <div className="category-overlay">
              <p>03</p>
              <h3>Kurtis</h3>
              <button>Explore →</button>
            </div>
          </div>

          <div className="category-card collection">
            <div className="category-overlay">
              <p>04</p>
              <h3>Collections</h3>
              <button>Explore →</button>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-section" id="products">
        <div className="section-heading">
          <p>OUR COLLECTION</p>
          <h2>Trending Now</h2>
          <span>Our latest and most loved styles.</span>
        </div>

        <div className="product-grid">

          <Product
            image="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
            name="Elegant Silk Saree"
            price="₹2,499"
          />

          <Product
            image="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
            name="Designer Saree"
            price="₹1,999"
          />

          <Product
            image="https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80"
            name="Designer Blouse"
            price="₹899"
          />

          <Product
            image="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=800&q=80"
            name="Traditional Collection"
            price="₹1,599"
          />

        </div>

        <div className="center">
          <button className="view-all">
            View All Products →
          </button>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer-section">
        <div>
          <p>LIMITED TIME OFFER</p>
          <h2>Get 20% OFF</h2>
          <span>
            On selected festive collections.
          </span>
        </div>

        <button>Shop Offers →</button>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-image">
          <div className="about-placeholder">
            <span>✨</span>
            <h3>AKKA'S</h3>
            <p>FASHION</p>
          </div>
        </div>

        <div className="about-content">
          <p>OUR STORY</p>
          <h2>Fashion Made<br />With Love.</h2>

          <span>
            We believe every woman deserves to feel beautiful,
            confident and comfortable in what she wears.
          </span>

          <p className="about-text">
            From elegant sarees to stylish blouses, every piece
            in our collection is carefully selected with love
            and attention to detail.
          </p>

          <button className="primary-btn">
            Know More →
          </button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <p>STAY UPDATED</p>
        <h2>Join Our Fashion Family</h2>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-brand">
          <h2>AKKA'S FASHION</h2>
          <p>
            Elegant fashion for every woman.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#categories">Categories</a>
        </div>

        <div>
          <h3>Categories</h3>
          <a href="#products">Sarees</a>
          <a href="#products">Blouses</a>
          <a href="#products">Kurtis</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p>📞 +91 7845610212</p>
          <p>📍 TP Chathiram, Amainthakarai, Chennai</p>
          <p>✉️ mayusboutique@gmail.  com</p>
        </div>
      </footer>

      <div className="copyright">
        © 2026 Akka's Fashion. All Rights Reserved.
      </div>

    </div>
  );
}


/* PRODUCT COMPONENT */

function Product({ image, name, price }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />

        <span className="new-tag">NEW</span>

        <button className="heart">♡</button>

        <button className="quick-view">
          Quick View
        </button>
      </div>

      <div className="product-info">
        <p>WOMEN'S COLLECTION</p>
        <h3>{name}</h3>

        <div className="product-bottom">
          <strong>{price}</strong>
          <button>🛒</button>
        </div>
      </div>

    </div>
  );
}

export default App;