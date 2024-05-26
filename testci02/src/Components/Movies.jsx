import React, { useState } from 'react';
import './Movies.css';
import data from './data.json';

function Movies({ highlightedAnime, newReleases }) {
  const [currentHighlightedAnime, setCurrentHighlightedAnime] = useState(highlightedAnime);

  return (
    <div>
      <section className="explore">
        <h2>Explore</h2>
        <p>What are you gonna watch today?</p>
        <div className="highlighted-anime">
          <div className="highlighted-image-container">
            <img src={currentHighlightedAnime.src} alt={currentHighlightedAnime.title} className="highlighted-image" />
            <div className="highlighted-details">
              <h3>{currentHighlightedAnime.title}</h3>
              <p>{currentHighlightedAnime.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="new-release">
        <h2>New Release</h2>
        <div className="anime-list">
          {newReleases.map((anime, index) => (
            <div className="anime-item" key={index} onClick={() => setCurrentHighlightedAnime(anime)}>
              <img src={anime.src} alt={anime.title} />
              <span>{anime.episode}</span>
              <p>{anime.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Movies;