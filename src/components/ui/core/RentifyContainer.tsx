import React, { ReactNode } from "react";

interface RentifyContainerProps {
    children: ReactNode;
    className?: string;
}

const RentifyContainer = ({ children, className = "" }: RentifyContainerProps) => {
    return <div className={`container mx-auto px-5 ${className}`}>{children}</div>;
};

export default RentifyContainer;
