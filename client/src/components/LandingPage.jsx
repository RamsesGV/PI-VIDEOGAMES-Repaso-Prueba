import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/LandingPage.module.css';


const LandingPage = () => {
    const { btn , landingPageContainer, titleContainer, h1Font, h4 } = styles;
    return (
        <div className={landingPageContainer}>
            <div className={titleContainer}>
                <h1 style={{ margin: "0" }} className={h1Font}> Welcome to ARGV Videogames! </h1>
                <h4 className={h4}>You will be able to explore, create and learn more about your favorite games.</h4>
                <Link to='/home'>
                    <button className={btn} >Home</button>
                </Link>
            </div>
        </div>
    )
}
export default LandingPage;
