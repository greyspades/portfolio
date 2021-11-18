import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import Front from '../components/front'
import Services from '../components/services'
import Slider from '../components/slider'
import {Grid,Paper,Divider} from '@material-ui/core'





export default function Home() {
  return (
    <div className=''>
       <Head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
  <title>Dev by Grey</title>
  {/*
Reflux Template
https://templatemo.com/tm-531-reflux
*/}
  {/* Bootstrap core CSS */}
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Additional CSS Files */}
  <link rel="stylesheet" href="assets/css/fontawesome.css" />
  <link rel="stylesheet" href="assets/css/templatemo-style.css" />
  <link rel="stylesheet" href="assets/css/owl.css" />
  <link rel="stylesheet" href="assets/css/lightbox.css" />
</Head>


<div id="page-wraper">
  {/* Sidebar Menu */}
  
<Sidebar />

  <section className="section about-me" data-section="section1">
    <div className="containe">
     

      {/* <div>
        <Front />
      </div>

      <div>
        <Slider />
      </div> */}

      {/* <div className="right-image-post">
        <div className="row">
          <div className="col-md-6">
            <div className="left-text">
              <h4>Sed sagittis rhoncus velit</h4>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum fermentum
                eleifend nibh, vitae sodales elit finibus pretium.
                Suspendisse potenti. Ut sollicitudin risus a sollicitudin
                semper.
              </p>
              <div className="white-button">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src="assets/images/right-image.jpg" alt />
            </div>
          </div>
        </div>
      </div> */}
      
    </div>
  </section>

  <section>
    <Services />
  </section>
  
  <section className="section my-work" data-section="section3">
    <div className="container">
      <div className="section-heading">
        <h2>My Work</h2>
        <div className="line-dec" />
        <span>Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
          amet. Duis ac elit vulputate, lobortis arcu quis, vehicula
          mauris.</span>
      </div>
      <div className="row">
        <div className="isotope-wrapper">
          <form className="isotope-toolbar">
            <label><input type="radio" data-type="*" defaultChecked name="isotope-filter" />
              <span>all</span></label>
            <label><input type="radio" data-type="people" name="isotope-filter" />
              <span>people</span></label>
            <label><input type="radio" data-type="nature" name="isotope-filter" />
              <span>nature</span></label>
            <label><input type="radio" data-type="animals" name="isotope-filter" />
              <span>animals</span></label>
          </form>
          <div className="isotope-box">
            <div className="isotope-item" data-type="nature">
              <figure className="snip1321">
                <img src="assets/images/portfolio-01.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="assets/images/portfolio-01.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>First Title</h4>
                  <span>free to use our template</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="people">
              <figure className="snip1321">
                <img src="assets/images/portfolio-02.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="assets/images/portfolio-02.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Second Title</h4>
                  <span>please tell your friends</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="animals">
              <figure className="snip1321">
                <img src="assets/images/portfolio-03.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="assets/images/portfolio-03.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Item Third</h4>
                  <span>customize anything</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="people">
              <figure className="snip1321">
                <img src="assets/images/portfolio-04.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="assets/images/portfolio-04.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Item Fourth</h4>
                  <span>Re-distribution not allowed</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="nature">
              <figure className="snip1321">
                <img src="assets/images/portfolio-05.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="assets/images/portfolio-05.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Fifth Awesome</h4>
                  <span>Ut sollicitudin risus</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="animals">
              <figure className="snip1321">
                <img src="assets/images/portfolio-06.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="assets/images/portfolio-06.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Awesome Sixth</h4>
                  <span>Donec eget massa ante</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section contact-me" data-section="section4">
    <div className="container">
      <div className="section-heading">
        <h2>Contact Me</h2>
        <div className="line-dec" />
        <span>Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
          efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className="row">
        <div className="right-content">
          <div className="container">
            <form id="contact" action method="post">
              <div className="row">
                <div className="col-md-6">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" placeholder="Your email..." required />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required defaultValue={""} />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </div>
  )
}
