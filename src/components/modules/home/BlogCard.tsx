"use client";

import { ArrowBigRight, Folder } from "lucide-react";
import Image from "next/image";
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
                    <Image
                        src={image}
                        alt={title}
                        className="object-cover absolute inset-0 size-full rounded-xl"
                        width={500}
                        height={500}
                    />
                    <div className="flex relative gap-4 items-start px-3.5 py-1.5 bg-white rounded-md">
                        <time className="text-black">{date}</time>
                        <div className="flex gap-1.5 items-center text-red-700">
                            <Folder />
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
                    <ArrowBigRight className="bg-red-700" />
                </button>
            </div>
        </article>
    );
};
