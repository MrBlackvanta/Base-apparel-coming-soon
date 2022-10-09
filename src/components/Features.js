import Feature from "./Feature";
import "./Features.scss";

export default function Features(props) {
  return (
    <section className="features">
      {props.cards.map((card, index) => {
        return (
          <Feature
            heading={card.heading}
            description={card.description}
            icon={card.icon}
            alt={card.alt}
            className={`card--${index + 1}`}
          />
        );
      })}
    </section>
  );
}
