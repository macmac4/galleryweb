import './App.css';
import NavBar from './components/NavBar';
import GalleryList from './components/GalleryList';
import Footer from './views/Footer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <GalleryList />
      </main>

      <Footer />
    </>
  );
}

export default App;
