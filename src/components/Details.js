import "./Details.scss";

export default function Details(props) {
  return (
    <div className="details">
      <img src={props.logo} alt="Base Apparel Logo" />
      <h1 className="details-heading">
        <span className="details-heading-1">{props.heading1}</span>
        <br />
        <span className="details-heading-2">{props.heading2}</span>
      </h1>
      <p className="details-description">{props.description}</p>
      <form className="form">
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
        />
        <button className="form-btn">
          <img src={props.arrow} alt="arrow icon" />
        </button>
      </form>
    </div>
  );
}
