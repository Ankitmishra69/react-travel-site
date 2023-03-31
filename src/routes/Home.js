import React from 'react';
import { Banner } from '../components/Banner';
import Destination from '../components/Destination';
import DestinationReverse from '../components/DestinationReverse';
import Navbar from "../components/Navbar"
import Trip from "../components/Trip"




export const Home = () => {
    return (
        <>
            <Navbar />
            <Banner
                cName="Banner"
                bannerText="Banner-text"
                bannerImg={require("../assets/img/bannerbg.jpg")}
                title="Welcome to this site"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, autem?"
                btnText="Travel Plan"
                bannerButton="btn btn-primary"
            />
            <Destination />
            <DestinationReverse />
            <Trip />
        </>
    )
}
