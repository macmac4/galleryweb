import getCollection from "../composables/getCollection";

const Hero = ({ searchAlbum, albumsAll }) => {
  return (
    <div className="py-4 text-center container">
      <div className="row">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Photo Album</h1>
          <p className="lead text-muted">
            Here you can collect yours photos. You can grouped by category, tags
            ...{" "}
          </p>

          <form className="d-flex">
            <div className="form-floating mb-3 search-bar">
              <input
                type="search"
                className="form-control me-2 search-bar--input"
                list="datalistOptions"
                id="floatingInput"
                placeholder="Type album title"
                onChange={searchAlbum}
              />
              <label htmlFor="floatingInput">Album Title</label>
              <datalist id="datalistOptions">
                {albumsAll &&
                  albumsAll.map((album) => {
                    return <option key={album.id} value={album.title} />;
                  })}
              </datalist>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
