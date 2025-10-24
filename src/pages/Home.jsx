import {Link} from 'react-router-dom';
import Footer from './../components/Footer';
import "./../css/Home.css";

const Home = () => {
    return(
        <div id="main-page">
            <header>
                <Link to="/" className="logo">
                    <img src="/images/stay logo.jpg" width="142" height="91" alt="Website logo" />
                </Link>
                <div className="tagline">STAY CONNECTED - You Make Stray Kid STAY</div>
            </header>

            <main>
                {}
            </main>
            <Footer />
        </div>  
    );
};

export default Home;