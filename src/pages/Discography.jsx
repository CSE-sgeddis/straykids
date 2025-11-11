import { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import AlbumList from './../components/AlbumList';
import AlbumModal from './../components/AlbumModal';
import './../css/Discography.css';

const Discography = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

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
        {/* AlbumList component handles fetching and displaying */}
        <AlbumList onAlbumClick={handleAlbumClick} />
        
        <div className="pagination">
          <span id="pageInfo">All releases</span>
        </div>
      </main>

      {/* Modal for album details */}
      {selectedAlbum && (
        <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
};

export default Discography;