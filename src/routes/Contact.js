import React from 'react'
import { Banner } from '../components/Banner'
import Navbar from '../components/Navbar'

export const Contact = () => {
    return (
        <>
            <Navbar />
            <Banner
                cName="contactBanner"
                bannerText="contactBanner-text"
                bannerImg={require("../assets/img/bannerbg.jpg")}
                title="Contact"

            />
        </>
    )
}

