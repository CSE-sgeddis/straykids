import './../css/AlbumCard.css';

const AlbumCard = ({album}) => {
    return (
        <div className="abum-card card">
            <img 
                src={album.img_name}
                alt={album.title}
                width="316"
                height="316"
            />
            <div className="album-title">{album.title}</div>
        </div>
    );
};

export default AlbumCard;