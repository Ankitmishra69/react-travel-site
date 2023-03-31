import React from 'react'

function Card(props) {
    return (
        <>
            <div className="Card">
                <div className="container">
                    <div className="Card__wrapper">
                        <div className="cards">
                            <div className="cards__img">
                                <img src={props.imagew} alt="" />
                            </div>
                            <div className="cards__content">
                                <h5>{props.cardHeading}</h5>
                                <p>{props.cardText}</p>
                            </div>
                            <a href="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card



