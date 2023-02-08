import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({location}) => {
    return (
        <section>
            <h2 className="location_first">{location?.name}</h2>
            <ul className="location_second">
                <li className="location_item"><span>Type:</span>  {location?.type}</li>
                <li className="location_item"><span>Dimension:</span>  {location?.dimension}</li>
                <li className="location_item"><span>Population:</span>  {location?.residents.length}</li>
            </ul>
        </section>
    )
}

export default LocationInfo