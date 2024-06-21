import React from 'react';
import HeroContainer from './Hero/HeroContainer';
import Gallery from '../Gallery/Gallery';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularTeacher from '../PopularTeacher';

const Home = () => {
    return (
        <div>
         <HeroContainer/>
         <Gallery/>
         <PopularClasses/>
         <PopularTeacher/>
        </div>
    );
};

export default Home;