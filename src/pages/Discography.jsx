import Header from './../components/Header';
import Footer from './../components/Footer';
import AlbumCard from './../components/AlbumCard';
import './../css/Discography.css';

const Discography = () => {
  // Hard-coded data for now (will be JSON later)
  const albums = [
    {
      _id: 1,
      title: "I Am NOT",
      albumId: "i-am-not",
      img_name: "/images/discography/iamNOT2.jpg",
      releaseDate: "March 16, 2018"
    },
    {
      _id: 2,
      title: "I Am WHO",
      albumId: "i-am-who",
      img_name: "/images/discography/IamWHO.jpg",
      releaseDate: "August 06, 2018"
    },
    {
      _id: 3,
      title: "I Am YOU",
      albumId: "i-am-you",
      img_name: "/images/discography/IamYOU.jpeg",
      releaseDate: "October 22, 2018"
    }
  ];

  return (
    <div className="discography-page">
      <Header title="DISCOGRAPHY" subtitle="Albums" />
      
      <main>
        <section className="grid" id="albumGrid">
          {albums.map(album => (
            <AlbumCard key={album._id} album={album} />
          ))}
        </section>

        <div className="pagination">
          <span id="pageInfo">Showing {albums.length} releases</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discography;