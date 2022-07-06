import React from "react";

function Card(props:any){
    return (
        <div className="card">
            <img src={props.img} className="card--image"/>   
            <div className="stats">
                <img src={props.star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="card--gray">({props.reviewCount}) ° </span>
                <span className="card--gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span className="card--price">From ${props.price}</span>
                / person
            </p>
        </div>
    )
}

export default Card