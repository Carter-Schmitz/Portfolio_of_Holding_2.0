import React from "react";
import Card from "../Card";

const projects = [
  {
    id: 1,
    name: "Movie Night In",
    link: "https://carter-schmitz.github.io/Movie-Night-In/",
    image:
      "https://user-images.githubusercontent.com/113850230/204416267-76bb1544-5850-4237-83e9-e77f4edeb89d.PNG",
    description:
      "A frontend application to help users find movies",
  },
  {
    id: 2,
    name: "Did I Take That",
    link: "https://did-i-take-that.herokuapp.com/login",
    image:
      "https://carter-schmitz.github.io/Portfolio-of-holding/assets/DidITakeThat.jpeg",
    description: "A full stack web application to enter and track medications.",
  },
  {
    id: 3,
    name: "Technically True",
    link: "https://technically-true.herokuapp.com/",
    image:
      "https://user-images.githubusercontent.com/113850230/224882768-8c8cc731-a2c2-4f80-a38f-b4b7aecd2a5c.PNG",
    description: "A fully functonal tech blog that utilizes sessions and authentication criteria.",
  },
  {
    id: 4,
    name: "How's the weather up there",
    link: "https://carter-schmitz.github.io/Hows-the-weather-up-there/",
    image:
      "https://user-images.githubusercontent.com/113850230/202354140-330fb46f-7dfa-49c2-ad74-3166bb565c6b.PNG",
    description: "An application that utilizes weatherAPI to find current weather conditions.",
  },
  {
    id: 5,
    name: "Organization Umbrella Tracker",
    link: "https://github.com/Carter-Schmitz/Organization_Umbrella_Tracker",
    image:
      "https://user-images.githubusercontent.com/113850230/224887877-14762c93-014c-459a-8c82-5ada4915c8c9.PNG",
    description: "A command line interface to manage and view data about employees in an organization",
  },
  {
    id: 6,
    name: "Team Tracker",
    link: "https://github.com/Carter-Schmitz/Team_Tracker",
    image:
      "https://user-images.githubusercontent.com/113850230/224888624-c776d5bd-3004-4865-bba0-62a59fd53a96.PNG",
    description: "A tool to enter information about your development team and generate a web page",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="header"> My Work So Far</h1>
      <div className="projects">
      <Card projects={projects} className="projects"></Card>
      </div>
    </div>
  );
}