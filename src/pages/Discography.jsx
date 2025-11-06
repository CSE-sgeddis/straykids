import { useState, useEffect } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import AlbumCard from './../components/AlbumCard';
import AlbumModal from '../components/AlbumModal';
import './../css/Discography.css';

const Discography = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // UPDATE THIS URL TO YOUR RENDER SERVER URL ONCE DEPLOYED
  const SERVER_URL = 'http://localhost:3001';

  useEffect(() => {
    // Fetch albums from JSON file
    fetch(`${SERVER_URL}/api/albums`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch albums from server');
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

   const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="discography-page">
      <Header title="DISCOGRAPHY" subtitle="Albums" />
      
      <main>
        <div className="loading">Loading albums from server...</div>
      </main>

      <Footer />
    </div>
  );
};
 if (error) {
    return (
      <div className="discography-page">
        <Header title="DISCOGRAPHY" subtitle="Albums" />
        <main>
          <div className="error">Error: {error}</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="discography-page">
      <Header title="DISCOGRAPHY" subtitle="Albums" />
      
      <main>
        <section className="grid" id="albumGrid">
          {albums.map(album => (
            <div key={album._id} onClick={() => handleAlbumClick(album)}>
              <AlbumCard album={album} />
            </div>
          ))}
        </section>

        <div className="pagination">
          <span id="pageInfo">Showing {albums.length} releases</span>
        </div>
      </main>

      {/* Modal for album details */}
      {selectedAlbum && (
        <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />
      )}

      <Footer />
    </div>
  );

export default Discography;