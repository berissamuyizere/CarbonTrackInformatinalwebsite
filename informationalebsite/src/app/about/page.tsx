
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="w-full bg-white font-sans flex flex-col items-center gap-6">
            <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-32 xl:px-40 py-16 gap-20  w-full">
                <div className="relative w-full md:w-1/2 flex ">
                    <div className="relative bg-[rgba(247,155,114,1)] rounded-md w-full max-w-md overflow-visible z-0">
                        <Image
                            src="/images/emissions.svg"
                            alt="Factory Smoke"
                            width={320}
                            height={200}
                            className="rounded-md shadow-md object-cover w-full h-auto -mr-18 md:ml-8 lg:-mr-6 mt-8 mb-7 z-10"
                            priority
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative z-0 flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        ABOUT US
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-[36px] lg:text-xl">
                        Our solution brings real-time carbon tracking directly to the
                        factories. Using smart CO₂ sensors, anemometer, and temperature
                        probes powered by solar energy, we measure and calculate emissions
                        continuously.
                    </p>
                    <ul className="space-y-3 text-gray-700 text-base md:text-lg max-w-xl">
                        <li className="flex items-start gap-3">
                            <Image src="/images/leaf.svg" alt="Sustainability" width={24} height={24} />
                            <p>
                                <span className="font-semibold">Sustainability</span> Enabling
                                greener, more efficient tea production
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image src="/images/factory.svg" alt="Carbon Tracking" width={24} height={24}/>
                            <p>
                                <span className="font-semibold">Carbon Tracking</span> Real-time
                                monitoring from chimney to dashboard
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image src="/images/industry.svg" alt="Tea Industry" width={24} height={24} />
                            <p>
                                <span className="font-semibold">Tea Industry</span> Protecting a
                                $3.9B export sector
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-32 xl:px-40 py-16 gap-10 w-full">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        OUR MISSION
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl max-w-xl">
                        Carbon Track is dedicated to empowering tea factories to effectively
                        manage and monitor their carbon emissions, enabling them to meet
                        stringent market standards through precise, periodic documentation.
                        By providing innovative tools and solutions, we strive to support
                        sustainable practices that reduce environmental impact while ensuring
                        compliance with global regulations, fostering a greener future for
                        the tea industry.
                    </p>
                </div>
                <div className="relative w-full md:w-1/2 flex justify-end">
                    <div className="relative bg-[rgba(42,71,89,1)] rounded-md w-full max-w-md overflow-visible z-0">
                        <Image
                            src="/images/teafactory.svg"
                            alt="Tea Factory"
                            width={320}
                            height={200}
                            className="rounded-md shadow-md object-cover w-full h-auto -ml-8 md:-ml-12 lg:-ml-8 mt-8 mb-6 z-10"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AboutPage;






