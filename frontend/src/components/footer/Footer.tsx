import { FacebookIcon, Instagram, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
                <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <ul>
                        <li><a href="/about" className="hover:text-gray-400">Our Story</a></li>
                        <li><a href="/team" className="hover:text-gray-400">Our Team</a></li>
                        <li><a href="/careers" className="hover:text-gray-400">Careers</a></li>
                        <li><a href="/press" className="hover:text-gray-400">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Support</h3>
                    <ul>
                        <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
                        <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
                        <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
                        <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Destinations</h3>
                    <ul>
                        <li><a href="/destinations/paris" className="hover:text-gray-400">Paris</a></li>
                        <li><a href="/destinations/tokyo" className="hover:text-gray-400">Tokyo</a></li>
                        <li><a href="/destinations/new-york" className="hover:text-gray-400">New York</a></li>
                        <li><a href="/destinations/all" className="hover:text-gray-400">View All</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com/hotelbooking" aria-label="Facebook" className="hover:text-gray-400">
                            <i ><FacebookIcon /></i>
                        </a>
                        <a href="https://twitter.com/hotelbooking" aria-label="Twitter" className="hover:text-gray-400">
                            <i ><TwitterIcon /></i>
                        </a>
                        <a href="https://instagram.com/hotelbooking" aria-label="Instagram" className="hover:text-gray-400">
                            <i ><Instagram /></i>
                        </a>
                        <a href="https://linkedin.com/company/hotelbooking" aria-label="LinkedIn" className="hover:text-gray-400">
                            <i > <LinkedinIcon /></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-8">
                &copy; 2024 Book Nest. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
