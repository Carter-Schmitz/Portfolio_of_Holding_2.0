import React from "react";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    width: "30vw",
    height: "30vw",
    marginLeft: "25px",
    background: "transparent",
    borderRadius: "25px"
  },
  orientation: {
    
  },
  image: {
    width: "30vw",
    justifyContent: "center",
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    fontSize: "100%",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
    borderRadius: "20px 20px 0px 0px"
  },
  content: {
    padding: 20,
    color: "white",
    background: "#3f51b5",
    fontSize: "80%",
    borderRadius: "0px 0px 20px 20px"
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
