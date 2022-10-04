import type { NextPage } from 'next';

const Home: NextPage = () => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div>
        <p className='title page-title'>Bienvenidos</p>
        <p className="subtitle">
          Este sitio ayuda en la busqueda de usuarios y repositorios publicos de github.
        </p>
      </div>
      <figure className='image is-centered' style={{ maxWidth: 500 }}>
        <img src={'https://github.githubassets.com/images/modules/logos_page/Octocat.png'} />
      </figure>
    </div>
  </section >
);

export default Home;
