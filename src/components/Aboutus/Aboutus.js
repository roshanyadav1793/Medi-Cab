import React from 'react';
import styles from './styles/Aboutus.module.css';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Navbar from '../jsFiles/Navbar';
import Footer from '../Footer/Footer';

const aboutUs=()=>{
    return (
        <>  
            <Navbar />
            <div className={styles.about_page}>
                <h1 className={styles.h1}><BubbleChartIcon/> About Us <BubbleChartIcon/> </h1>
                <hr></hr>
                <section className={styles.section}>
                    <p>Welcome to MedQ! The purpose of your service is to create our MedQ. So we always want to be by your side....</p>
                    
                </section>
                <h2 className={styles.h2}>Features</h2>
                <ul>
                    <li>High Production</li>
                    <li>Reliable supplying</li>
                    <li>Quick Delivery</li>
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default aboutUs;
