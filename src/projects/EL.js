import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/styles_sub.css';
import styles1 from './../styles/styles_sub.css';

function EL() {
  return (
<div className={styles1.body2} id='body2'>
      {/* Page Head */}
      {/* Encoding */}
      <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Site Tab Title */}
      <title> EL </title>
      {/* External Links */}
      <link rel="stylesheet" href="styles.css" />
      {/* Body */}
      {/* Fade Out Overlay */}
      <div className="overlay" id="overlay" />
      {/* Page Title */}
      {/* Header */}
      <header id="header">
          <Link to="/">
            <button id="gs-btn">GS</button>
          </Link>        
        </header>
      {/* Main */}
      <main>
        <div className="container">
          {/* Top Grid */}
          <div className="grid-1">
            {/* Section | S9 */}
            <section id="title">
              <h1> EyeLearn </h1>
            </section>
            {/* Section | Brief */}
            <section className="section" id="brief">
              <h3> Description: <p> (Date of origin: 05/2017) </p> </h3>
              <h4> ⚠ This project has been discontinued as of: 12/2017. ⚠ </h4>
              EyeLearn was a project that began as a school project I had during some of my years in college. In the class, it was a innovation class where you would learn about design prinicples and how to apply them to real world problems and near the end of the class
              we had to come up with a project as a team and document the process like an intiial design proposal. We as a team focused
              on the idea of helping student enage more in class and came up with a headset integrated with the technology of augemented reality 
              and of virtual reality. 
              <br />
              <br />
              The idea was to allow the student to use the headset like a normal pair of glasses and view the lecture
              but then if the student wanted further understanding or seek clarification on the material, they could use the headset
              concurrently in the lecture to seek further resources and assistance with this material containing engange media (videos, images, etc).
              that would allow the student an increased level of comprehension of the material without skipping a beat. 
              <br />
              <br />
              The project unfortunately came to an end 
              as the assignment ended and was no more than a concept as a group we didnt have the technical competency to make it a reality and despite efforts
              of trying to continue the project during the summer, it ended up being no more than an idea due to other priorities and lack of knowledge.
            </section>
          </div>
          {/* Mid Grid */}
          <div className="grid-2">
            <section className="section" id="background">
              <h3> Background: </h3>
              The reason we came up with this idea was kind more influenced by our environment at the time. This was started in 2017 and in the
              world of tech at that time, we were starting to see breakthroughs in VR technology with the Oculus Rift and the HTC Vive. As students,
              there were a lot of typical problems that other groups in the class were focusing on (parking....my god, 4 out of the like 10 teams or so 
              did something about parking lol) and so we wanted to do something that was more geared towards a different area where no one was looking 
              and the only we had to do was to see that our other classmates were more engaged than others when starting the assignment. Then we were off.
            </section>  
            <section className="section" id="concept">
              <h3> Concept: </h3>
              Core: 
              <li> </li>
              Sub: 
              <li> </li>
            </section>  
          </div> 
        </div>
      </main>
      {/* Footer */}
      <footer> 
        {/* Copyright */}
        <div className="graphic">
          <p> © 2025 Grayden Scovil </p> 
          </div>
          {/* Love Note */}
          <div className="love-note">
            <p> 
              Made with 
              <svg version="{1.0}" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" width="23px" height="13px" viewBox="0 0 64 64" enablebackground="new 0 0 64 64" xmlspace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokewidth="{0}" /><g id="SVGRepo_tracerCarrier" strokelinecap="round" strokelinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M47.977,5.99c-4.416,0-8.414,1.792-11.308,4.686l-4.685,4.654l-4.686-4.654 C24.406,7.782,20.408,5.99,15.992,5.99C7.161,5.99,0,13.15,0,21.982c0,4.416,2.85,8.539,5.747,11.432l23.41,23.414 c1.562,1.562,4.092,1.562,5.653,0l23.349-23.352c2.896-2.893,5.81-7.078,5.81-11.494C63.969,13.15,56.808,5.99,47.977,5.99z" /> </g></svg>
            </p>
          </div>  
      </footer>
    </div>
  );
}

export default EL;
