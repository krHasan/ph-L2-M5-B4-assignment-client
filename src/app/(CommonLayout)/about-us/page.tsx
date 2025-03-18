import React from "react";
import Link from "next/link";
import RentifyContainer from "@/components/ui/core/RentifyContainer";

const AboutUsPage = () => {
    return (
        <RentifyContainer>
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Welcome to <span className="text-primary">Rentify</span> – Your Smart
                            Rental Housing Solution!
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                        <p className="mt-4 text-gray-600">
                            Our mission is to revolutionize the rental housing market by providing a{" "}
                            <strong>smart, user-friendly platform</strong> that connects landlords
                            and tenants effortlessly. We aim to empower users with the tools and
                            resources they need to make informed decisions, ensuring a smooth and
                            secure rental experience for everyone.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                        <p className="mt-4 text-gray-600">
                            We envision a world where finding a rental home is no longer a daunting
                            task. Through innovative technology, transparent processes, and a
                            commitment to excellence, we strive to create a{" "}
                            <strong>community-driven platform</strong> that simplifies the rental
                            journey for all.
                        </p>
                    </div>

                    {/* What We Offer Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
                        <ul className="mt-4 list-disc list-inside text-gray-600">
                            <li>
                                <strong>For Landlords:</strong> Easily list your properties, manage
                                rental requests, and connect with verified tenants.
                            </li>
                            <li>
                                <strong>For Tenants:</strong> Search for homes based on your
                                preferences, submit rental requests, and secure your dream home with
                                confidence.
                            </li>
                            <li>
                                <strong>For Everyone:</strong> A secure, transparent, and
                                hassle-free rental experience.
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
                        <ul className="mt-4 list-disc list-inside text-gray-600">
                            <li>
                                <strong>User-Centric Design:</strong> Our platform is designed with
                                you in mind, ensuring a seamless and intuitive experience.
                            </li>
                            <li>
                                <strong>Secure Transactions:</strong> We prioritize your safety with
                                secure payment options and verified listings.
                            </li>
                            <li>
                                <strong>24/7 Support:</strong> Our dedicated support team is always
                                here to help you with any questions or concerns.
                            </li>
                            <li>
                                <strong>Community Focus:</strong> We believe in building a community
                                where landlords and tenants can trust and rely on each other.
                            </li>
                        </ul>
                    </div>

                    {/* Our Story Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                        <p className="mt-4 text-gray-600">
                            Rentify was founded in 2023 by a team of passionate individuals who saw
                            the challenges faced by both landlords and tenants in the rental market.
                            Frustrated by the lack of transparency and efficiency in traditional
                            rental processes, we set out to create a platform that would simplify
                            the journey for everyone involved.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Today, we’re proud to serve thousands of users across the region,
                            helping them find their perfect rental homes and build lasting
                            connections.
                        </p>
                    </div>

                    {/* Meet the Team Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Meet the Team</h2>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Team Member 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Khandoker Rakib Hasan
                                </h3>
                                <p className="mt-2 text-gray-600">Founder & CEO</p>
                                <p className="mt-4 text-gray-600">
                                    Rakib is passionate about simplifying the rental process and has
                                    over 10 years of experience in the tech industry.
                                </p>
                            </div>

                            {/* Team Member 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-900">Mahmud-uz Zaman</h3>
                                <p className="mt-2 text-gray-600">Lead Developer</p>
                                <p className="mt-4 text-gray-600">
                                    Mahmud is responsible for building the platform and ensuring it
                                    runs smoothly for all users.
                                </p>
                            </div>

                            {/* Team Member 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-900">Rukaia Sharmeen</h3>
                                <p className="mt-2 text-gray-600">UX/UI Designer</p>
                                <p className="mt-4 text-gray-600">
                                    Rukaia designs intuitive and user-friendly interfaces to enhance
                                    the user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
                        <ul className="mt-4 list-disc list-inside text-gray-600">
                            <li>
                                <strong>Transparency:</strong> We believe in open and honest
                                communication.
                            </li>
                            <li>
                                <strong>Innovation:</strong> We’re constantly improving our platform
                                to meet your needs.
                            </li>
                            <li>
                                <strong>Community:</strong> We’re building a trusted network of
                                landlords and tenants.
                            </li>
                            <li>
                                <strong>Excellence:</strong> We strive to deliver the best possible
                                experience for our users.
                            </li>
                        </ul>
                    </div>

                    {/* Join Us Section */}
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Join Us on Our Journey</h2>
                        <p className="mt-4 text-gray-600">
                            Whether you’re a landlord or a tenant, we invite you to join our growing
                            community and experience the future of rental housing.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/register"
                                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                        <p className="mt-4 text-gray-600">
                            Have questions or feedback? We’d love to hear from you! Reach out to us
                            at:
                        </p>
                        <ul className="mt-4 list-disc list-inside text-gray-600">
                            <li>
                                <strong>Email:</strong> support@rentify.com
                            </li>
                            <li>
                                <strong>Phone:</strong> +8801751398320
                            </li>
                            <li>
                                <strong>Social Media:</strong>{" "}
                                <Link href={"https://www.linkedin.com/in/kr-hasan/"}>LinkedIn</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600">
                            Thank you for choosing <span className="text-primary">Rentify</span>!
                            We’re excited to be part of your rental journey.
                        </p>
                    </div>
                </div>
            </div>
        </RentifyContainer>
    );
};

export default AboutUsPage;
