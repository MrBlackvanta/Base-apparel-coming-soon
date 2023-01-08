import Logo from "./components/Logo";
import Details from "./components/Details";
import Hero from "./components/Hero";
import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow.svg";
import error from "./images/icon-error.svg";
import Signature from "./components/Signature";
import "./App.scss";

function App() {
  const data = {
    logo: logo,
    heading1: "We're",
    heading2: "coming soon",
    description:
      "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.",
    arrow: arrow,
    error: error,
  };

  return (
    <div>
      <main role="main" className="main">
        <div className="logo-container">
          {window.innerWidth <= 1050 ? <Logo logo={data.logo} /> : ""}
        </div>
        <Details
          logo={logo}
          heading1={data.heading1}
          heading2={data.heading2}
          description={data.description}
          arrow={arrow}
          error={error}
        />
        <Hero />
      </main>
      <Signature />
    </div>
  );
}

export default App;
