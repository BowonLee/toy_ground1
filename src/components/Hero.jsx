import React, { useState, useEffect } from 'react';
import frankenstein1 from '../assets/frankenstein1.jpg';
import frankenstein2 from '../assets/frankenstein2.jpg';
import frankenstein3 from '../assets/frankenstein3.jpg';

const images = [frankenstein1, frankenstein2, frankenstein3];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Frankenstein Background ${index + 1}`}
                            className="w-full h-full object-cover opacity-50"
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-transparent to-deep-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-xl md:text-2xl text-blood-red tracking-[0.2em] mb-4 animate-pulse uppercase font-serif">
                    신이 되려 한 자 괴물이 될지니
                </h2>
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-off-white mb-8 font-serif tracking-tighter drop-shadow-lg break-words">
                    FRANKENSTEIN
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 font-sans tracking-widest">
                    Guillermo del Toro
                </p>

                <a
                    href="https://www.youtube.com/watch?v=XWt4z0NNq-Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 border border-off-white text-off-white hover:bg-blood-red hover:border-blood-red hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold"
                >
                    Watch Trailer
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-off-white to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
