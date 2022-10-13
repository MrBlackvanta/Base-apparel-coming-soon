import Details from "./components/Details";
import Hero from "./components/Hero";
import logo from "./images/logo.svg";
import Signature from "./components/Signature";
import "./App.scss";

function App() {
  const data = {
    logo: logo,
    heading: "We're coming soon",
    description:
      "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.",
  };

  return (
    <div>
      <main role="main">
        <Details />
        <Hero />
      </main>
      <Signature />
    </div>
  );
}

export default App;
