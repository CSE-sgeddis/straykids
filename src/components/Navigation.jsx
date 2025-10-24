import {Link} from "react-router-dom";
import "../css/Navigation.css";

const Navigation = ()=>{
    return (
        <nav id="main-nav">
            <u>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                
            </u>
        </nav>

    );
};

export default Navigation;