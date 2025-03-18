"use client";

import * as React from "react";

interface PropertyCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: number;
    postedTime: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
    image,
    title,
    location,
    price,
    beds,
    baths,
    sqft,
    postedTime,
}) => {
    return (
        <article className="flex flex-col py-4 pr-4 pl-3.5 bg-white rounded-2xl shadow-lg min-w-60 w-[350px]">
            <img
                src={image}
                alt={title}
                className="object-contain self-center max-w-full rounded-xl aspect-[1.41] w-[314px]"
            />
            <div className="mt-4 w-full">
                <header>
                    <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
                    <div className="flex gap-1 items-center mt-1.5 w-full text-xs text-neutral-700">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99ba1e3631e725c78d4e4108672fd31c746197ee0a6bfaab44a71430c22dc0dd?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Location"
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                        />
                        <p>{location}</p>
                    </div>
                </header>
                <p className="mt-5 text-lg font-semibold text-red-700">{price}</p>
                <div className="flex gap-4 items-start mt-5 w-full text-sm whitespace-nowrap text-neutral-700">
                    <div className="flex gap-1 items-center">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59a77a5a9e451f950a17a1f0f2c6bdf429482d12971619cd359ed01fd03cee0c?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Beds"
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                        />
                        <span>Beds:</span>
                        <span className="font-semibold">{beds}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb32bcde0f1f20876afe80618f86cb33f4fe94696083929cda8a4313b9c0f00?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Baths"
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                        />
                        <span>Baths:</span>
                        <span className="font-semibold">{baths}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a4869996899898150b0fc6d5729202ae0f9767c41a5dd075f8cbd8d93b49c07?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Size"
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                        />
                        <span>Sqft:</span>
                        <span className="font-semibold">{sqft}</span>
                    </div>
                </div>
            </div>
            <div className="flex mt-4 w-full bg-zinc-100 min-h-px" />
            <footer className="flex gap-10 justify-between items-center mt-4 w-full text-sm text-neutral-700">
                <button className="flex gap-0.5 items-center self-stretch my-auto font-semibold whitespace-nowrap">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a45acb2590fb8f40b38595dbfc3cee510233914072bfc85b53ae9afb5daa6f8?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                        alt="Compare"
                        className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                    />
                    <span>Compare</span>
                </button>
                <div className="flex shrink-0 self-stretch my-auto w-10 h-10 rounded-full bg-zinc-300" />
                <time>{postedTime}</time>
            </footer>
        </article>
    );
};
