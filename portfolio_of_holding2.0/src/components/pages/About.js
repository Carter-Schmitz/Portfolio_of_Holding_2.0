import React from 'react';
import Profile from "../../assets/Profile.jpg"

export default function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <img src={Profile} alt="One Handsome Devil"></img>
      <p>Full-Stack Web Developer. Proficient with the most current technologies used to build web based applications. </p>
        <p>Always a team player, I have worked with dozens of separate groups over the years. On projects with as few as
            3 people, to a group of 30. I understand the nuances and challenging dynamics that can come with working
            within a team. And I excel in that particular field. Every member of a team has something they can
            contribute, and if you like the work you see, I hope to be a part of your team very soon.</p>
    </div>
  );
}