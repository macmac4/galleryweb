import { useState } from 'react';
import useStorage from './../composables/useStorage';
import useCollection from './../composables/useCollection'
import { timestamp } from './../firebase/config'


const CreateAlbum = () => {
  const { uploadImage, error } = useStorage();
  const { addDoc } = useCollection('albums');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [listCategory, setListCategory] = useState(['casual', 'holiday', 'animal', 'people']);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      let tmpUrl = await uploadImage(file);
      const album = {title, description, category, imageUrl: tmpUrl, createdAt: timestamp() };

      const res = await addDoc(album);
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
      setFileError('Wron type of file.');
    }

  }

  return (
    <>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <form onSubmit={handleSubmit} className="php-email-form w-100">
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
                      listCategory && listCategory.map( (cat, index) => {
                        return (
                          <option key={index} value={cat}>{cat}</option>
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
                  />
                </div>
                <div className="mb-3 mt-3">
                  <div className="alert alert-danger mt-3" role="alert" > </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Create</button>
                  {/* <button v-if="!isPending" type="submit" className="btn btn-primary">Create</button>
                  <button v-else type="submit" className="btn btn-primary" disabled>Saving...</button> */}
                </div>
              </form>  

            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default CreateAlbum;