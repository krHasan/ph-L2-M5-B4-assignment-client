import { AgentCard } from "@/components/modules/home/AgentCard";
import { BlogCard } from "@/components/modules/home/BlogCard";
import FeaturedListings from "@/components/modules/home/FeaturedListings";
import { Hero } from "@/components/modules/home/Hero";
import { LocationGrid } from "@/components/modules/home/LocationGrid";

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

    const agents = [
        {
            image: "https://i.ibb.co/Hg4n9r5/19823862.jpg",
            name: "Khandoker Rakib Hasan",
            role: "Salesperson",
        },
    ];

    const blogPosts = [
        {
            image: "https://i.ibb.co.com/5hDBDcy9/blog1.png",
            date: "April",
            category: "Housing",
            title: "Best Areas for Couples to Live In Dhanmondi",
        },
        {
            image: "https://i.ibb.co.com/PsDwsT83/blog2.png",
            date: "April",
            category: "Housing",
            title: "How to Verify Property Ownership in Bashundhara",
        },
        {
            image: "https://i.ibb.co.com/Lz1By9RX/blog3.png",
            date: "April",
            category: "Housing",
            title: "Villa Rents in Baridhara have Reached an All-Time High",
        },
    ];

    return (
        <div>
            <Hero />
            <LocationGrid locations={locations} />
            <FeaturedListings />

            <section className="flex flex-col items-center mt-12 max-md:mt-10 max-md:max-w-full">
                <header className="flex flex-col items-center max-md:max-w-full">
                    <h2 className="text-5xl font-bold leading-tight text-zinc-900 max-md:text-4xl">
                        Meet the agents
                    </h2>
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
                </header>

                <div className="flex flex-wrap gap-8 items-start mt-12 font-semibold max-md:mt-10 max-md:max-w-full mb-12">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </section>
        </div>
    );
}
