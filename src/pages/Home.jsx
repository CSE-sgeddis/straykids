import {Link} from 'react-router-dom';
import Footer from './../components/Footer';
import "./../css/Home.css";

const Home = () => {
    return(
        <div id="main-page"
            style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Stray-Kids-Rome-Roma-min-2-scaled.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <header>
                <Link to="/" className="logo">
                    <img src={`${process.env.PUBLIC_URL}/images/stay logo.jpg`} width="142" height="91" alt="Website logo" />
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