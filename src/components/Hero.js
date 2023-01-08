import hero from "../images/hero-desktop.jpg";
import heroPhone from "../images/hero-mobile.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src={window.innerWidth <= 1050 ? heroPhone : hero}
        alt="cute gril wearing orange shirt"
      />
    </div>
  );
}
