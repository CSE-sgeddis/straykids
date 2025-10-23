import './../css/AlbumCard.css';

const AlbumCard = ({album}) => {
    return (
        <div id="abum-card card">
            <img 
                src={album.img_name}
                alt={album.title}
                width="316"
                height="316"
            />
            <div id="album-title">{album.title}</div>
        </div>
    );
};

export default AlbumCard;