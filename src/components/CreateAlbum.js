const CreateAlbum = () => {

  return (
    <>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <form className="php-email-form w-100">
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    v-model="filmTitle"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    placeholder="description"
                    v-model="filmDescription"
                    required
                  ></textarea>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="link to film"
                    v-model="filmLink"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <select
                    className="form-control"
                    aria-label=".form-select-lg example"
                    v-model="filmCategory"
                    required
                  >
                    <option>choose category</option>
                      <option></option>
                    </select>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="file"
                    className="form-control"
                  />
                </div>
                <div className="form-check mt-3">
                  <input className="form-check-input" type="checkbox" v-model="filmFirstPage" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    First Page
                  </label>
                </div>
                <div className="mb-3 mt-3">
                  <div className="alert alert-danger mt-3" role="alert" > </div>
                </div>
                <div className="text-center">
                  <button v-if="!isPending" type="submit" className="btn btn-primary">Create</button>
                  <button v-else type="submit" className="btn btn-primary" disabled>Saving...</button>
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