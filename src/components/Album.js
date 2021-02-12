import { projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { timestamp } from './../firebase/config';
import useComments from './../composables/useComments';
// import getComments from './../composables/getComments';

const Album = ({ title, description, imageUrl, createdAt, category, id }) => {

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    
    if (seconds === 0) {
      return " added now";

    }
    return Math.floor(seconds) + " seconds ago";
  };

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const { error, addComment } = useComments('comments', id);
  // const { comments } = getComments('comments', id);


  useEffect(() => {
    if (id) {
      projectFirestore
        .collection('albums')
        .doc(id)
        .collection('comments')
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
          setComments(
            snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
    }
  }, [id]);

  const postComment = async (e) => {
    e.preventDefault();

    const cmm = {text: comment, createdAt: timestamp()}
    const res = await addComment(cmm);

    if (!error) {
      console.log(res.id);
      console.log('add comment')
    }

    setComment('');
  };

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
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary category-btn"
              >
                <Link to={`/albums/${category}`}>Category: {category}</Link>
              </button>
              {/* TODO <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={`album/${id}`}>User Album</Link></button> */}
              {/* TODO <button type="button" className="btn btn-sm btn-outline-secondary">Delete if user</button> */}
            </div>
            <small className="text-muted text-center small-font">
              <b>created</b> <br />
              {createdAt.toDate().toDateString()}
            </small>
          </div>
          <div className="comments-list">
            {
              comments && comments.map((comment) => {
                return (
                  <p key={comment.id}><strong>{comment.createdAt && timeSince(comment.createdAt.seconds * 1000)} </strong>{comment.text}</p>
                )
              })
            }
          </div>
        </div>

        <div className="comments-section">
          <form>
            <div className="input-group comments-group">
              <input
                type="text"
                className="form-control comments-group--input"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary comments-group--button"
                type="button"
                id="button-addon2"
                onClick={postComment}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Album;
