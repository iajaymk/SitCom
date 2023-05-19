import './Header.css';

export const Header = () => {
  return (
    <div className="Header">
      
      <nav className="nav navbar navbar-expand-lg py-3  px-3">
        <div className="container">
            <div className="navbar-brand fs-3 fw-bold">SIT.CØM</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <div className="nav-link d-flex align-items-center right-border">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <span className="ms-1">SEARCH</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link right-border">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <span className=""> (0)</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link right-border">LOGIN</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">CART (0)</div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}