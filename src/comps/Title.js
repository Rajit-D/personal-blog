import React from 'react';
import logo from '../pfp.jpeg'
const Title = () => {
  return (
    <div className="title">
      <h1>Gratiano's</h1>
      <div className="contents">
        <div className="profile-pic">
          <img src={logo} alt="" style={{ borderRadius: '50%' }} />
        </div>
        <div className="about">
          <h3>Hi! This is Rajit Dutta.</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo laborum quo dignissimos exercitationem dolorum atque illo necessitatibus ea temporibus est libero corrupti, eveniet impedit labore vero fugit. Saepe, doloremque eaque, consectetur vitae nimos nobis adipisci enim voluptatum .  </p> */}
          <p style={{ margin: '0px', fontSize: '14px' }}>Front-end Web Developer <i className="fa-solid fa-laptop"></i></p>
          <p style={{ margin: '0px', fontSize: '14px' }}>Football fan <i className="fa-regular fa-futbol"></i></p>
          <p style={{ margin: '0px', fontSize: '14px' }}>Comics geek <i className="fa-solid fa-book"></i></p>
          <p style={{ margin: '0px', fontSize: '14px' }}>EDM freak <i className="fa-solid fa-music"></i></p>
          <p style={{ margin: '0px', fontSize: '14px' }}>Photographer <i className="fa-solid fa-camera-retro"></i></p>
          <p>This is my personal blog, where I will post my photos and some writings of my own.</p>
          <p style={{ marginBottom: '9px', marginTop: '26px', fontSize: '14px' }}>Find me on:</p>
          <div className='social'>
            <a href="https://github.com/Rajit-D" target="_blank" style={{textDecoration: 'none', color: '#4e4e4e'}}><i className="fa-brands fa-github"></i></a>
            <a href="https://twitter.com/RajitDutta4" target="_blank" style={{textDecoration: 'none', color: '#4e4e4e'}}><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.facebook.com/lazy.person.5209/" target="_blank" style={{textDecoration: 'none', color: '#4e4e4e'}}><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/_.gratiano._/" target="_blank" style={{textDecoration: 'none', color: '#4e4e4e'}}><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/rajit-dutta-09446a1bb/" target="_blank" style={{textDecoration: 'none', color: '#4e4e4e'}}><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title;
