import './../css/Header.css';

const Header = ({title, subtitle})=>{
    return(
        <header className="page-header">
            <h1>{title}</h1>
            {subtitle && <h3>{subtitle}</h3>}
        </header>
    );
};

export default Header;