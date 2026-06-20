import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const movies = [
    {
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    },
    {
      title: "Money Heist",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963d?w=500",
    },
    {
      title: "Wednesday",
      image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500",
    },
    {
      title: "Dark",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    },
    {
      title: "Avatar",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      title: "Extraction",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=500",
    },
  ];

  return (
    <div className="home">

      {/* Navbar */}

      <nav className="navbar">

        <h1 className="nav-logo">NETFLIX</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>

        <button
          className="subscribe-btn"
          onClick={() => navigate("/subscription")}
        >
          Subscribe
        </button>

      </nav>

      {/* Banner */}

      <section className="banner">

        <div className="banner-content">

          <h1>Unlimited Movies, TV Shows and More</h1>

          <p>
            Watch anywhere. Cancel anytime.
          </p>

          <button className="watch-btn">
            ▶ Watch Now
          </button>

        </div>

      </section>

      {/* Trending */}

      <section className="movie-section">

        <h2>Trending Now</h2>

        <div className="movie-row">

          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>

              <img src={movie.image} alt={movie.title} />

              <h3>{movie.title}</h3>

            </div>
          ))}

        </div>

      </section>

      {/* Popular */}

      <section className="movie-section">

        <h2>Popular on Netflix</h2>

        <div className="movie-row">

          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>

              <img src={movie.image} alt={movie.title} />

              <h3>{movie.title}</h3>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;