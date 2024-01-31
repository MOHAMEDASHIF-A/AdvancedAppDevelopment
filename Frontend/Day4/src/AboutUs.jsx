// AboutUs.js

import React from 'react';
import './AboutUs.css';
import NavigationBar from './Navigation';

const AboutUs = () => {
  return (
    <div className="body-cont">
    <NavigationBar/>
    <div className="extended-about-container">
      <h2>Welcome to Our University</h2>
      <p>
        Discover a transformative educational experience at our university, where we are dedicated to nurturing
        inquisitive minds and fostering a community of lifelong learners.
      </p>
      <p>
        Our commitment to academic excellence extends beyond the classroom. Engage in groundbreaking research,
        collaborate with renowned faculty, and explore your intellectual curiosity in a supportive environment.
      </p>
      <p>
        Immerse yourself in our rich tapestry of academic disciplines, from science and technology to the arts and humanities.
        Our diverse programs cater to a broad spectrum of interests and aspirations.
      </p>
      <p>
        Beyond academics, our campus comes alive with a dynamic blend of cultural events, sports, and extracurricular activities.
        Build lasting friendships, develop leadership skills, and make the most of your university experience.
      </p>
      <p>
        As you embark on your educational journey with us, envision a future where your passions converge with purpose,
        leading to personal growth and societal impact.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
