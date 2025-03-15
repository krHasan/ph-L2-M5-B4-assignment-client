import logo from "@/assets/logo-100.png";
import Image from "next/image";
// import Link from "next/link";
const Logo = () => {
    return (
        <div className="flex justify-center items-center m-4">
            <Image src={logo} alt={"Logo"} height={56} width={56} />
            <p className="text-2xl font-bold">Rentify</p>
        </div>
    );
};

export default Logo;
