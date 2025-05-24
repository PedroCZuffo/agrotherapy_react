import React from "react";
import Testimonials from "../components/Testimonials";
import FeaturedProperties from "../components/FeaturedProperties";
import background_animals from "./../assets/images/background_animals.svg"

const Home = () => {
  return (
    <>
      {/* Seção Hero */}
      <main id="main-content" className="hero position-relative section-height mb-4" role="main">
        <img
          className="w-100 h-100 position-absolute object-fit-cover"
          src={background_animals}
          alt="Fundo decorativo com ilustrações de animais da fazenda"
          aria-hidden="true"
        />
        <div className="position-absolute w-100 h-100 bg-dark opacity-50" aria-hidden="true"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center position-relative">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-white">
              <p className="text-uppercase mb-4 letter-spacing">Transformamos vidas</p>
              <h1 className="display-4">Experiência única de desenvolvimento através do contato com a natureza</h1>
            </div>
            <div className="col-12 col-lg-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/v7Tf_qBM66c?controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                  title="Vídeo sobre terapias rurais para desenvolvimento infantil"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Seção de Depoimentos */}
      <Testimonials />

      {/* Seção de Propriedades em Destaque */}
      <FeaturedProperties />

    </>
  );
};

export default Home;
