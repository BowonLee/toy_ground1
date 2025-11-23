import React, { useState, useEffect } from 'react';
import bookTitle from '../assets/book_title.jpg';
import bookTitle2 from '../assets/book_title2.jpg';
import bookTitle3 from '../assets/book_title3.jpg';

const bookImages = [bookTitle, bookTitle2, bookTitle3];

const Story = () => {
    const [currentBookIndex, setCurrentBookIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBookIndex((prevIndex) => (prevIndex + 1) % bookImages.length);
        }, 4000); // Change book image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 bg-deep-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Left: Book Title Image Slider */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <div className="relative w-64 md:w-full max-w-sm aspect-[2/3]">
                        {bookImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Frankenstein Book Title ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover shadow-2xl border border-dark-grey/50 transition-opacity duration-1000 ease-in-out ${index === currentBookIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <div className="mb-12">
                        <span className="text-electric-blue text-sm tracking-[0.3em] uppercase block mb-2">Synopsis</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-off-white mb-8">
                            The Modern Prometheus
                        </h2>
                    </div>

                    <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300 font-slab">
                        <p>
                            "신이 되려 했던 인간, 그리고 인간이 되고 싶었던 괴물."
                        </p>
                        <p>
                            2025년, 고전의 완벽한 재해석으로 돌아온 <span className="text-blood-red font-bold">프랑켄슈타인</span>.
                            과학의 오만함이 빚어낸 비극과 그 속에 숨겨진 슬픈 영혼의 이야기를 함께 나눕니다.
                        </p>
                    </div>

                    <div className="mt-16 flex justify-center md:justify-start gap-4 flex-wrap">
                        {['#Gothic', '#SciFi', '#Thriller', '#MovieNight'].map((tag) => (
                            <span key={tag} className="px-4 py-2 border border-dark-grey rounded-full text-sm text-gray-500 hover:border-electric-blue hover:text-electric-blue transition-colors duration-300 cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-deep-black to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Story;
