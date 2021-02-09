import AlbumDetails from './AlbumDetails';
import Sidebar from './Sidebar';
import Hero from './../views/Hero';

const GalleryList = () => {
  return (
    <>

      <Hero />

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-10 col-sm-9">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <AlbumDetails />
                <AlbumDetails />
                <AlbumDetails />
                <AlbumDetails />
                <AlbumDetails />
                <AlbumDetails />

              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <Sidebar />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}    

export default GalleryList;