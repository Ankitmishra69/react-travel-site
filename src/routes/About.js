import React from 'react'
import Navbar from '../components/Navbar'
import { Banner } from '../components/Banner'

export const About = () => {
    return (
        <>
            <Navbar />
            <Banner
                cName="aboutBanner"
                bannerText="aboutBanner-text"
                bannerImg={require("../assets/img/beach.jpg")}
                title="About"
            />
        </>
    )
}

