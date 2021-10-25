import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container">
                <Link to={"/"} className="navbar-brand" href="#">OMDB API</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        
                        <li className="nav-item">
                            <Link to={'/manga'} className="nav-link">Mangas</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
