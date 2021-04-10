import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
const Footer=() => {
    return (
        <> 
            <footer>
            <div className="container">
                <div className="sec aboutus">
                    <h2>About Us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ul className="sci">
                        <li><a href="#" className="facebook"><FacebookIcon/></a></li>
                        <li><a href="#" className="twitter"><TwitterIcon/></a></li>
                        <li><a href="#" className="insta"><InstagramIcon/></a></li>
                        <li><a href="#" className="youtube"><YouTubeIcon/></a></li>
                    </ul>
                </div>
                <div  className="sec quickLinks">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="sec contact">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><RoomIcon /></span>
                            <span>E-7 Indramani Nagar <br></br>
                            Gwalior, M.P<br></br>India</span>
                        </li>
                        <li>
                            <span><CallIcon /></span>
                            <p><a href="tel:12345678900">+91-1234567899</a><br></br>
                            <a href="tel:12345678900">+91-1234567899</a></p>
                        </li>
                        <li>
                            <span><EmailIcon /></span>
                            <p><a href="mailto: mediCab@gmail.com">mediCab@gmail.com</a></p>
                        </li>
                    </ul>
                </div>                
            </div>
        </footer>
        <div className="copyrightText">
            <p>Copyright © 2021 MediCab. All Rights Reserved.</p>
        </div>
        </>
    )
}
export default Footer;