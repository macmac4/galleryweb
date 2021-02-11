import { Link } from 'react-router-dom';
import GetCollection from '../composables/getCollection';

const Sidebar = () => {
  const { documents: listCategory } = GetCollection('category');

  return ( 
    <>
      <h2>Category</h2>
      <nav className="nav flex-column category-list">
      <Link className="nav-link" to="/">All Category</Link>
      { 
        listCategory && listCategory.map( (cat) => {
          return (
            <Link className="nav-link" key={cat.id} to={`/albums/${cat.name}`}>{cat.name}</Link>
          );
        })
      }
      </nav>
    </>

  );
}
 
export default Sidebar;