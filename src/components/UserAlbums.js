import { useParams } from 'react-router-dom';

const UserAlbums = ({ title, description }) => {
  const { id } = useParams();
  return (

    <div className="col">
      <div className="card shadow-sm">
        TODO: Here will be all user albums!!!  { id }      
      </div>
    </div>

  );
}

export default UserAlbums;