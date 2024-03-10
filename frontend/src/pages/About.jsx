
import React from 'react';
import { Link } from 'react-router-dom';
import bgi from './img/image4.png';
import Navbar from './Navbar';

const About = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${bgi})`, 
      width: '101vw',
      minheight: '100vh',
      marginLeft: '-600px',
      backgroundRepeat: 'repeat',
    }}>    
    <div style={{ textAlign:"justify", marginLeft:'50px', marginTop:'150px'}}><br/><br/>
        <h1 style={{ color: '#000', fontSize: '30px', textAlign:'center' , marginBottom: '20px' }}><br /><br />About Us</h1><br /><br />
       <p style={{ color: '#010', fontSize: '20px', textAlign:'left', paddingLeft:"100px", paddingRight:"120px" }}>Welcome to ReactJS Tutorial! We are dedicated to providing quality resources and tutorials for learning React.js. Our mission is to make React.js accessible to everyone, from beginners to experienced developers.</p>
       <p style={{ color: '#010', fontSize: '20px', textAlign:'left', paddingLeft:"100px", paddingRight:"120px" }}>Whether you're looking to build your first React application or enhance your skills, we're here to help. Our tutorials cover a wide range of topics, including React fundamentals, state management, routing, and more.</p>
       <p style={{ color: '#010', fontSize: '20px', textAlign:'left', paddingLeft:"100px", paddingRight:"120px" }}>Thank you for choosing ReactJS Tutorial as your learning platform. Let's dive into the world of React together!</p>
    </div>
       <Link to="/contacts">
         <button style={{ backgroundColor:"#0dd943", color:"black", marginTop:"20px", marginLeft:'700px', paddingTop:'10px', paddingBottom:'10px',paddingLeft:'40px', paddingRight:'40px'}}>Contact Us</button><br /><br /><br />
       </Link>

      <section style={{ backgroundColor:"#101010", color:"white", width:"1789px", paddingLeft:'50px', marginLeft:"-150px", marginTop:"30px", marginBottom:"-90px" }} >
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center', fontFamily: 'serif' }}><br />
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', leftContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: '1', textAlign: 'left', marginRight: '50px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Useful Links</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Our Services</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
              </ul>
            </div>
            <div style={{ flex: '1', textAlign: 'left', marginRight: '50px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Connect with Us</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a></li>
              </ul>
            </div>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px',  }}>Subscribe to Our Newsletter</h3>
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="email" placeholder="Enter your email" style={{ border:"2px solid white", padding: '10px', width: '300px', marginBottom: '10px' }} /><br />
                <button type="submit" style={{ backgroundColor: '#fff', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Subscribe</button>
              </form>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '14px', marginTop: '40px', textAlign:'center', paddingRight:'80px'}}>© 2024 ReactJS Tutorial. All rights reserved.</p>
          </div>
          <Navbar />
        </footer>
      </section>  
    </div>
  );
};

export default About;

