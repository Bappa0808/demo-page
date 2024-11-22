import React, { useState } from 'react';
import "../component/About.css";
import M1 from "../img/M1.png"
import M2 from "../img/M2.png"
import M3 from "../img/M3.png"
import M4 from "../img/M4.png"
import M5 from "../img/M5.png"
import M6 from "../img/M6.jpg"
import M7 from "../img/M7.webp"
import M8 from "../img/M8.jpg"
import E1 from '../img/E1.png'
import E2 from '../img/E2.png'
import E3 from '../img/E3.png'


export const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='total_div'>
      <nav>
        <div className='logo'>P A H A D I</div>
        <div className='hamburger' onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`Nav_items ${menuOpen ? 'active' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li> 
          <li>Gallery</li>
          <li>Contact</li>
          <li>Reserve</li>
        </ul>
      </nav>
      <div  className='about_section'>
        <h3>About</h3>
        <div className='about_us'>
            <p className='about_us_heading'>The Restaurant</p>
            <p className='about_us_p'>Welcome to Pahadi, a unique dining experience that brings the serene beauty and flavors of hilly regions. Our restaurant is a celebration of mountain culture, offering not just delicious food but a warm, rustic ambiance that transports you to the peaceful hills. Whether you're looking to escape the city buzz or relive the nostalgia of mountain retreats, Pahadi is your perfect getaway in the midst of mountains.</p>
        </div>
      </div>
      <div className='our_story'>
        <div className='our_story_img'></div>
        <div>
            <p className='our_story_heading'>Our Story</p>
            <p className='our_story_subtitle'>Pahadi was inspired by the breathtaking landscapes and rich culinary traditions of the Indian Himalayas. Growing up surrounded by the beauty of mountain towns like hilly regions, we always dreamt of sharing those experiences with others. Our journey began with the desire to create a space that would not only serve the authentic flavors of these regions but also capture their essence—peaceful, cozy, and full of warmth. After years of planning and refining our vision, we brought Pahadi to life, blending mountain heritage with modern dining.</p>
        </div>
      </div>

      <div className="Cultural_Highlights">
  <p>Cultural Highlights</p>
</div>
<div className="Slide_show">
  <div className="images">
    <img src={M1} alt='img'></img>
    <img src={M2} alt='img'></img>
    <img src={M3} alt='img'></img>
    <img src={M4} alt='img'></img>
    <img src={M5} alt='img'></img>
    <img src={M6} alt='img'></img>
    <img src={M7} alt='img'></img>
    <img src={M8} alt='img'></img>
  </div>
</div>
<div className="ellipse top_ellipse"></div>
<div className="ellipse bottom_ellipse"></div>

<div className='Explore_Pahadi_Delicacies'>
    <p>Explore Pahadi Delicacies ●</p>
    <p>Explore Pahadi Delicacies ●</p>
    <p>Explore Pahadi Delicacies ●</p>
    <p>Explore Pahadi Delicacies ●</p>
    <p>Explore Pahadi Delicacies ●</p>
    <p>Explore Pahadi Delicacies ●</p>
    <p>Explore Pahadi Delicacies ●</p>
</div>

<hr/>
<div className="Food_items">
  <div className='Food_items_name'>
    <p>Nepali Delicacy</p>
  </div>
  <div>
    <img src={E1} width={250} alt="Nepali Delicacy"></img>
  </div>
</div>
<hr/>
<div className="Food_items">
  <div className='Food_items_name'>
    <p>Kashmiri Delicacy</p>
  </div>
  <div>
    <img src={E2} width={250} alt="Kashmiri Delicacy"></img>
  </div>
</div>
<hr/>
<div className="Food_items">
  <div className='Food_items_name'>
    <p>North-East Indian Delicacy</p>
  </div>
  <div>
    <img src={E3} width={250} alt="North-East Indian Delicacy"></img>
  </div>
</div>
<hr/>

    </div>
  );
};
