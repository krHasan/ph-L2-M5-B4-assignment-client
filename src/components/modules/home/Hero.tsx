"use client";

import styles from "./Banner.module.css";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Building, Building2, House, HousePlusIcon, Search } from "lucide-react";
import * as React from "react";

export const Hero: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<"family" | "bachelor" | "office">("family");

    return (
        <section>
            <div className={`${styles.banner} ${styles.parent} h-[80vh]`}>
                <div className={`${styles.child} size-full flex justify-center items-center`}>
                    <div className={`flex max-md:flex-col`}>
                        <div className="ml-10 w-7/12 flex max-md:ml-0 max-md:w-full">
                            <div className="relative self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                                <h1 className="text-6xl font-bold leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                                    Find Your Perfect Property with Us
                                </h1>
                                <p className="mt-2.5 mr-5 text-2xl font-semibold leading-6 max-md:mr-2.5 max-md:max-w-full text-yellow-500">
                                    Discover Your Dream Property with Us - Where Perfect Meets
                                    Possible in Every Home.
                                </p>
                            </div>
                        </div>

                        <div className="w-5/12 max-md:ml-0 max-md:w-full">
                            <div className="relative grow max-md:mt-10 max-md:max-w-full">
                                <div className="flex z-10 flex-col items-center w-full max-md:max-w-full">
                                    <div className="flex flex-col w-full max-w-[441px] max-md:max-w-full">
                                        <div className="flex flex-col justify-center p-6 w-full text-sm bg-white rounded max-md:px-5 max-md:max-w-full">
                                            <div className="flex items-start self-start text-base font-semibold text-center whitespace-nowrap">
                                                <button
                                                    onClick={() => setActiveTab("family")}
                                                    className={`flex-1 shrink gap-2.5 px-2.5 py-2 rounded-xl basis-0 w-[115px] cursor-pointer ${
                                                        activeTab === "family"
                                                            ? "text-white bg-red-700 hover:bg-red-500"
                                                            : "bg-rose-300 text-zinc-900"
                                                    }`}
                                                >
                                                    Family
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab("office")}
                                                    className={`gap-2.5 px-2.5 py-2 rounded-xl w-[115px] cursor-pointer ${
                                                        activeTab === "office"
                                                            ? "text-white bg-red-700 hover:bg-red-500"
                                                            : "bg-rose-300 text-zinc-900"
                                                    }`}
                                                >
                                                    Office
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab("bachelor")}
                                                    className={`gap-2.5 px-2.5 py-2 rounded-xl w-[115px] cursor-pointer ${
                                                        activeTab === "bachelor"
                                                            ? "text-white bg-red-700 hover:bg-red-500"
                                                            : "bg-rose-300 text-zinc-900"
                                                    }`}
                                                >
                                                    Bachelor
                                                </button>
                                            </div>
                                            <Select>
                                                <SelectTrigger className="px-5 py-4 mt-3 w-full min-h-[54px] bg-white rounded-xl border border-solid border-[color:var(--Input,#E5E5EA)] text-neutral-700">
                                                    <SelectValue placeholder="Rent Area" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Mirpur">Mirpur</SelectItem>
                                                    <SelectItem value="Dhanmondi">
                                                        Dhanmondi
                                                    </SelectItem>
                                                    <SelectItem value="Mohammadpur">
                                                        Mohammadpur
                                                    </SelectItem>
                                                    <SelectItem value="Uttora">Uttora</SelectItem>
                                                    <SelectItem value="Badda">Badda</SelectItem>
                                                    <SelectItem value="Bashundhara">
                                                        Bashundhara
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <div className="flex gap-3 items-start mt-3 w-full text-base font-bold text-center">
                                                <button
                                                    type="button"
                                                    className="flex flex-1 shrink gap-2.5 justify-center items-center px-5 py-4 cursor-pointer text-white bg-red-700 hover:bg-red-500 rounded-xl basis-0 min-h-[54px]"
                                                >
                                                    <span>Search Now</span>
                                                    <Search />
                                                </button>
                                            </div>

                                            <div className="flex justify-between gap-5 items-start mt-6 text-sm font-semibold whitespace-nowrap">
                                                <button className="flex gap-1.5 items-center">
                                                    <House />
                                                    Houses
                                                </button>
                                                <button className="flex gap-1.5 items-center">
                                                    <HousePlusIcon />
                                                    <span>Villa</span>
                                                </button>
                                                <button className="flex gap-1.5 items-center">
                                                    <Building />
                                                    <span>Office</span>
                                                </button>
                                                <button className="flex gap-1.5 items-center">
                                                    <Building2 />
                                                    <span>Apartments</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
