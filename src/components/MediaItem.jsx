import './../css/MediaItem.css';

const MediaItem = ({ item }) => {
  return (
    <div className="media-item" data-category={item.category}>
      <img 
        src={item.src} 
        alt={item.title} 
        loading="lazy" 
        width="300" 
        height="200"
      />
      <div className="media-overlay">
        <div className="media-title">{item.title}</div>
        <div className="media-date">{item.date}</div>
      </div>
    </div>
  );
};

export default MediaItem;