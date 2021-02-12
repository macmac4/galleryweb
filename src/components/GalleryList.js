import Album from './Album';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Hero from './../views/Hero';
import getCollection from "../composables/getCollection"

const GalleryList = () => {
  const { name } = useParams();
  let [albumSearch, setAlbumSearch] = useState([]);
  let [tabSearch, setTabSearch] = useState(false);
  
  let { documents: albums, isPending, error }  = getCollection('albums', name);
  const { documents: albumsAll } = getCollection('albums');

  const searchAlbum = (e) => {
    if (e.target.value.length > 0) {
      setTabSearch(true);
      setAlbumSearch(albumsAll.filter( album => {
        return album.title.toLowerCase().includes(e.target.value.toLowerCase());
      }));
    } else {
      setTabSearch(false);
    }
  };

  useEffect(() => {
    if (!tabSearch) {
      setAlbumSearch(albums);
    }
  }, [tabSearch, albums]);
 
  return (
    <>
      <Hero searchAlbum={searchAlbum} albumsAll={albumsAll} />

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-10 col-sm-9">
              <h2 className="album-title">Album list {name && ` - ${name.toUpperCase()}`}</h2>
              <div className="row row-cols-1 row-cols-md-2 g-3">
                { 
                  isPending && <div className="spinner-border text-primary margin-center" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                }
                { 
                  albumSearch && albumSearch.map((album) => {
                    return (
                      <Album key={album.id} title={album.title} description={album.description} id={album.id} imageUrl={album.imageUrl} createdAt={album.createdAt} category={album.category} />
                    )
                  })
                }
                {
                  albumSearch.length === 0 && !isPending && <div className="alert alert-danger margin-center" role="alert">
                            Album not found!!!
                          </div>
                }
                {
                  error && <div className="alert alert-danger margin-center" role="alert">
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