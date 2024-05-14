import React, { useEffect, useState } from 'react';

const BookedShowsPage = () => {
  const [bookedShows, setBookedShows] = useState([]);

  useEffect(() => {
    const shows = JSON.parse(localStorage.getItem('bookedShows')) || [];
    setBookedShows(shows);
    console.log(shows);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">Booked Shows</h1>
      {bookedShows.length > 0 ? (
        <ul className="space-y-4 flex flex-wrap">
          {bookedShows.map((show, index) => (
            <li key={index} className="border p-4 rounded w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 flex flex-col items-center">
              {show.image && <img className="w-full h-auto mb-4" src={show.image.medium} alt={show.name} />}
              <h2 className="text-xl font-bold mb-2">{show.name}</h2>
              <p className="mb-1">Language: {show.language}</p>
              <p className="mb-1">Genres: {show.genres.join(', ')}</p>
              <p className="mb-1">Type: {show.type}</p>
              <p className="mb-1">Rating: {show.rating?.average || 'N/A'}</p>
              <p className="mb-1">Show Day: {show.schedule?.days.join(', ') || 'N/A'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No shows booked yet.</p>
      )}
    </div>
  );
};

export default BookedShowsPage;
