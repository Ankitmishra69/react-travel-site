import React from 'react'
import Navbar from '../components/Navbar'
import { Banner } from '../components/Banner'

export const Service = () => {
    return (
        <>
            <Navbar />
            <Banner
                cName="serviceBanner"
                bannerText="serviceBanner-text"
                bannerImg={require("../assets/img/sunset.jpg")}
                title="Services"
            />

        </>
    )
}

