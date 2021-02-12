const Contact = () => {

  return ( 

    <section id="contact" className="contact section-bg">
      <div className="container text-center">

        <div className="section-title">
          <h2 className="my-4">Contact</h2>
        </div>

        <div className="row">

          <div className="col-lg-12">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box" data-aos="fade-up">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>Marszałkowska 6, Warszawa, w-wa 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

  );
}
 
export default Contact;