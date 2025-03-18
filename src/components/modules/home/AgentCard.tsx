"use client";

import * as React from "react";

interface AgentCardProps {
    image: string;
    name: string;
    role: string;
}

export const AgentCard: React.FC<AgentCardProps> = ({ image, name, role }) => {
    return (
        <article className="flex flex-col min-h-[273px] min-w-60 w-[350px]">
            <img
                src={image}
                alt={name}
                className="object-contain self-center max-w-full rounded-xl aspect-[1.73] w-[350px]"
            />
            <div className="flex gap-5 justify-center items-start pt-5 w-full">
                <div className="flex-1 shrink basis-0 min-w-60">
                    <h3 className="text-lg font-semibold text-zinc-900">{name}</h3>
                    <p className="mt-1.5 text-xs text-neutral-700">{role}</p>
                </div>
                <div className="flex gap-2 items-start">
                    <button
                        className="object-contain shrink-0 aspect-square w-[38px]"
                        aria-label="Contact agent"
                    >
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/137b5d5f81ecc980c6d8861f1bf3ee5c270c607b74b9d5fd5b2ae4788695d1dd?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Contact"
                        />
                    </button>
                    <button
                        className="object-contain shrink-0 aspect-square w-[38px]"
                        aria-label="Message agent"
                    >
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e60825c3988e48df1356aed5bbe8f4a26c6a7584c3c2612eb58b5c12fe85b26?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Message"
                        />
                    </button>
                </div>
            </div>
        </article>
    );
};
