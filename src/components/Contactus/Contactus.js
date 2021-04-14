import React from 'react';
import classes from './styles/Contactus.module.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Navbar from '../jsFiles/Navbar';
import Footer from '../Footer/Footer';

const contactUs=()=>{
    return (
        <>
            <Navbar />
            <section className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.contactInfo}>
                        <div>
                            <h2>Contact Info :</h2>
                            <ul className={classes.info}>
                                <li>
                                    <span><RoomIcon /></span>
                                    <span>E-7 Indramani Nagar<br></br>
                                    Gwalior, M.P<br></br>
                                    India</span>
                                </li>
                                <li>
                                    <span><EmailIcon /></span>
                                    <span>mediCab@gmail.com</span>
                                </li>
                                <li>
                                    <span><PhoneIcon /></span>
                                    <span>+91-1234567899</span>
                                </li>
                            </ul>
                        </div>
                        <ul className={classes.sci}>
                            <li><a href="#"></a><FacebookIcon/></li>
                            <li><a href="#"></a><TwitterIcon/></li>
                            <li><a href="#"></a><InstagramIcon/></li>
                            <li><a href="#"></a><PinterestIcon/></li>
                            <li><a href="#"></a><LinkedInIcon/></li>
                        </ul>
                    </div>
                    <div className={classes.contactForm}>
                        <h2>Send a Message</h2>
                        <div className={classes.formBox}>
                            <div className={classes.inputBoxW50}>
                                <input type="text" name="" required/>
                                <span>First Name</span>
                            </div>
                            <div className={classes.inputBoxW50}>
                                <input type="text" required/>
                                <span>Last Name</span>
                            </div>
                            <div className={classes.inputBoxW50}>
                                <input type="text" required/>
                                <span>Email Address</span>
                            </div>
                            <div className={classes.inputBoxW50}>
                                <input type="text" required/>
                                <span>Mobile NUmber</span>
                            </div>
                            <div className={classes.inputBoxW100}>
                                <textarea type="text" required/>
                                <span>Write your message here...</span>
                            </div>
                            <div className={classes.inputBoxW100}>
                                <input type="submit" value="Send"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default contactUs;
