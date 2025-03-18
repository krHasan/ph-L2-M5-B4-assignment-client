import { BriefcaseMedicalIcon, Cat, Cigarette, TimerIcon, Wine, X } from "lucide-react";
import React from "react";

const PolicyDetails = () => {
    return (
        <section className="mt-12 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
            <h2 className="w-full text-4xl font-bold leading-none text-center text-neutral-900 max-md:max-w-full max-md:text-4xl">
                Policy detail
            </h2>
            <div className="flex flex-wrap gap-10 justify-between items-start mt-16 w-full max-md:mt-10">
                <div className="flex flex-col min-w-60 w-[340px]">
                    <h3 className="self-start text-2xl font-bold leading-none text-center text-black">
                        House rules
                    </h3>
                    <div className="mt-5 w-full text-lg text-neutral-900">
                        <div className="flex gap-3 items-center mt-2 w-full">
                            <TimerIcon />
                            <div className="flex-1 shrink self-stretch my-auto basis-0">
                                Gate Closed (11:30 AM)
                            </div>
                        </div>
                        <div className="flex gap-3 items-center mt-2 w-full">
                            <Cigarette />
                            <div className="flex-1 shrink self-stretch my-auto basis-0">
                                No smoking
                            </div>
                        </div>
                        <div className="flex gap-3 items-center mt-2 w-full">
                            <Cat />
                            <div className="flex-1 shrink self-stretch my-auto basis-0">
                                No pets
                            </div>
                        </div>
                        <div className="flex gap-3 items-center mt-2 w-full">
                            <Wine />
                            <div className="flex-1 shrink self-stretch my-auto basis-0">
                                No parties or events
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col min-w-60 w-[340px]">
                    <h3 className="self-start text-2xl font-bold leading-none text-center text-black">
                        Cancellation Policy
                    </h3>
                    <div className="flex gap-3 items-start mt-5 w-full text-lg leading-6 text-neutral-900">
                        <X />
                        <div className="flex-1 shrink basis-0">
                            Free Cancellation up to 7 days <br />
                            before checkin
                        </div>
                    </div>
                </div>
                <div className="flex flex-col min-w-60 w-[340px]">
                    <h3 className="self-start text-2xl font-bold leading-none text-center text-black">
                        Health & Safty
                    </h3>
                    <div className="flex gap-3 items-start mt-5 w-full text-lg leading-6 text-neutral-900">
                        <BriefcaseMedicalIcon />
                        <div className="flex-1 shrink basis-0">
                            Cleaner in accordance with our <br />
                            COVID safe cleaning policy
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolicyDetails;
