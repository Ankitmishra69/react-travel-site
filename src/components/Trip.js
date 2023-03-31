import React from 'react'
import Card from './Card'
import cardimgd from '../assets/img/bannerbg.jpg'
// import cardimg2 from '../assets/img/sunset.jpg'
// import cardimg3 from '../assets/img/beach.jpg'

function Trip() {
    return (
        <div className="rip">
            <div className="container">
                <h1>Recent Trips</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, impedit quidem? Amet eaque eius nam!</p>
                <Card
                    cardHeading="This is heading"
                    cardText="Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nemo
                pariatur labore, ullam atque explicabo
                deleniti natus veniam consectetur
                aperiam dolore, debitis perspiciatis eos.
                Aliquam officiis suscipit alias fugit
                corrupti aperiam. Lorem ipsum dolor sit
                 amet consectetur adipisicing elit. Nemo
                pariatur labore, ullam atque explicabo deleniti
                natus veniam consectetur aperiam dolore, debitis
                perspiciatis eos. Aliquam officiis suscipit
                alias fugit corrupti aperiam."
                    imagew={cardimgd}

                />
            </div>


        </div>
    )
}

export default Trip

