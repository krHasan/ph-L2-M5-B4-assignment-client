"use client";

import * as React from "react";

interface BlogCardProps {
    image: string;
    date: string;
    category: string;
    title: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ image, date, category, title }) => {
    return (
        <article className="min-w-60 w-[350px]">
            <div className="max-w-full text-sm whitespace-nowrap w-[350px]">
                <div className="flex relative flex-col items-center px-9 pt-40 pb-2.5 w-full rounded-xl aspect-[1.777] max-md:px-5 max-md:pt-24">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover absolute inset-0 size-full rounded-xl"
                    />
                    <div className="flex relative gap-4 items-start px-3.5 py-1.5 bg-white rounded-md">
                        <time className="text-black">{date}</time>
                        <div className="flex gap-1.5 items-center text-red-700">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30dc03fa2393209be293d984ece132bb331ed6c687fed723f9c5028d2e070074?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                alt="Category icon"
                                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                            />
                            <span>{category}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-5 w-full max-w-[350px]">
                <h3 className="text-lg text-center text-zinc-900">{title}</h3>
                <button
                    className="flex gap-2 items-center mt-4 text-sm text-red-700"
                    aria-label="Read more"
                >
                    <span>Read more</span>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b74635cfc61fd125ab4c3db7c8c75af239304977fa5d980bc783c26179e41d4e?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                        alt="Arrow right"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                    />
                </button>
            </div>
        </article>
    );
};
