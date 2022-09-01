import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lillskrot</title>
        <meta
          name="description"
          content="Start your development with LeadMark landing page."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Leo Taube" />
      </Head>

      <nav
        className="navbar custom-navbar navbar-expand-md navbar-light fixed-top"
        data-spy="affix"
        data-offset-top="10"
      >
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="overlay">
          <h1 className="subtitle">3D unity assets, by</h1>
          <h1 className="title">Lillskrot</h1>
        </div>
        <div className="shape">
          <svg viewBox="0 0 1500 200">
            <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
          </svg>
        </div>
      </header>

      <section id="service" className="section pt-0">
        <div className="container">
          <h6 className="section-title text-center">Download</h6>
          <h6 className="section-subtitle text-center mb-5 pb-3">
            You are free to use my assets however you want.
          </h6>

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <small className="text-primary font-weight-bold">01</small>
                  <a
                    className="downloadButton"
                    href="https://assetstore.unity.com"
                    target="new"
                  >
                    Download
                  </a>
                  <h5 className="card-title mt-3">3d room</h5>
                  <p className="mb-0">
                    A small room with 3d props and furniture.
                  </p>
                  <img
                    className="responsive"
                    src="/imgs/300x300.png"
                    alt="300x300.png"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <small className="text-primary font-weight-bold">02</small>
                  <a
                    className="downloadButton"
                    href="https://assetstore.unity.com"
                    target="new"
                  >
                    Download
                  </a>
                  <h5 className="card-title mt-3">Copyright</h5>
                  <p className="mb-0">My asset.</p>
                  <img
                    className="responsive"
                    src="/imgs/300x300.png"
                    alt="300x300.png"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <small className="text-primary font-weight-bold">03</small>
                  <a
                    className="downloadButton"
                    href="https://assetstore.unity.com"
                    target="new"
                  >
                    Download
                  </a>
                  <h5 className="card-title mt-3">Itaque harum</h5>
                  <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                  <img
                    className="responsive"
                    src="/imgs/300x300.png"
                    alt="300x300.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
