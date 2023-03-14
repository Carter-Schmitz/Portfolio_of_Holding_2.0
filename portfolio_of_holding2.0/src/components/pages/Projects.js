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
      "A frontend application to help users find and compile a list of movies to be watched at a later time",
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
    description: "A web application that utilizes weatherAPI to find current weather conditions in any city.",
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