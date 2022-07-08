import React from "react";

function Card(props:any){
    let badgeText

    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img src={props.img} className="card--image"/> 

            <div className="stats">
                <img src={props.star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="card--gray">({props.reviewCount}) ° </span>
                <span className="card--gray">{props.country}</span>
            </div>

            <p>{props.title}</p>

            <p>
                <span className="card--price">From ${props.price} </span>
                / person
            </p>
        </div>
    )
}

export default Card