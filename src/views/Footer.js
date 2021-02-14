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
        <p className="mb-1">Photo Web Album - Here you can collect yours photos. You can gropued by category, tags ...</p>
        <p className="mb-0">
          Made by Maciej using Bootstrap ver 5.0 &nbsp; &nbsp; 
          <a href="https://getbootstrap.com/">Visit the homepage</a></p>
      </div>
    </footer>

  );
}
 
export default Footer;
