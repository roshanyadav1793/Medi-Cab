import React from 'react';
import classes from './styles/Aboutus.module.css';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Navbar from '../jsFiles/Navbar';
import Footer from '../Footer/Footer';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const aboutUs=()=>{
    return (
        <>  
            <Navbar />
            <section>
                <div className={classes.aboutus}>
                    <h1>About Us</h1>
                    <div className={classes.wrapper}>
                        <div className={classes.content}>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h3>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved.</p>
                            <div className={classes.button}>
                                <a href="#">read more</a>
                            </div>
                            <div className="sci">
                                <a href="#"><FacebookIcon /></a>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                            </div>
                        </div>
                        <div className={classes.imageSection}>
                            <img src="https://i.ytimg.com/vi/EAOIKUASGDE/maxresdefault.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default aboutUs;
