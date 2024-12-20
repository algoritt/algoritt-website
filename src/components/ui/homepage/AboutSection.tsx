import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button/button';

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
                        Algoritt is a leading consulting firm known for its deep expertise and innovative strategies.
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 text-gray-300">
                        We help organizations optimize processes, mitigate risks, and drive sustainable growth with tailored solutions across industries.
                    </p>
                    <Button variant="default" className="w-auto">
                        <Link href="/about">Who We Are</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
