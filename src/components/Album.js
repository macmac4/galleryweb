import { Link } from 'react-router-dom'

const Album = ({ title, description, imageUrl, createdAt, id }) => {

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  return (

    <div className="col">
      <div className="card shadow-sm">
        {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
        <img src={imageUrl} alt="" />
        <div className="card-body">
          <p className="card-text fw-bold">{title}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`album/${id}`}>User Album</Link></button>
              {/* <button type="button" className="btn btn-sm btn-outline-secondary">Delete if user</button> */}
            </div>
            <small className="text-muted">{timeSince(createdAt.seconds * 1000)} ago</small>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Album;