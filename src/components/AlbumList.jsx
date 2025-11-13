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
                    onClick={() => onAlbumClick(album)}
                    className="album-list-item"
                    style={{ cursor: 'pointer' }}
                >
                    <AlbumCard 
                        album={album}
                    />
                </div>
            ))}
        </div>
    );
};

export default AlbumList;