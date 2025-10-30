import Header from './../components/Header';
import Footer from './../components/Footer';
import ContactForm from './../components/ContactForm';
import './../css/Community.css';

const Community = () => {
  return (
    <div className="community-page">
      <Header title="COMMUNITY" />
      
      <main>
        <section className="content-area">
          <div className="content-text">
            <p>Welcome to the STAY community! This is the place where fans can connect, share their love for Stray Kids, and keep the spirit of STAY alive. Here, you'll find opportunities to chat with fellow fans, discover fan projects, and join discussions about music, performances, and events. You'll also be able to stay connected with Stray Kids through official updates, upcoming schedules, and special activities. This page will grow with more ways to connect, so check back often and let's make sure Stray Kids always stay together with STAY. Whether you're a longtime fan or just starting your journey, you'll find a welcoming space here. From sharing fan art and stories to supporting comeback promotions, every STAY has something to contribute. Together, we make Stray Kids stay!</p>
          </div>
        </section>

        <div className="community-feature">
          <img src={`${process.env.PUBLIC_URL}/images/community/stayhideout.jpg`} alt="Community Feature" height="600" width="600" />
        </div>

        <section className="communication-section">
          <div className="comm-card">
            <h3>Communicate with<br />Stray Kids!</h3>
            <img src={`${process.env.PUBLIC_URL}/images/community/skz.jpg`} alt="Stray Kids"/>
            <div className="link-container">
              <a 
                href="https://www.instagram.com/realstraykids/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="go-btn"
              >
                Official Instagram
              </a>
              <a 
                href="https://twitter.com/Stray_Kids" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="go-btn"
              >
                Official Twitter
              </a>
              <a 
                href="https://www.youtube.com/@StrayKids" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="go-btn"
              >
                Official YouTube
              </a>
            </div>
          </div>

          <div className="comm-card">
            <h3>Communicate with<br />Stays!</h3>
            <img src={`${process.env.PUBLIC_URL}/images/community/skzoo.jpg`} alt="Stays Community" />
            <div className="link-container">
              <a 
                href="https://www.reddit.com/r/straykids/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="go-btn"
              >
                Reddit Community
              </a>
              <a 
                href="https://discord.gg/straykids" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="go-btn"
              >
                Discord Server
              </a>
              <a 
                href="https://twitter.com/hashtag/StrayKids" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="go-btn"
              >
                Twitter #StrayKids
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;