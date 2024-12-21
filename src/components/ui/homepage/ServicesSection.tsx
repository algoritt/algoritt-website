'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/constants/services';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AutoPlay from 'embla-carousel-autoplay';

const ServicesSection: React.FC = () => {
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const autoplayOptions = {
        delay: 4000,
        stopOnInteraction: true,
        rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: 'center',
            loop: true,
            skipSnaps: false,
            dragFree: false,
            containScroll: 'trimSnaps'
        },
        autoplayEnabled ? [AutoPlay(autoplayOptions)] : []
    );

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            setAutoplayEnabled(false);
            emblaApi.scrollPrev();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            setAutoplayEnabled(false);
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const ServiceCard = ({ service }: { service: typeof services[0] }) => (
        <div className="h-full px-4">
            <Link 
                href={`/services/${service.id}`} 
                className="block h-full"
            >
                <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative h-full flex flex-col">
                    <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
                        <Image
                            src={service.media.url}
                            alt={service.title}
                            fill
                            className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                            {service.title}
                        </h3>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {service.description}
                        </p>
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-lg transition-colors duration-300" />
                </div>
            </Link>
        </div>
    );

    return (
        <section className="py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Comprehensive solutions tailored to meet your business needs and drive sustainable growth
                    </p>
                </div>

                <div className="relative px-8">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex h-full">
                            {services.map((service) => (
                                <div key={service.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_25%] h-full">
                                    <ServiceCard service={service} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dot indicators for mobile */}
                    <div className="flex justify-center gap-2 mt-6 md:hidden">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    index === selectedIndex 
                                        ? 'bg-purple-500 scale-110' 
                                        : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                                onClick={() => {
                                    setAutoplayEnabled(false);
                                    emblaApi?.scrollTo(index);
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {services.length > 4 && (
                        <>
                            <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 backdrop-blur-sm hover:scale-110"
                                onClick={scrollPrev}
                                disabled={!prevBtnEnabled}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 backdrop-blur-sm hover:scale-110"
                                onClick={scrollNext}
                                disabled={!nextBtnEnabled}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
