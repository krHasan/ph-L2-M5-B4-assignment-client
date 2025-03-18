import Image from "next/image";
import * as React from "react";

interface Location {
    image: string;
    name: string;
    listings: number;
}

interface LocationGridProps {
    locations: Location[];
}

export const LocationGrid: React.FC<LocationGridProps> = ({ locations }) => {
    return (
        <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
            <header className="flex flex-col items-center max-md:max-w-full">
                <h2 className="text-5xl font-bold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
                    Explore our listings
                </h2>
                <p className="mt-4 text-lg text-neutral-400 max-md:max-w-full">
                    Most popular places
                </p>
            </header>

            <div className="flex relative gap-8 items-start mt-12 text-center max-md:mt-10 max-md:max-w-full">
                {locations.map((location, index) => (
                    <article key={index} className="flex z-0 flex-col w-40">
                        <Image
                            src={location.image}
                            alt={location.name}
                            className="object-center self-center max-w-full rounded-full aspect-square"
                            width={116}
                            height={116}
                        />
                        <div className="px-2.5 mt-5 w-full">
                            <h3 className="text-lg font-semibold text-zinc-900">{location.name}</h3>
                            <p className="mt-1.5 text-sm text-neutral-700">
                                {location.listings} listing
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
