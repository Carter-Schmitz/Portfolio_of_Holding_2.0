import React from "react";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    width: "50vw",
    marginBottom: "25px",
    background: "#e8eaf6",
  },
  image: {
    width: "50vw",
    justifyContent: "center",
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5, //line-height
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center"
  },
  content: {
    padding: 20,
    color: "white",
    background: "#3f51b5",
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card(props) {
  return props.projects.map((project) => (
    <a href={project.link}>
      <div style={styles.card}>
        <div style={styles.heading}>{project.name}</div>
        <img style={styles.image} src={project.image} alt={project.name}></img>
        <div style={styles.content}>{project.description}</div>
      </div>
    </a>
  ));
}

export default Card;
