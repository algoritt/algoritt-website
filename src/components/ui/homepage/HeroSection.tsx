import React from 'react';
import { Button } from '@/components/ui/button/button';
import Link from 'next/link';


const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden flex items-center">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
                <source src="/assets/hero-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 sm:mb-10">
                        <span className="block mb-4">Navigating the Global</span>
                        <span className="gradient-text block">Business Terrain</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
                        Algoritt is a leading consulting firm known for its deep expertise and innovative strategies. We help organizations optimize processes, mitigate risks, and drive sustainable growth with tailored solutions across industries.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="default" className="w-full sm:w-[200px]">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
