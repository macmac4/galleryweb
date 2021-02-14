import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="collapse" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 pt-4">
              <h4 className="text-white">About</h4>
              <p className="text-description">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
            </div>
            <div className="col-sm-4 offset-md-1 pt-4">
              <h4 className="text-white">Quick Links</h4>
              <ul className="list-link">
                <li><NavLink exact activeClassName="active--link" to="/" className="text-white">Album list</NavLink></li>
                <li><NavLink activeClassName="active--link" to="/create" className="text-white">Create Album</NavLink></li>
                <li><NavLink activeClassName="active--link" to="/contact" className="text-white">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <strong>Album</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar; 
