import React from "react";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    width: "25vw",
    height: "50vw",
    marginLeft: "25px",
    background: "transparent",
    display: "flex",
    flexDirection: "row"
  },
  orientation: {
    
  },
  image: {
    width: "25vw",
    justifyContent: "center",
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
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
      <div style={styles.card}>
      <a href={project.link} style={styles.orientation}>
        <div style={styles.heading}>{project.name}</div>
        <img style={styles.image} src={project.image} alt={project.name}></img>
        <div style={styles.content}>{project.description}</div>
        </a>
      </div>
  ));
}

export default Card;
