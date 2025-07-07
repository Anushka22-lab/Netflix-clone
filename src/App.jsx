import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Login from "./components/Login";
import Register from "./components/Register";
import MovieModal from "./components/MovieModal";
import requests from "./requests";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });

    return unsubscribe;
  }, []);

  if (!user) {
    
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "red" }}>Netflix Clone Auth</h1>
        <div style={{ display: "flex",flexDirection:"column" ,justifyContent: "center", gap: "2rem" }}>
          <Register />
          <Login />
        </div>
      </div>
    );
  }

 
  return (
    <>
      <Header />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        setSelectedMovie={setSelectedMovie}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        setSelectedMovie={setSelectedMovie}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        setSelectedMovie={setSelectedMovie}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        setSelectedMovie={setSelectedMovie}
      />

      
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default App;
