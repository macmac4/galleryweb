const Hero = () => {
  return ( 

    <div className="py-4 text-center container">
      <div className="row">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Photo Album</h1>
          <p className="lead text-muted">Here you can collect yours photos. You can gropued by category, tags ... </p>
          {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p> */}

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>

   );
}
 
export default Hero;