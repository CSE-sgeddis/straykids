import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaItem from '../components/MediaItem';
import '../css/Media.css';

const Media = () => {
  const images = [
  {
    id: 1,
    src: `${process.env.PUBLIC_URL}/images/media/maniacperformance.jpeg`,  
    title: "MANIAC Performance",
    date: "March 2022",
    category: "performance"
  },
  {
    id: 2,
    src: `${process.env.PUBLIC_URL}/images/media/behindrecordingsess.jpg`,  
    title: "Recording Session",
    date: "January 2024",
    category: "behind"
  },
  {
    id: 3,
    src: `${process.env.PUBLIC_URL}/images/media/STRAY-KIDS-ODDINARY-Concept-Teasers-documents-2.jpeg`,
    title: "ODDINARY Concept",
    date: "February 2022",
    category: "photoshoot"
  },
  {
    id: 4,
    src: `${process.env.PUBLIC_URL}/images/media/godsmenuperformance.jpg`,
    title: "God's Menu Live",
    date: "June 2020",
    category: "performance"
  },
  {
    id: 5,
    src: `${process.env.PUBLIC_URL}/images/media/mvfilming maniac.jpg`,
    title: "MV Filming",
    date: "August 2021",
    category: "behind"
  },
  {
    id: 6,
    src: `${process.env.PUBLIC_URL}/images/media/230517-stray-kids-the-3rd-full-album-5-star-teaser-images-v0-1c3dwriik70b1.jpg`,
    title: "5-STAR Editorial",
    date: "June 2023",
    category: "photoshoot"
  }
];

  return (
    <div className="media-page">
      <Header title="MEDIA" />
      
      <main className="media-layout">
        <section className="images">
          <h2>Images</h2>
          <div className="grid image-grid">
            {images.map(image => (
              <MediaItem key={image.id} item={image} />
            ))}
          </div>
          <div className="pagination">
            <span id="imagePageInfo">Showing {images.length} images</span>
          </div>
        </section>

        <section className="videos">
          <h2>Recent Videos</h2>
          <div className="video-list">
            <div className="video-item">
              <div className="video-thumbnail">
                <iframe 
                  width="100%" 
                  height="200" 
                  src="https://www.youtube.com/embed/dBDkYofMUs4" 
                  title="LALALALA"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <h3>Stray Kids "LALALALA" M/V</h3>
                <p>Official Music Video • Nov 10, 2023</p>
                <div className="video-stats">45M views • 1.2M likes</div>
              </div>
            </div>
            
            <div className="video-item">
              <div className="video-thumbnail">
                <iframe 
                  width="100%" 
                  height="200" 
                  src="https://www.youtube.com/embed/JsOOis4bBFg" 
                  title="S-Class"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <h3>Stray Kids "S-Class" M/V</h3>
                <p>Official Music Video • Jun 2, 2023</p>
                <div className="video-stats">89M views • 2.1M likes</div>
              </div>
            </div>
            
            <div className="video-item">
              <div className="video-thumbnail">
                <iframe 
                  width="100%" 
                  height="200" 
                  src="https://www.youtube.com/embed/OvioeS1ZZ7o" 
                  title="MANIAC" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <h3>Stray Kids "MANIAC" M/V</h3>
                <p>Official Music Video • Mar 18, 2022</p>
                <div className="video-stats">156M views • 3.5M likes</div>
              </div>
            </div>

            <div className="video-item">
              <div className="video-thumbnail">
                <iframe 
                  width="100%" 
                  height="200" 
                  src="https://www.youtube.com/embed/EaswWiwMVs8" 
                  title="Thunderous"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <h3>Stray Kids "Thunderous" M/V</h3>
                <p>Official Music Video • Aug 23, 2021</p>
                <div className="video-stats">201M views • 4.8M likes</div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <span id="videoPageInfo">Showing 4 videos</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;