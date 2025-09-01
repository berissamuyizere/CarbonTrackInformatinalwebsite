import { Wifi, Factory, Monitor } from "lucide-react";

export default function howItWorks() {
  return (
    <main className="min-h-screen bg-[#2A4759] text-white">
      {/* Section 1: How Carbon Track Works */}
      <section className="max-w-6xl px-6 py-16 text-center mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          HOW DOES CARBON TRACK WORK?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 font-semibold text-lg md:text-xl gap-8 px-1">
          <div className="flex flex-col items-center space-y-4 h-100 hover:border border-[#F79B72] p-3 rounded-2xl">
            <Factory className="w-40 h-40 md:w-52 md:h-52" />
            <p className="pt-5">
              Sensors are put in chimneys to measure and track real-time carbon
              emissions
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 h-100 hover:border border-[#F79B72] p-3 rounded-2xl">
            <Wifi className="w-40 h-40 md:w-52 md:h-52" />
            <p className="pt-5">
              The data from the sensors is transmitted via the WIFI to tea
              factory web portal
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-2 h-100 hover:border border-[#F79B72] rounded-2xl">
            <Monitor className="w-40 h-40 md:w-52 md:h-52" />
            <p className="pt-5">
              Factory managers can be able to see their carbon emissions per
              time period
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="bg-white text-[#2A4759] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-semibold text-lg md:text-xl">
            {/* Card 1 */}
            <div className="bg-[#2A4759] text-white rounded-2xl shadow-lg p-6 md:p-8 flex items-center justify-center h-100 hover:text-[#2A4759] hover:bg-[#F79B72] transition duration-3009">
              <p>
                Carbon Track measures and provides accurate data on carbon
                emissions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#F79B72] text-[#2A4759] rounded-2xl shadow-lg p-6 md:p-8 flex items-center justify-center h-100 hover:text-white hover:bg-[#2A4759] transition duration-3009">
              <p className="text-center">
                Carbon Track provides in-depth analysis of carbon emissions over
                specific time periods, such as daily, weekly, monthly, or annual
                intervals
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#2A4759] text-white rounded-2xl shadow-lg p-6 md:p-8 flex items-center justify-center h-100 hover:text-[#2A4759] hover:bg-[#F79B72] transition duration-3009">
              <p>
                Carbon Track is its real-time alert system for when carbon
                emissions exceed predefined thresholds
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
