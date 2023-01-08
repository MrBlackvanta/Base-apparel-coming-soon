import hero from "../images/hero-desktop.jpg";
import "./Hero.scss";

export default function Hero(props) {
  return (
    <div className="hero">
      <img src={hero} alt="cute gril wearing orange shirt" />
    </div>
  );
}
