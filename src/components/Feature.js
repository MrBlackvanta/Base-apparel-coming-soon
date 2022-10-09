import "./Feature.scss";

export default function Feature(props) {
  return (
    <article className={`feature ${props.className}`}>
      <h2 className="feature-heading">{props.heading}</h2>
      <p className="feature-description">{props.description}</p>
      <img src={props.icon} alt={props.alt} className="feature-icon" />
    </article>
  );
}
