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
    },
    {
      _id: 4,
      title: "Cle 1 MIROH",
      albumId: "cle-1-miroh",
      img_name: "/images/discography/Miroh.png",
      releaseDate: "March 25, 2019",
      description: "Beginning of the Clé series with the powerful title track MIROH.",
      type: "Mini Album"
    },
    {
      _id: 5,
      title: "Go LIVE",
      albumId: "go-live",
      img_name: "/images/discography/GoLive.jpg",
      releaseDate: "June 17, 2020",
      description: "First full-length album featuring the hit title track 'God's Menu'.",
      type: "Studio Album"
    },
    {
      _id: 6,
      title: "NOEASY",
      albumId: "noeasy",
      img_name: "/images/discography/NoEasy.jpeg",
      releaseDate: "August 23, 2021",
      description: "Second studio album with the explosive title track 'Thunderous'.",
      type: "Studio Album"
    },
    {
      _id: 7,
      title: "ODDINARY",
      albumId: "oddinary",
      img_name: "/images/discography/Stray_Kids_-_Oddinary.jpeg",
      releaseDate: "March 18, 2022",
      description: "Embracing being odd and ordinary simultaneously. Features the intense title track 'MANIAC'.",
      type: "Mini Album"
    },
    {
      _id: 8,
      title: "★★★★★ (5-STAR)",
      albumId: "5-star",
      img_name: "/images/discography/Stray_Kids_-_5-Star.png",
      releaseDate: "June 2, 2023",
      description: "Third studio album showcasing peak artistic achievement with 'S-Class' leading the charge.",
      type: "Studio Album"
    },
    {
      _id: 9,
      title: "락 (ROCK-STAR)",
      albumId: "rock-star",
      img_name: "/images/discography/rockstar.jpg",
      releaseDate: "November 10, 2023",
      description: "Latest album proving their rock-solid status in the industry with 'LALALALA' as the energetic title track.",
      type: "Studio Album"
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