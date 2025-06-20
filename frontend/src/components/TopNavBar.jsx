import { Link, useLocation } from "react-router-dom";
import "../css/TopNavBar.css";

function TopNavBar() {
    const location = useLocation()

    return (
        <nav className="top-navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-brand-link">Local Explorer</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Explore</Link>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            </div>
        </nav>
    )
}

export default TopNavBar