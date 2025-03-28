"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface AgentCardProps {
    image: string;
    name: string;
    role: string;
}

export const AgentCard: React.FC<AgentCardProps> = ({ image, name, role }) => {
    return (
        <article className="flex flex-col min-h-[273px] min-w-60 w-[350px]">
            <Image
                src={image}
                alt={name}
                className="object-contain self-center max-w-full rounded-xl aspect-[1.73] w-[350px]"
                width={350}
                height={350}
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
                        <Phone />
                    </button>
                    <button
                        className="object-contain shrink-0 aspect-square w-[38px]"
                        aria-label="Message agent"
                    >
                        <Mail />
                    </button>
                </div>
            </div>
        </article>
    );
};
