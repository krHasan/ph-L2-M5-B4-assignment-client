import logo from "@/assets/logo-100.png";
import Image from "next/image";
const Logo = () => {
    return (
        <div className="flex justify-center items-center m-4">
            <Image src={logo} alt={"Logo"} height={64} width={64} />
            <p className="text-3xl font-bold">Rentify</p>
        </div>
    );
};

export default Logo;
