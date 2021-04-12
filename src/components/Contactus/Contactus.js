import React from 'react';
import classes from './styles/Contactus.module.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Navbar from '../jsFiles/Navbar';
import Footer from '../Footer/Footer';

const contactUs=()=>{
    return (
        <>
            <Navbar />
            <section className={classes.contact}>
                <div className={classes.content}>
                    <h1><BubbleChartIcon/> Contact Us <BubbleChartIcon/></h1>
                    <h4>Contact for Door-to-Door medicine supply.</h4>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className={classes.box}>
                            <div className={`${classes.icon} ${classes.top}`}><RoomIcon/></div>
                            <div className={classes.text}>
                                <h3><strong>Address</strong></h3>
                                <p>E-7 Indramani Nagar Gwalior, M.P,India</p>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.icon}><PhoneIcon/></div>
                            <div className={classes.text}>
                                <h3>Phone</h3>
                                <p>+91-1234567899</p>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.icon}><EmailIcon/></div>
                            <div className={classes.text}>
                                <h3>Email</h3>
                                <p>mediCab@gmail.com</p>
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
