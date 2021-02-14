import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import NavBar from './components/NavBar';
import GalleryList from './components/GalleryList';
import CreateAlbum from './components/CreateAlbum';
import Footer from './views/Footer';
import Contact from './views/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserAlbums from './components/UserAlbums';

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>

      <main>
        <Switch>
          <Route exact path="/" >
            <GalleryList />
          </Route>
          <Route path="/create" >
            <CreateAlbum />
          </Route>
          <Route path="/album/:id" >
            <UserAlbums />
          </Route>
          <Route path="/albums/:name" >
            <GalleryList />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
        </Switch>
      </main>

      <Footer />
    </Router>
  );
}

export default App;