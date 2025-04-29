import React from 'react';
import Banner from '../Components/HomeElement/Banner/Banner';
import About from '../Components/HomeElement/About/About';

const Home: React.FC = () => {
    return (
        <div>
            <Banner/>
            <About/>
        </div>
    );
};

export default Home;