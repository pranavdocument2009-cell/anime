import React from 'react';
import { Link } from 'react-router-dom';
import animeList from '../data/animeList';

export default function Home() {
  return (
    <div>
      <h1>Popular Anime</h1>
      <div className="anime-list">
        {animeList.map((anime) => (
          <Link
            className="anime-card"
            key={anime.id}
            to={`/anime/${anime.id}`}
          >
            <img src={anime.image} alt={anime.title} />
            <div className="anime-info">
              <h3>{anime.title}</h3>
              <p>{anime.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
