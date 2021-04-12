import React from 'react';
import Navbar from './jsFiles/Navbar';
import Footer from './Footer/Footer';
import Carousel from './jsFiles/carousel'; 
import Pharmacy from './Pharmacy/Pharmacy';
function Home() {
    return(
        <div>
            <Navbar />
            <Carousel/>
            <Pharmacy />
            <Footer />
        </div>
    );
}

export default Home;
