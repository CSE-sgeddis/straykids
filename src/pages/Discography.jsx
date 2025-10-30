import { useState, useEffect } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import AlbumCard from './../components/AlbumCard';
import './../css/Discography.css';

const Discography = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch albums from JSON file
    fetch('https://cse-sgeddis.github.io/csce242/projects/part6/json/albums.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch albums');
        }
        return response.json();
      })
      .then(data => {
        setAlbums(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading albums:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);


  return (
    <div className="discography-page">
      <Header title="DISCOGRAPHY" subtitle="Albums" />
      
      <main>
        <section className="grid" id="albumGrid">
          {albums.map(album => (
            <AlbumCard key={album._id} album={album} />
          ))}
        </section>

        <div className="pagination">
          <span id="pageInfo">Showing {albums.length} releases</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discography;