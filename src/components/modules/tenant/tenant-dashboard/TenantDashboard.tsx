"use client";

import PageHeader from "@/components/ui/core/PageHeader";
import RentifyContainer from "@/components/ui/core/RentifyContainer";
import Link from "next/link";

const TenantDashboard = ({
    states,
}: {
    states: {
        totalListings?: number;
        totalRequests?: number;
        totalUsers?: number;
    };
}) => {
    return (
        <RentifyContainer>
            <PageHeader text="Dashboard" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-100">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#28a745]">
                        {states?.totalRequests}
                    </h2>

                    <p className="text-xs md:text-2xl mt-1 sm:mt-2 text-[#28a745]">
                        Total Requests
                    </p>

                    <button className="mt-3 sm:mt-4 bg-[#28a745] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                        <Link href={"/tenant/rental-house-request"}>Request List →</Link>
                    </button>
                </div>
            </div>
        </RentifyContainer>
    );
};

export default TenantDashboard;
