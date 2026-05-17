import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import animeList from '../data/animeList';

export default function AnimeDetail() {
  const { id } = useParams();
  const anime = animeList.find((a) => a.id === id);
  const navigate = useNavigate();

  if (!anime) {
    return <div>Anime not found.</div>;
  }

  return (
    <div>
      <Link to="/" className="back-btn">← Back to Popular Anime</Link>
      <div className="anime-detail-card">
        <img src={anime.image} alt={anime.title} />
        <div className="anime-meta">
          <h2>{anime.title}</h2>
          <p>{anime.description}</p>
          <video controls poster={anime.image} src={anime.videoUrl} />
        </div>
      </div>
    </div>
  );
}
