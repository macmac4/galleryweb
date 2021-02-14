import { useState } from 'react';
import { Link } from 'react-router-dom'
import useStorage from './../composables/useStorage';
import useCollection from './../composables/useCollection'
import { timestamp } from './../firebase/config'
import GetCollection from '../composables/getCollection';


const CreateAlbum = () => {
  const { uploadImage } = useStorage();
  const { error, addDoc } = useCollection('albums');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [filmID, setFilmID] = useState(null);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [statusSubmit, setStatusSubmit] = useState(false);
  const { documents: listCategory } = GetCollection('category');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      setIsPending(true);
      setStatusSubmit(false);

      let tmpUrl = await uploadImage(file);
      const album = {title, description, category, imageUrl: tmpUrl, createdAt: timestamp() };
      const res = await addDoc(album);
      setIsPending(false);

      if (!error) {
        setFilmID(res.id);
        setStatusSubmit(true);
        console.log('add album')
      }
    }
  }

  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const handleChange = async (e) => {
    const selected = e.target.files[0]

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setFileError(null);
    } else {
      setFile(null);
      setFileError('Wrong type of file.');
    }

  }

  return (
    <>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="row justify-content-center row-cols-1 g-3">
              { !statusSubmit && 
                <div className="box-form col-lg-6">
                  <h2>Create New Album</h2>
                  <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value) }
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        placeholder="description"
                        value={description}
                        onChange={ (e) => setDescription(e.target.value) }
                        required
                      ></textarea>
                    </div>
                    <div className="form-group mt-3">
                      <select
                        className="form-control"
                        aria-label=".form-select-lg example"
                        value={category}
                        onChange={ (e) => setCategory(e.target.value) }
                        required
                      >
                        <option value="">choose category</option>
                        { 
                          listCategory && listCategory.map( (cat) => {
                            return (
                              <option key={cat.id} value={cat.name}>{cat.name}</option>
                            );
                          })
                        }
                      </select>
                    </div>

                    <div className="form-group mt-3">
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <span class="badge bg-danger">
                        All above field are required.
                      </span>
                    </div>
                    <div className="mb-3 mt-3">
                      { fileError !== null && <div className="alert alert-danger mt-3" role="alert"> {fileError} </div> }
                    </div>
                    <div className="text-center">
                      { !isPending && <button type="submit" className="btn btn-primary">Create</button> }
                      { isPending && <button type="submit" className="btn btn-primary" disabled>Saving...</button> }
                    </div>
                  </form>  
                </div>
              }
              { statusSubmit && 
                 <div className="mb-3">
                  <div className="alert alert-success mt-3" role="alert"> 
                    <p>Correctly created album</p> 
                    <Link to="/">Show albums</Link>
                  </div>
              </div> 
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default CreateAlbum;