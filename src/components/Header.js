import "./Header.scss";

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="header-heading">
        <span className="header-heading-1">{props.heading}</span>
        <br />
        <span className="header-heading-2">{props.subHeading}</span>
      </h1>
      <p className="header-description">{props.description}</p>
    </header>
  );
}
