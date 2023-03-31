import React from 'react'
import Destinationdata from './Destinationdata'
import destinationImg from '../assets/img/bannerbg.jpg'
import destinationImg3 from '../assets/img/sunset.jpg'


const DestinationReverse = () => {
    return (
        <div className='DestinationReverse'>
            <div className="container">
                <h1>Recent place to visit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.


                </p>
                <Destinationdata
                    bannerText="banner-text"
                    heading="This is Heading."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur labore, ullam atque explicabo deleniti natus veniam consectetur aperiam dolore, debitis perspiciatis eos. Aliquam officiis suscipit alias fugit corrupti aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur labore, ullam atque explicabo deleniti natus veniam consectetur aperiam dolore, debitis perspiciatis eos. Aliquam officiis suscipit alias fugit corrupti aperiam."
                    img1={destinationImg}
                    img3={destinationImg3}
                />
            </div>
        </div>
    )
}

export default DestinationReverse