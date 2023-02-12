import "./Disclaimer.css";

const Disclaimer = () => {
  const handlerClick = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div className="disclaimer-container">
      <footer className="footer-container">
        <p>
          Thanks for using this app. This is is very easy to use just put a word
          a click on search and you will find the best Chuck Norris meme create
          by the community or click in the Generate Random Phrase it show you a
          random meme
        </p>
        <button
          className="twitter-button"
          onClick={(e) => handlerClick(e, "https://twitter.com/Alex_Buelvas92")}
        >
          Twitter
          <img
            className="twitter-logo"
            src="https://i.imgur.com/EePWHT2.png"
            alt="Logo button"
          />
        </button>
        <button
          className="instagram-button"
          onClick={(e) =>
            handlerClick(e, "https://www.instagram.com/alex_buelvas/")
          }
        >
          Instagram
          <img
            className="instagram-logo"
            src="https://i.imgur.com/HjU8Afb.png"
            alt="Logo button"
          />
        </button>
        <button
          className="github-button"
          onClick={(e) => handlerClick(e, "https://github.com/TzzJokerzzT")}
        >
          Github
          <img
            className="github-logo"
            src="https://i.imgur.com/KpcNn1j.png"
            alt="Logo button"
          />
        </button>
        <p>You can Search information about the API en the below here:</p>
        <a
          className="logo-api"
          href="https://api.chucknorris.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
            alt="API Logo"
          />
        </a>
        {/* <button
          className="api-button
        "
          onClick={(e) => handlerClick(e, "https://api.chucknorris.io/")}
        >
          Test
        </button> */}
        <p>
          Legal disclaimer: This website and its creators are not affiliated
          with Chuck Norris, any motion picture corporation, any television
          corporation, parent, or affiliate corporation. All motion pictures,
          products, and brands mentioned on this website are the respective
          trademarks and copyrights of their owners. All material on this
          website is intended for humorous entertainment (satire ) purposes
          only. The content on this website is not necessarily true and should
          not be regarded as truth.
        </p>
      </footer>
    </div>
  );
};

export default Disclaimer;
