import { Outlet, Link } from 'react-router';
import ContactText from './ContactText';
import ContactImage from './ContactImage';

export default function ContactPage() {
  return (
    <div style={{backgroundColor:'#eeeeff'}} className="contact-container">
      <div className="welcome-text">
        Hi everyone!
      </div>
      <h2>Our Contacts:</h2>
      <div className="contact-content">
        <div className="contact-image">
        <Link to='image'>IMAGE</Link>
        </div>
        <div className="contact-links">
          <Link to='text'>TEXT</Link>
        </div>
        <div className="outlet-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
