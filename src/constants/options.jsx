import { User, Users2, Home, Sailboat, DollarSign, Wallet, Gem } from 'lucide-react';

export const options = [
    {
        id:1,
        title : 'Just me',
        desc : 'A sole traveles in exploration',
        icon: User,
        people:'1'
    },
    {
        id:2,
        title : 'A Couple',
        desc : 'Two travelers in tandem',
        icon: Users2,
        people:'2 People'
    },
    {
        id:3,
        title : 'Family',
        desc : 'A group of fun loving adventurers',
        icon: Home,
        people:'3 to 5 People'
    },
    {
        id:4,
        title : 'Friends',
        desc : 'A bunch of thrill-seekers',
        icon: Sailboat,
        people:'5 to 10 People'
    }
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay concious of costs',
        icon: DollarSign
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon: Wallet
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon: Gem
    }
]

export const AI_PROMPT = `Generate Travel Plan for Location: {location},
for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.`
