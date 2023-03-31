import React from 'react'

export const Banner = (props) => {
    return (
        <>
            <div className={props.cName}>
                <figure>
                    <img src={props.bannerImg} alt="bannerImg" />
                </figure>
                <div className={props.bannerText}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href="/" className={props.bannerButton}>{props.btnText}</a>
                </div>

            </div>
        </>
    )
}
