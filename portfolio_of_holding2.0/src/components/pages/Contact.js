import React from 'react';


export default function Contact() {
  return (
    <div className='contactForm'>
      <h1 className='contactForm'>Contact Me</h1>
      <form className='contactForm' action="mailto:carterschmitz95@gmail.com" method="post" enctype="text/plain">
        <label> Name: </label>
        <input className='contactForm' type="text" id="name"></input>
        <label> Email: </label>
        <input className='contactForm' type="email" id="email"></input>
        <label> Your Message Here: </label>
        <input className='contactForm' type="text" id="message" ></input>
        <input className='contactForm' type="submit" value="Send"></input>
      </form>
    </div>
  );
}