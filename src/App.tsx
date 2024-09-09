import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <nav className="menu-bar">
        <ul>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#descricao">Descrição</a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="image-column">
          <img
            src="https://st2.depositphotos.com/1146092/9591/i/600/depositphotos_95915460-stock-photo-smart-dog-isolated-on-black.jpg"
            alt="Seu nome"
            className="profile-image"
          />
        </div>
        <div className="text-column">
          <h1>Seu nome</h1>
          <p>
            Coloque aqui sua biografia de forma resumida. Coloque aqui sua
            biografia de forma resumida. Coloque aqui sua biografia de forma
            resumida. Coloque aqui sua biografia de forma resumida.
          </p>
        </div>
      </header>
      <div className="blog-column">
        <section className="blog-section">
          <h2>Últimas do blog</h2>
          <ul>
            <li>
              <a href="/">5 dicas para sua carreira profissional</a>
              <p>
                Confira algumas dicas que podem ajudar a alavancar sua carreira
                como desenvolvedor front-end
              </p>
            </li>
            <li>
              <a href="/">5 dicas para sua carreira profissional</a>
              <p>
                Confira algumas dicas que podem ajudar a alavancar sua carreira
                como desenvolvedor front-end
              </p>
            </li>
            <li>
              <a href="/">5 dicas para sua carreira profissional</a>
              <p>
                Confira algumas dicas que podem ajudar a alavancar sua carreira
                como desenvolvedor front-end
              </p>
            </li>
          </ul>
          <a href="/" className="see-all">
            Ver tudo
          </a>
        </section>
      </div>
    </div>
  );
};

export default App;
