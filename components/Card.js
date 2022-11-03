import React from "react"

export default function Card(props) {
    return(
        <card className="Card">
            <img src={`${props.imageUrl}`} className="CardImage"/>
            <div className="CardInfo"><div className="CardLocation"><p className="CardLocationText"><img className="CardIcon" src="https://img.icons8.com/color/344/where.png"/>{props.location}</p><p className="GoogleMapsLink"><a href={`${props.googleMapsUrl}'`}>View on Google Maps</a></p></div>
            <h1 className="CardPlace">{props.title}</h1>
            <p className="CardTravel">{props.yearOfTravel}</p>
            <p className="CardDes">{props.description}</p> 
            </div>
        </card>
        
        
    )
}
