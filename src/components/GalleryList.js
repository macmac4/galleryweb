import Album from './Album';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Hero from './../views/Hero';
import getCollection from "../composables/getCollection"

const GalleryList = () => {
  const { name } = useParams();
  // let name = 'animal';
  // let name = '';
  console.log(name);

  const { documents: albums, isPending, error }  = (() => {
    if (name) {
      return (
        getCollection(
          'albums',
          ['category', '==', name]
        )
      )
    } else {
      return getCollection('albums');
    }
  })();

  return (
    <>
      <Hero />

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-10 col-sm-9">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                { 
                  isPending && <div className="spinner-border text-primary text-center" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                }
                { 
                  albums && albums.map((album, id) => {
                    return (
                      <Album key={album.id} title={album.title} description={album.description} id={id} imageUrl={album.imageUrl} createdAt={album.createdAt} category={album.category} />
                    )
                  })
                }
                {
                  error && <div className="alert alert-danger" role="alert">
                            { error }
                          </div>
                }

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