import React from 'react'

function HeroCard({image , title , desc}) {
    return (
            <div className="relative left-5 cursor-pointer flex flex-col items-center bg-white rounded-[13px] shadow-sm md:flex md:max-w-[400px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                <img className="object-cover w-full h-40 md:h-48 lg:h-55 md:w-max-48  rounded-t-lg" src= {image ? image : "/scene1.png"} alt={title ? title : 'scenery'} />
                    <div className="flex flex-col justify-between p-4 leading-normal" >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title ? title : 'Noteworthy technology acquisitions 2021'}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{desc ? desc : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}</p>
                   </div>
            </div>
            
    )
}

export default HeroCard
