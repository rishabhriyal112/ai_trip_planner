import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import HeroCard from './HeroCard'
import HowItWorksCard from './HowItWorksCard'
import DestinationCard from './DestinationCard'
import Footer from '../../view-trip/components/Footer'
import { MapPin, Calendar, DollarSign, Users, Bot, Plane } from 'lucide-react'

function Hero() {
  return (
    <div className='mt-6'>
      <div className='relative flex flex-col items-center mx-16 gap-6 text-white min-h-[85vh] mt-5 rounded-2xl overflow-hidden my-20'>

        {/* Blurred background image */}
        <div className='absolute inset-0 bg-[url("/hero.png")] bg-cover bg-center bg-no-repeat blur-[1px] scale-105'></div>

        {/* Black gradient mask from left */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent rounded-2xl'></div>

        {/* Foreground content (sharp text & button) */}
        <div className='relative z-10 flex flex-col items-center text-center gap-6 mt-36 px-6'>
          <h1 className='font-extrabold text-[50px] drop-shadow-lg'>
            <span className='text-[#f56551] text-[52px]'> Discover Your Next Adventure with AI : </span>  Personalized Itineraries at Your Fingertips
          </h1>

          <h1 className='text-xl text-gray-200  drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] '>
            Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
          </h1>

          <Link to={'/create-trip'}>
            <Button className='cursor-pointer bg-[#f56551] hover:bg-orange-600'>
              Get Started, It's Free
            </Button>
          </Link>
        </div>
      </div>

      <section className='py-16 bg-orange-500 mx-15 rounded-[13px]'>
        <h1 className='text-center text-white text-4xl font-bold underline mb-16'>
          Personalized Trips
        </h1>

        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-16'>
          <HeroCard
            image="/scene1.png"
            title="Solo Adventures"
            desc="Embark on a personal journey of self-discovery. Perfect for solo travelers seeking freedom, flexibility, and unique experiences tailored just for you."
          />

          <HeroCard
            image="/scene2.png"
            title="Family Bonding Escapes"
            desc="Create lasting memories with your loved ones. Family-friendly destinations with activities for all ages, comfortable accommodations, and safe environments."
          />

          <HeroCard
            image="/scene3.png"
            title="Friends Squad Goals"
            desc="Plan the ultimate group adventure with your best friends. From party destinations to adventure sports, create unforgettable moments together."
          />
        </div>
      </section>

      
      <section className='py-16'>
        <h1 className='text-center text-orange-600 text-4xl font-bold underline mb-16'>
          How It Works
        </h1>

        <div className='grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-16'>
        <HowItWorksCard
          step="1"
          icon={<MapPin size={32} />}
          title="Choose Destination"
          description="Select your dream destination using our smart location search powered by Google Places."
        />
        
        <HowItWorksCard
          step="2"
          icon={<Calendar size={32} />}
          title="Set Trip Duration"
          description="Tell us how many days you're planning to travel (up to 5 days for optimal planning)."
        />
        
        <HowItWorksCard
          step="3"
          icon={<DollarSign size={32} />}
          title="Select Budget & Group"
          description="Choose your budget (Cheap, Moderate, Luxury) and travel companions (Solo, Couple, Family, Friends)."
        />
        
        <HowItWorksCard
          step="4"
          icon={<Bot size={32} />}
          title="AI Generates Plan"
          description="Our AI creates a personalized itinerary with hotels, attractions, timings, and prices in Indian Rupees."
        />
        </div>
      </section>
      
      <section className='py-16 bg-orange-400 mx-15 rounded-[13px]'>
        <h1 className='text-center text-white text-4xl font-bold underline mb-16'>
          Trending Destinations
        </h1>

        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-16'>
          <DestinationCard
            image="/manali.png"
            destination="Manali"
            country="Himachal Pradesh"
            description="Himalayan treks and ancient temples"
          />
          
          <DestinationCard
            image="/rishikesh.png"
            destination="Rishikesh"
            country="Uttarakhand"
            description="Sacred temples and mountain trekking trails"
          />
          
          <DestinationCard
            image="/kedarnath.png"
            destination="Kedarnath"
            country="Uttarakhand"
            description="Holy temple trek in the Himalayas"
          />
          
          <DestinationCard
            image="/dharamshala.png"
            destination="Dharamshala"
            country="Himachal Pradesh"
            description="Buddhist temples and mountain adventures"
          />
        </div>
      </section>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default Hero
