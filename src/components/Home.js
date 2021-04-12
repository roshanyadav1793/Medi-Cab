import React from 'react';
import Navbar from './jsFiles/Navbar';
import Footer from './Footer/Footer';
import Carousel from './jsFiles/carousel'; 
function Home() {
    return(
        <div>
            <Navbar />
            <Carousel/>
            <Footer />
        </div>
    );
}

export default Home;
