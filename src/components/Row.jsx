import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false, setSelectedMovie }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    try {
      
      const mediaType =
        movie.media_type || (movie.first_air_date ? "tv" : "movie");

      const response = await axios.get(
        `/${mediaType}/${movie.id}/videos?api_key=c8767161bfd18afbb73627dcdc2653b2`
      );

      const videos = response.data.results;

      
      const trailer = videos.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) {
        setSelectedMovie({ ...movie, trailerKey: trailer.key });
      } else {
        setSelectedMovie({ ...movie, trailerKey: null });
      }
    } catch (err) {
      console.error("Error fetching trailer", err);
      setSelectedMovie({ ...movie, trailerKey: null });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
