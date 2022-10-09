import supervisor from "./images/icon-supervisor.svg";
import teamBuilder from "./images/icon-team-builder.svg";
import karma from "./images/icon-karma.svg";
import calculator from "./images/icon-calculator.svg";
import Header from "./components/Header";
import Features from "./components/Features";
import Signature from "./components/Signature";
import "./App.scss";

function App() {
  const data = {
    heading: "Reliable, efficient delivery",
    subHeading: "Powered by Technology",
    description:
      "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful",
    cards: [
      {
        heading: "Supervisor",
        description: "Monitors activity to identify project roadblocks",
        icon: supervisor,
        alt: "Magnifying glass with a blue eye in it.",
      },
      {
        heading: "Team Builder",
        description:
          "Scans our talent network to create the optimal team for your project",
        icon: teamBuilder,
        alt: "Red house with a page on the background",
      },
      {
        heading: "Karma",
        description: "Regularly evaluates our talent to ensure quality",
        icon: karma,
        alt: "Yellow lightened bulb with a gear in it",
      },
      {
        heading: "Calculator",
        description:
          "Uses data from past projects to provide better delivery estimates",
        icon: calculator,
        alt: "Monitor with blue circle and text",
      },
    ],
  };

  return (
    <div>
      <Header
        heading={data.heading}
        subHeading={data.subHeading}
        description={data.description}
      />
      <Features cards={data.cards} />
      <Signature />
    </div>
  );
}

export default App;
