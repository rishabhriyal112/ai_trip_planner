import React, { useEffect, useState } from 'react'
import { LuAlarmClock } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function PlaceCardItem({ place }) {

   const[photoUrl , setPhotoUrl] = useState();
  useEffect(()=>{
     place&&GetPlacePhoto()
  },[place])

  const GetPlacePhoto = async() => {
    const data = { textQuery : place?.placeName }

    const result = await GetPlaceDetails(data)
    .then(resp => {console.log(resp.data.places[0].photos[3].name)

    const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
    setPhotoUrl(PhotoUrl);
    
  })
  }
  return (
    <div className='border rounded-xl p-4 mt-2 flex gap-3 hover:scale-105 transition-all cursor-pointer hover:shadow-md'>
      
        <img className='w-[120px] h-[120px] rounded-xl object-cover flex-shrink-0'
          src={photoUrl ? photoUrl :"/imgnotfound.png"}
          onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} />

        <div className="flex-1 flex flex-col justify-between">
          <p className="text-sm"> {place.placeName} </p>
          <p className="text-[13px] font-normal text-gray-400 font-sans  "> {place["Place Details"]} </p>

          <h2 className='mt-1.5 text-[13px] text-gray-700 flex items-center gap-1'>< LuAlarmClock /><span className='mt-0.5'>{place["timetoTravel"]}</span> </h2>
        </div>
    </div>
  )
}

export default PlaceCardItem
