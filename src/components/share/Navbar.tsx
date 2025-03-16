"use client";
import Logo from "@/assets/Logo";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingCart } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";
// import { useAppSelector } from "@/redux/hooks";
// import { orderedProductsSelector } from "@/redux/features/cartSlice";

export default function Navbar() {
    const { user, setIsLoading } = useUser();
    const pathname = usePathname();
    const router = useRouter();
    // const products = useAppSelector(orderedProductsSelector);

    const handleLogOut = () => {
        logout();
        setIsLoading(true);
        if (protectedRoutes.some((route) => pathname.match(route))) {
            router.push("/");
        }
    };

    if (user?.role && !["admin", "landlord", "tenant"].includes(user?.role)) {
        handleLogOut();
    }

    return (
        <header className="border-b bg-background w-full sticky top-0 z-10">
            <div className="container flex justify-between items-center mx-auto h-16 px-5">
                <Link href="/">
                    <h1 className="text-2xl font-black flex items-center">
                        <Logo />
                    </h1>
                </Link>
                <div className="max-w-md space-x-4">
                    {/* <input
                        type="text"
                        placeholder="Search for products"
                        className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
                    /> */}
                    <Link href="/" className="hover:text-app-base">
                        Home
                    </Link>
                    <Link href="/rental-houses" className="hover:text-app-base">
                        Rental Houses
                    </Link>
                    <Link href="/about-us" className="hover:text-app-base">
                        About Us
                    </Link>
                </div>
                <nav className="flex gap-2">
                    {/* <Link href="/cart" passHref>
                        <Button
                            variant="outline"
                            className="rounded-full size-10 flex items-center justify-center gap-1"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span className="text-red-500 font-bold">{products?.length ?? 0}</span>
                        </Button>
                    </Link> */}

                    {user?.email ? (
                        <>
                            <Link href={`/${user?.role}`}>
                                <Button className="rounded-full cursor-pointer">Dashboard</Button>
                            </Link>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="cursor-pointer">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        {user.name} ({user.role.toUpperCase()})
                                        <DropdownMenuSeparator />
                                        {user.email}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href={`/profile`}>My Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        className="bg-red-500 cursor-pointer text-white"
                                        onClick={handleLogOut}
                                    >
                                        <LogOut />
                                        <span>Log Out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <Link href="/login">
                            <Button className="rounded-full cursor-pointer" variant="outline">
                                Login
                            </Button>
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
