import React from 'react';
import place1 from '../assets/place1.jpg';

const Details = () => {
    return (
        <section className="py-24 px-6 bg-dark-grey text-off-white">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Date */}
                    <div className="p-6 border border-gray-800 hover:border-blood-red transition-colors duration-300 group flex flex-col justify-center">
                        <h3 className="text-xl font-serif text-gray-500 mb-2 group-hover:text-blood-red transition-colors">Date</h3>
                        <p className="text-2xl font-bold">TBD</p>
                        <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
                    </div>

                    {/* Location */}
                    <div className="relative overflow-hidden border border-gray-800 hover:border-blood-red transition-colors duration-300 group md:col-span-1 h-64 md:h-auto">
                        <img
                            src={place1}
                            alt="Trevari Gangnam Agit"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        />
                        <div className="relative z-10 p-6 h-full flex flex-col justify-center bg-deep-black/50">
                            <h3 className="text-xl font-serif text-off-white mb-2 group-hover:text-blood-red transition-colors">Location</h3>
                            <p className="text-2xl font-bold text-white">Trevari</p>
                            <p className="text-sm text-gray-300 mt-2">Gangnam Agit, AV Room</p>
                        </div>
                    </div>

                    {/* Preparation */}
                    <div className="p-6 border border-gray-800 hover:border-blood-red transition-colors duration-300 group flex flex-col justify-center">
                        <h3 className="text-xl font-serif text-gray-500 mb-2 group-hover:text-blood-red transition-colors">Prep</h3>
                        <p className="text-2xl font-bold">Open Mind</p>
                        <p className="text-sm text-gray-500 mt-2">& Plenty of Time</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Details;
