import { AgentCard } from "@/components/modules/home/AgentCard";
import { BlogCard } from "@/components/modules/home/BlogCard";
import { Hero } from "@/components/modules/home/Hero";
import { LocationGrid } from "@/components/modules/home/LocationGrid";
import { PropertyCard } from "@/components/modules/home/PropertyCard";
import Link from "next/link";

export default function Home() {
    const locations = [
        {
            image: "https://i.ibb.co.com/v6W3c1Gm/Mirpur.jpg",
            name: "Mirpur",
            listings: 150,
        },
        {
            image: "https://i.ibb.co.com/6Rg94TP8/Dhanmandi.jpg",
            name: "Dhanmondi",
            listings: 90,
        },
        {
            image: "https://i.ibb.co.com/C3n3qzqn/Mohammadpur.jpg",
            name: "Mohammadpur",
            listings: 50,
        },
        {
            image: "https://i.ibb.co.com/S7RbvSFY/raw-city-tour-uttara.jpg",
            name: "Uttora",
            listings: 145,
        },
        {
            image: "https://i.ibb.co.com/Cg9Wds4/Badda.jpg",
            name: "Badda",
            listings: 201,
        },
        {
            image: "https://i.ibb.co.com/jkfnsxJV/Bashundhara.png",
            name: "Bashundhara",
            listings: 59,
        },
    ];

    const properties = [
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3f1402-0467-4169-adda-c64929f8bccb?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
            title: "Spacious & Luxurious in Dubai",
            location: "Downtown, Dubai, UAE",
            price: "AED 7,500",
            beds: 4,
            baths: 2,
            sqft: 1150,
            postedTime: "3 years ago",
        },
        // Add more properties...
    ];

    const agents = [
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb4398f05852fdc3ed945ba0dc8abf4b32a10e92dfc2d36832eb912d94e0e3ce?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
            name: "Wade Warren",
            role: "Salesperson",
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f66a1446a1ac3bf63e37c8bb5663fe87e777a7e9548062620b1cec373e6f210e?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
            name: "Leslie Alexander",
            role: "Commercial Broker",
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fffb3258f47874eb22d3a55ad14345447a8472f65fd1ac0a25b04a5a32b8a25b?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
            name: "Darlene Robertson",
            role: "Realtor",
        },
    ];

    const blogPosts = [
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce50ae1e3d3d5aaa8506b138a1ffb8fefea3d58b6de727158c576c1a075e38f4?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
            date: "April",
            category: "Housing",
            title: "Best Areas for Couples to Live In Dubai, UAE",
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/737a40fabd298cf157b74e000704c2c312d3ce52daf9b24cd120295c4ed2a1da?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
            date: "April",
            category: "Housing",
            title: "How to Verify Property Ownership in Dubai",
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f279a05ae7acaea81927c83375925d230db741ef1a45da214ea74e398645e3c?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
            date: "April",
            category: "Housing",
            title: "Villa Rents in Dubai have Reached an All-Time High",
        },
    ];

    return (
        <div>
            <Hero />
            <LocationGrid locations={locations} />
            <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
                <header className="flex flex-col items-center max-md:max-w-full">
                    <h2 className="text-5xl font-bold leading-tight text-black max-md:max-w-full max-md:text-4xl">
                        Discover the latest real estate
                    </h2>
                    <p className="mt-4 text-sm text-neutral-400 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
                        lobortis justo
                    </p>
                </header>

                <div className="flex flex-wrap gap-8 items-start mt-12 max-md:mt-10 max-md:max-w-full">
                    {properties.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
                <header className="flex flex-col items-center max-md:max-w-full">
                    <h2 className="text-5xl font-bold leading-tight text-zinc-900 max-md:text-4xl">
                        Meet the agents
                    </h2>
                    <p className="mt-4 text-sm text-neutral-400 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
                        lobortis justo
                    </p>
                </header>

                <div className="flex flex-wrap gap-8 items-start mt-12 max-md:mt-10 max-md:max-w-full">
                    {agents.map((agent, index) => (
                        <AgentCard key={index} {...agent} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
                <header className="max-w-full text-center w-[729px]">
                    <h2 className="text-5xl font-bold leading-tight text-black max-md:max-w-full max-md:text-4xl">
                        From our blog
                    </h2>
                    <p className="mt-4 text-sm text-neutral-400 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique
                        metus proin id lorem odio
                    </p>
                </header>

                <div className="flex flex-wrap gap-8 items-start mt-12 font-semibold max-md:mt-10 max-md:max-w-full">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col items-center mt-24 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-base font-extrabold text-black">
                    Trusted by over 150+ major companies
                </h2>
                <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0d93f68d00e22b460d12e4eb827ca6cb91c6836f7c0f619c68b320dd5555f81?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                        alt="Partner logo"
                        className="object-contain shrink-0 w-40 aspect-[2]"
                    />
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a32b8600eebbbeadfc2a7f200244e5108cb92e178e3505f5f425e46ad06412cd?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                        alt="Partner logo"
                        className="object-contain shrink-0 w-40 aspect-[2]"
                    />
                    <div className="flex gap-1.5 items-start px-2.5 py-5 w-40 bg-white">
                        <div className="mt-1.5">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4697c06b799d9ea19f9834647b1b5c05b01742b1dbeba0166c0e2a8e69ae68b?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                alt="Partner logo"
                                className="object-contain aspect-square w-[15px]"
                            />
                        </div>
                        <div className="text-2xl basis-auto text-zinc-400">Bauhouse</div>
                    </div>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbfbcb858d8d768553fd52bbbc386150d304773cacb0a1392917a51bb1d8aec7?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                        alt="Partner logo"
                        className="object-contain shrink-0 w-40 aspect-[2]"
                    />
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ff1ee3a1eb001c54be9aebac4ad1682e8c5d56bea206b9603f016da10ade92a?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                        alt="Partner logo"
                        className="object-contain shrink-0 w-40 aspect-[2]"
                    />
                </div>
            </section>

            <section className="flex flex-col items-center self-stretch pt-24 pb-8 mt-24 w-full bg-zinc-900 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
                    <div className="flex relative gap-8 items-start px-8 py-10 bg-rose-300 rounded-xl shadow-lg min-h-[175px] min-w-60 w-[540px] max-md:px-5 max-md:max-w-full">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb38648be6e1dacdecc8724d6b794e5c88675f3f585d674bd95e07fd9213d809?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Buy house"
                            className="object-contain z-0 shrink-0 rounded-xl aspect-square w-[100px]"
                        />
                        <div className="z-0 min-w-60 text-zinc-900 w-[350px]">
                            <h3 className="text-3xl font-bold">You need a house</h3>
                            <p className="mt-3 text-sm leading-5">
                                Tell us your needs, we will give you thousands of suggestions for
                                the dream home.
                            </p>
                        </div>
                        <button className="flex absolute -bottom-7 left-40 z-0 gap-2.5 justify-center items-center px-5 py-4 text-base font-bold text-center text-white bg-red-700 rounded-xl h-[54px] min-h-[54px] w-[212px]">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2dcb3bb10c9d7529e19a3091add84425ee027059d04b2a77f3e9daea1f713c2?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                alt="Contact"
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                            <div className="flex shrink-0 self-stretch w-px bg-white bg-opacity-20 h-[22px]" />
                            <span>Contact Seller</span>
                        </button>
                    </div>

                    <div className="flex relative gap-8 items-start px-8 py-10 bg-rose-300 rounded-xl shadow-lg min-h-[175px] min-w-60 w-[540px] max-md:px-5 max-md:max-w-full">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9721479d3eb023c0e86dbac57004a0f44f59d7edb1c10bc5b292c70385be39cb?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                            alt="Sell house"
                            className="object-contain z-0 shrink-0 rounded-xl aspect-square w-[100px]"
                        />
                        <div className="z-0 min-w-60 text-zinc-900 w-[350px]">
                            <h3 className="text-3xl font-bold">Sell your house</h3>
                            <p className="mt-3 text-sm leading-5">
                                We will connect you to thousands of people who need to buy a home.
                            </p>
                        </div>
                        <button className="flex absolute -bottom-7 left-40 z-0 gap-2.5 justify-center items-center px-5 py-4 text-base font-bold text-center text-white bg-red-700 rounded-xl h-[54px] min-h-[54px] w-[212px]">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f03f41ea1891925e12785c6b7a0a29a5cbb9fc16bc052354ce684978b0df4a1b?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                alt="Sell"
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                            <div className="flex shrink-0 self-stretch w-px bg-white bg-opacity-20 h-[22px]" />
                            <span>Sell Property</span>
                        </button>
                    </div>
                </div>

                <div className="flex mt-16 max-w-full bg-white bg-opacity-10 min-h-px w-[1920px] max-md:mt-10" />

                <footer className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
                    <div className="min-w-60 w-[255px]">
                        <h3 className="text-lg font-semibold text-white">Office Address</h3>
                        <div className="mt-6 max-w-full w-[255px]">
                            <div className="w-full">
                                <p className="text-white opacity-50">Head office:</p>
                                <p className="mt-1.5 font-semibold text-green-50">
                                    Jumeirah, Dubai, UAE
                                </p>
                            </div>
                            <div className="mt-4 w-full text-green-50">
                                <p className="text-white opacity-50">Branch:</p>
                                <p className="mt-1.5 leading-5">
                                    Reem island Addax tower Floor 45, offi in Abu Dhabi, UAE
                                </p>
                                <div className="flex mt-1.5 w-full bg-white bg-opacity-10 min-h-px" />
                                <p className="mt-1.5 leading-5">
                                    AL SAADA Bakery, Defence Road, Abu Dhabi, UAE
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-60 w-[255px]">
                        <h3 className="text-lg font-semibold text-white">Contact Seller</h3>
                        <div className="mt-6 w-full text-sm">
                            <div className="flex gap-4 items-center">
                                <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[65px] w-[65px]" />
                                <div>
                                    <p className="text-white opacity-50">Darrell Steward</p>
                                    <p className="font-semibold text-green-50">(+971) 555-55812</p>
                                </div>
                            </div>
                            <div className="flex mt-3.5 w-full bg-white bg-opacity-10 min-h-px" />
                            <div className="flex gap-4 items-center mt-3.5">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40795565a9441a0e0d6da910e19ff616a1062c35bf959a0d472c66556b724523?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                    alt="Phone"
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
                                />
                                <div>
                                    <p className="text-white opacity-50">Hotline:</p>
                                    <p className="font-semibold text-green-50">(+971) 555-0124</p>
                                </div>
                            </div>
                            <div className="flex mt-3.5 w-full bg-white bg-opacity-10 min-h-px" />
                            <div className="flex gap-4 items-center mt-3.5">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8cc98360d892bbfd2ff3cccfa3dd076acbfc9087d5c2dec1c986a47aefd6da2?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                    alt="Email"
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
                                />
                                <div>
                                    <p className="text-white opacity-50">Email:</p>
                                    <p className="text-green-50">roomsforrentals@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="text-white min-w-60 w-[255px]">
                        <h3 className="text-lg font-semibold">Our Company</h3>
                        <ul className="mt-6 space-y-3 text-sm">
                            {[
                                "Property For Sale",
                                "About Us",
                                "Our Agents",
                                "Terms Of Use",
                                "Privacy Policy",
                                "Contact Us",
                            ].map((item) => (
                                <li key={item} className="flex gap-2 items-center">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c22a77b3937f254817f5f3c3b1248621aa79767921cf782f76fc0d66d959e6ea?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                        alt="Arrow"
                                        className="object-contain shrink-0 w-3 aspect-[0.92]"
                                    />
                                    <span className="opacity-70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="min-w-60 w-[255px]">
                        <h3 className="text-lg font-semibold text-white">Newsletter</h3>
                        <div className="mt-6">
                            <p className="text-sm text-green-50">
                                Sign up to receive the latest articles
                            </p>
                            <form className="mt-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-5 py-4 text-sm bg-white rounded-xl border border-[#E5E5EA] min-h-[52px] text-neutral-400"
                                />
                                <button
                                    type="submit"
                                    className="flex gap-2.5 justify-center items-center px-5 py-4 mt-3 w-full text-base font-bold text-white rounded-xl border border-white border-opacity-10 bg-white bg-opacity-10 min-h-[54px]"
                                >
                                    <span>Sign Up</span>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31bb8761e558d08cb026f578859b6dc0e43709ee107239db297dcff4d3f7b631?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                        alt="Submit"
                                        className="object-contain shrink-0 aspect-square w-[18px]"
                                    />
                                </button>
                            </form>
                            <label className="flex gap-2.5 items-start mt-4">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded-md border border-white border-opacity-10 bg-white bg-opacity-10"
                                />
                                <span className="flex-1 text-xs leading-5 text-green-50">
                                    I have read and agree to the terms & conditions
                                </span>
                            </label>
                        </div>
                    </div>
                </footer>

                <div className="flex flex-col items-center mt-16 max-w-full w-[1920px] max-md:mt-10">
                    <div className="w-full bg-white min-h-px" />
                    <div className="flex flex-wrap gap-5 justify-between mt-8 max-w-full w-[1110px]">
                        <Link
                            href="/"
                            className="flex gap-2.5 my-auto text-base font-bold leading-4 text-white"
                        >
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b954707eedcd6e3e4e7395622b2beb8b1bb265d20930b0cee7783ec96f72cb?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245"
                                alt="Logo"
                                className="object-contain shrink-0 aspect-[0.95] w-[52px]"
                            />
                            <span className="my-auto">
                                <span style={{ letterSpacing: "0.5px" }}>RoomsFor</span>
                                <br />
                                Rentals.com
                            </span>
                        </Link>

                        <div className="flex flex-wrap gap-10">
                            <nav className="flex flex-auto gap-10 items-start my-auto text-base font-semibold text-white">
                                {["Home", "Property", "Page", "Blog", "Contact"].map((item) => (
                                    <a key={item} href={`/${item.toLowerCase()}`}>
                                        {item}
                                    </a>
                                ))}
                            </nav>
                            <div className="flex gap-2">
                                {[
                                    "https://cdn.builder.io/api/v1/image/assets/TEMP/1ba1f632d74efa5167b87357d2ba5cd90eaff20b2840f5bac0bc2802aeb7c339?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
                                    "https://cdn.builder.io/api/v1/image/assets/TEMP/60c712da13e607726b640d7c5637acd87b9cddb1f03a87c243a48fb6c52beaa1?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
                                    "https://cdn.builder.io/api/v1/image/assets/TEMP/c9e935ac3baead5aede4818031a9924c7ebae13aeadca96d785791b121eb4665?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
                                    "https://cdn.builder.io/api/v1/image/assets/TEMP/ea9b48c63a129483548d13d3f48fb7f9bb589ac563d56183028a099f8b615325?placeholderIfAbsent=true&apiKey=6aa96b7cffc442f5b5f59062dd61e245",
                                ].map((url, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="object-contain shrink-0 w-11 aspect-square"
                                    >
                                        <img src={url} alt="Social media" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8 w-full bg-white min-h-px" />
                    <p className="mt-8 text-sm text-center text-green-50 opacity-50">
                        Copyright © 2024{" "}
                        <a
                            href="https://www.roomsforrentals.com/"
                            className="font-semibold underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            RoomsForRentals.com
                        </a>
                        . Designed & Developed by{" "}
                        <a
                            href="https://www.figmacom.com/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            FigmaCom.com
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
