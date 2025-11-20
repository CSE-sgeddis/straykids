import {useState, useEffect} from "react";
import axios from "axios";
import AlbumCard from "./AlbumCard";
import "./../css/AlbumList.css";

const AlbumList = ({ onAlbumClick, limit, refreshTrigger }) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const SERVER_URL = 'https://straykids-server-2.onrender.com'; 

    useEffect(() => {
        const loadAlbums = async () => {
            try {
                const response = await axios.get("https://straykids-server-2.onrender.com/api/albums");
                const albumsToShow = limit ? response.data.slice(0, limit) : response.data;
                setAlbums(albumsToShow);
                setLoading(false);
            } catch (err) {
                console.error('Error loading albums:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        loadAlbums();
    }, [limit, refreshTrigger]);

    const handleDelete = async (albumId, e) => {
        e.stopPropagation();

        if (!window.confirm('Are you sure you want to delete this album?')) {
            return;
        }

        try {
            const response = await axios.delete("https://straykids-server-2.onrender.com/api/albums");
            if (response.data.success) {
                setAlbums(albums.filter(album => album._id !== albumId));
                
                if (onDelete) {
                    onDelete(albumId);
                }
            }
        } catch (error) {
            console.error('Error deleting album:', error);
            alert('Failed to delete album. Please try again.');
        }
    };

    const handleEdit = (album, e) => {
        e.stopPropagation(); 
        if (onEdit) {
            onEdit(album);
        }
    };
    

    if (loading) {
        return <div className="loading">Loading albums from server...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="album-list grid">
            {albums.map((album) => (
                <div 
                    key={album._id} 
                    className="album-list-item"
                >
                    <div 
                        onClick={() => onAlbumClick(album)}
                        style={{ cursor: 'pointer' }}
                    >
                        <AlbumCard album={album} />
                    </div>
                    
                    <div className="album-actions">
                        <button 
                            className="edit-btn"
                            onClick={(e) => handleEdit(album, e)}
                        >
                            Edit
                        </button>
                        <button 
                            className="delete-btn"
                            onClick={(e) => handleDelete(album._id, e)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AlbumList;