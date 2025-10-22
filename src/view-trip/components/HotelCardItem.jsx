import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function HotelCardItem({hotel}) {

     const[photoUrl , setPhotoUrl] = useState();
      useEffect(()=>{
         hotel&&GetPlacePhoto()
      },[hotel])
    
      const GetPlacePhoto = async() => {
        const data = { textQuery : hotel?.HotelName}
    
        const result = await GetPlaceDetails(data)
        .then(resp => {console.log(resp.data.places[0].photos[3].name)
    
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        setPhotoUrl(PhotoUrl);
      })}
  return (
    <div>
         <Link to={`https://www.google.com/maps/search/?api=1&query=+${hotel?.HotelName}+${hotel?.['Hotel address']}`} target='_blank'>
                        <div  className='hover:scale-110 transition-all'>
                        <img src={photoUrl ? photoUrl : "/imgnotfound.png"} 
                        className='rounded-xl h-[180px] w-full object-cover' />
                        <div className='my-2 flex flex-col gap-2'>
                            <h2 className='font-medium'>{hotel?.HotelName}</h2>
                            <h2 className='text-xs text-gray-500'>📍{hotel?.['Hotel address']}</h2>
                            <h2 className='text-sm'>⭐{hotel?.rating}</h2>
                            <h2 className='text-sm'>💰{hotel?.Price}</h2>
                            
                        </div>
                    </div></Link>
    </div>
  )
}

export default HotelCardItem
