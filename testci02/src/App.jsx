import React from 'react';
import Movies from './Components/Movies'; // Import Movies component
import onePiece from './assets/images/001.png';
import boruto from './assets/images/002.png';
import spyXFamily from './assets/images/003.png';
import shingekiNoKyojin from './assets/images/004.png';
import captainTsubasa from './assets/images/005.png';
import aoashi from './assets/images/006.png';
import highlightedAnimeImg from './assets/images/carousel.png';
import './App.css';



const App = () => {
  const highlightedAnime = {
    src: highlightedAnimeImg,
    title: 'Weather With You',
    description: 'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.'
  };

  const newReleases = [
    { src: onePiece, title: 'One Piece', episode: 'Episode 1018' },
    { src: boruto, title: 'Boruto Naruto Next Generations', episode: 'Episode 250' },
    { src: spyXFamily, title: 'Spy X Family', episode: 'Episode 07' },
    { src: shingekiNoKyojin, title: 'Shingeki no kyojin', episode: 'Episode 28' },
    { src: captainTsubasa, title: 'Captain Tsubasa', episode: 'Episode 28' },
    { src: aoashi, title: 'Aoashi', episode: 'Episode 28' },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Anonime</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#list-anime">List anime</a>
        </nav>
        <input type="text" className="search-bar" placeholder="Search anime or movie" />
      </header>
      <main>
        <Movies highlightedAnime={highlightedAnime} newReleases={newReleases} />
      </main>
    </div>
  );
};

export default App;


