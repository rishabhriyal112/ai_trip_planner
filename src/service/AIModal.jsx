import {GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                {
                    text: "Generate a comprehensive travel plan in JSON format. Include: 1) At least 4-5 hotel options with HotelName, Hotel address, Price (specific range in Indian Rupees ₹), hotelImageurl (working/accessible image URLs from sources like Unsplash, Pexels, or official websites), geo coordinates, rating (1-5), and detailed descriptions. 2) Day-by-day itinerary with day, planName, bestTimeToVisit, and places array where each place has placeName, Place Details (detailed description), Place Image Url (working/accessible image URLs from sources like Unsplash, Pexels, google maps, official tourism websites or any authentic site to find the relevant image - NO dummy or example URLs), Geo Coordinates, ticket Pricing (specific prices in Indian Rupees ₹), rating (1-5), time (specific time like '9:00 AM - 11:00 AM'), timetoTravel (duration format like '20 minutes', '1 hour 30 minutes', '2 hours' and dont add anything with like 20min from this place just show the time (20minutes or 1hour 50minutes)). Ensure all data is realistic and accurate for the specified location, duration, traveler type, and budget. All prices should be in Indian Rupees (₹). Use only real, working image URLs."
                }
            ],
        },
        {
            role: "model",
            parts: [
                {
                    text: `{
                        "travelPlan": {
                            "location": "Las Vegas",
                            "duration": "3 Days",
                            "travelerType": "Couple",
                            "budget": "Cheap",
                            "hotelOptions": [
                                {
                                    "HotelName": "Excalibur Hotel & Casino",
                                    "Hotel address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
                                    "Price": "Around $40-$150 per night",
                                    "hotel image url": "https://example.com/excalibur.jpg",
                                    "geo coordinates": {
                                        "latitude": 36.0988,
                                        "longitude": -115.1758
                                    },
                                    "rating": 3.5,
                                    "descriptions": "A medieval-themed hotel and casino on the Strip"
                                }
                            ],
                            "itinerary": [
                                {
                                    "day": 1,
                                    "planName": "Strip Exploration",
                                    "bestTimeToVisit": "Evening",
                                    "places": [
                                        {
                                            "placeName": "Las Vegas Sign",
                                            "Place Details": "Iconic welcome sign",
                                            "Place Image Url": "https://example.com/sign.jpg",
                                            "Geo Coordinates": {
                                                "latitude": 36.082,
                                                "longitude": -115.1728
                                            },
                                            "ticket Pricing": "Free",
                                            "rating": 4.5,
                                            "time": "9:00 AM - 10:00 AM",
                                            "timetoTravel": "30 minutes"
                                        }
                                    ]
                                }
                            ]
                        }
                    }`
                }
            ]
        },
    ],
});
