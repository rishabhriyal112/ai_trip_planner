import React from 'react'
import PlaceCardItem from './PlaceCardItem'
import { Link } from 'react-router-dom'

function PlacesToVisit({ trip }) {
    return (
        <div className='mt-4 '>
            <hr />
            <h2 className='font-bold text-lg mt-5'>Places to Visit</h2>
            <div  >
                {trip?.TripData?.travelPlan?.itinerary.map((item, index) => (
                    <div key={index} >
                        <h2 className='font-medium text-lg mt-3'>Day {item?.day}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {item.places.map((place, placeIndex) => (
                                <div key={placeIndex} >
                                    <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                                    <Link to={`https://www.google.com/maps/search/?api=1&query=+${place.placeName}`} target='_blank'>
                                        <PlaceCardItem place={place} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacesToVisit
