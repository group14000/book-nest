import React from 'react';
import styles from './homepage.module.css';

const HomePage: React.FC = () => {

    const hotelImageSection = [
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
            alt: "Luxury hotel room with a view of the ocean",
            title: "Oceanview Resort",
            description: "Experience luxury by the sea",
        },
        {
            src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
            alt: "Modern city hotel with skyscrapers in the background",
            title: "City Center Hotel",
            description: "Stay in the heart of the action",
        },
        {
            src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Cozy mountain lodge with snow-capped peaks in the distance",
            title: "Mountain Retreat",
            description: "Escape to nature's embrace",
        },
        {
            src: "https://images.unsplash.com/photo-1586611292717-f828b167408c",
            alt: "Tropical beach resort with palm trees and white sand",
            title: "Tropical Paradise",
            description: "Relax in island serenity",
        },
    ]

    const reviewSection = [
        {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            alt: "Smiling woman with blonde hair",
            name: "Sarah M.",
            testimonial: "TravelEase made booking my dream vacation so simple! The hotel was exactly as described, and the service was impeccable.",
        },
        {
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            alt: "Man with short dark hair smiling at camera",
            name: "Michael R.",
            testimonial: "I've used many booking sites, but TravelEase is by far the best. Their customer service went above and beyond to ensure our trip was perfect.",
        },
        {
            src: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c",
            alt: "Woman with curly hair and glasses smiling",
            name: "Emma L.",
            testimonial: "The variety of hotels and the ease of comparing options made TravelEase my go-to for all my business trips. Highly recommended!",
        },
    ]

    return (
        <main className="bg-transparent p-6">
            <section className={`text-white py-12 ${styles.homepage}`}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Find Your Perfect Stay</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <input type="text" placeholder="Where are you going?" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                        <input type="date" placeholder="Check-in" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                        <input type="date" placeholder="Check-out" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                        <input type="number" placeholder="Guests" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                        <button type="submit" className={`text-white p-3 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-950 ${styles.button}`}>Search</button>
                    </form>
                </div>
            </section>
            <section className="featured-hotels py-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Hotels</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hotelImageSection.map((hotel, index) => (
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={index}>
                            <img
                                src={hotel.src}
                                alt={hotel.alt}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{hotel.title}</h3>
                                <p className="text-gray-600">{hotel.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className={`py-12  ${styles.homepage}`}>
                <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Customers Say</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviewSection.map((customer, index) => (
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center" key={index}>
                            <img
                                src={customer.src}
                                alt={customer.alt}
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{customer.name}</h3>
                            <p className="text-gray-600 mt-2">{customer.testimonial}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default HomePage;
