import React from 'react';


export default function Contact() {
  return (
    <div className='contactForm'>
      <h1 className='contactForm'>Contact Me</h1>
      <form className='contactForm' action="mailto:carterschmitz95@gmail.com" method="post" enctype="text/plain">
        <input className='contactForm' type="text" id="name" placeholder='Your Name' required></input>
        <input className='contactForm' type="email" id="email" placeholder='Your Email' required></input>
        <input className='contactForm' type="text" id="message" placeholder='Your Message Here' required></input>
        <input className='contactForm' type="submit" value="Send"></input>
      </form>
    </div>
  );
}