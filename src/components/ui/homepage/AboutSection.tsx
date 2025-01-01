import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button/button';

const AboutSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900" />
            
            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Transforming Businesses Through Strategic Excellence
                    </h2>
                    <p className="text-lg sm:text-xl mb-12 text-gray-300">
                        With over a decade of experience, we&apos;ve partnered with Fortune 500 companies and emerging startups across 20+ countries. Our global team of experts brings diverse perspectives and innovative solutions to every challenge.
                    </p>
                    <Button variant="default" className="w-auto hover:scale-105 transition-transform duration-300">
                        <Link href="/about">Who We Are</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
