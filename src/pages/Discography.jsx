import { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import AlbumList from './../components/AlbumList';
import AlbumModal from './../components/AlbumModal';
import AddAlbumForm from '../components/AddAlbumForm';
import EditAlbumForm from '../components/EditAlbumForm';
import './../css/Discography.css';

const Discography = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [editingAlbum, setEditingAlbum] = useState(null);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000); 
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(false);
  };

  const handleAlbumAdded = () => {
    setRefreshTrigger(prev => prev + 1);
    showNotification('Album added successfully!', 'success');
  };

  const handleEdit = (album) => {
    setEditingAlbum(album);
    setSelectedAlbum(false); 
  };

  const handleAlbumUpdated = () => {
    setRefreshTrigger(prev => prev + 1);
    setEditingAlbum(null);
    showNotification('Album updated successfully!', 'success');
  };

  const handleCancelEdit = () => {
    setEditingAlbum(null);
  };

  const handleDelete = () => {
    setRefreshTrigger(prev => prev + 1);
    showNotification('Album deleted successfully!', 'success');
  };

  return (
    <div className="discography-page">
      <Header title="DISCOGRAPHY" subtitle="Albums" />

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <main>
        <AlbumList 
          onAlbumClick={handleAlbumClick} 
          refreshTrigger={refreshTrigger}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        <div className="pagination">
          <span id="pageInfo">All releases</span>
        </div>
      </main>

      {selectedAlbum ? (
        <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />
      ) : false}

      {editingAlbum ? (
        <EditAlbumForm 
          album={editingAlbum}
          onAlbumUpdated={handleAlbumUpdated}
          onCancel={handleCancelEdit}
        />
      ) : (
        <AddAlbumForm onAlbumAdded={handleAlbumAdded} />
      )}

      <Footer />
    </div>
  );
};

export default Discography;