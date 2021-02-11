const Footer = () => {
  const handleTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return ( 

    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <button className="button-top" onClick={handleTop}>Top</button>
        </p>
        <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
      </div>
    </footer>

  );
}
 
export default Footer;

