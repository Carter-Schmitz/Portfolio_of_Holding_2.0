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
];

export default function Projects() {
  return (
    <div>
      <Card projects={projects}></Card>
    </div>
  );
}