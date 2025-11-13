import { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import AlbumList from './../components/AlbumList';
import AlbumModal from './../components/AlbumModal';
import './../css/Discography.css';
import AddAlbumForm from '../components/AddAlbumForm';

const Discography = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  const handleAlbumAdded = (newAlbum) => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="discography-page">
      <Header title="DISCOGRAPHY" subtitle="Albums" />
      
      <main>
        <AddAlbumForm onAlbumAdded={handleAlbumAdded} />

        <AlbumList 
          onAlbumClick={handleAlbumClick} 
          refreshTrigger={refreshTrigger}
        />
        
        <div className="pagination">
          <span id="pageInfo">All releases</span>
        </div>
      </main>

      {selectedAlbum && (
        <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
};

export default Discography;