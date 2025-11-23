import React from 'react';

const About = () => {
    return (
        <section className="py-24 bg-gothic-black text-center relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <h3 className="text-neon-blue text-sm tracking-[0.3em] uppercase mb-6 animate-pulse">
                    Synopsis
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-serif">
                    "신이 되려 했던 인간, 그리고 인간이 되고 싶었던 괴물.<br /><br />
                    2025년, 고전의 완벽한 재해석으로 돌아온 <span className="text-white font-bold">&lt;프랑켄슈타인&gt;</span>.<br />
                    과학의 오만함이 빚어낸 비극과 그 속에 숨겨진 슬픈 영혼의 이야기를 함께 나눕니다."
                </p>

                <div className="mt-12 flex justify-center gap-4 text-sm text-gray-500 tracking-wider">
                    <span>#Gothic</span>
                    <span>#SciFi</span>
                    <span>#Thriller</span>
                    <span>#MovieNight</span>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-neon-blue rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-blood-red rounded-full filter blur-[100px]"></div>
            </div>
        </section>
    );
};

export default About;
