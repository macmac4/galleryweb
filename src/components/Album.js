import { Link } from 'react-router-dom'

const Album = ({ title, description, imageUrl, createdAt, category, id }) => {

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

    <div className="col album">
      <div className="card shadow-sm">
        <div className="image-album">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-body">
          <p className="card-text fw-bold">{title}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary category-btn"><Link to={`albums/${category}`}>Category: {category}</Link></button>
              {/* TODO <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`album/${id}`}>User Album</Link></button> */}
              {/* TODO <button type="button" className="btn btn-sm btn-outline-secondary">Delete if user</button> */}
            </div>
            <small className="text-muted">{timeSince(createdAt.seconds * 1000)} ago</small>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Album;