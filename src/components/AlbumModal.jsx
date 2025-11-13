import './../css/AlbumModal.css';

const AlbumModal = ({ album, onClose }) => {
  if (!album) return false;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-album" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>{album.title}</h2>
          <span className="album-type">{album.type}</span>
        </div>

        <div className="modal-body">
          <div className="album-image">
            <img src={"https://straykids-server-2.onrender.com" + album.img_name} alt={album.title} />
          </div>


          <div className="album-info-details">
            <div className="info-row">
              <strong>Release Date:</strong>
              <span>{album.releaseDate}</span>
            </div>

            <div className="info-row">
              <strong>Type:</strong>
              <span>{album.type}</span>
            </div>

            <div className="description">
              <h3>About</h3>
              <p>{album.description}</p>
            </div>

            {album.tracks && album.tracks.length > 0 && (
              <div className="tracklist">
                <h3>Tracklist</h3>
                <ol>
                  {album.tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumModal;