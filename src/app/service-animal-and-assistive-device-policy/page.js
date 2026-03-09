"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ServiceAnimalandAssistiveDevicePolicy() {
  const [searchTerm, setSearchTerm] = useState("");

  // Map of section IDs to their titles
  const sections = {
    serviceanimals: "Service Animals",
    assistivedevices: "Assistive Devices",
  };

  const handleSearch = () => {
    // Find the first section whose title includes the search term
    const match = Object.entries(sections).find(([id, title]) =>
      title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    if (match) {
      const element = document.getElementById(match[0]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section className="bg-[#fff9ed]">
        <Navbar />

        {/* TWO COLS LAYOUT */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4 space-y-6">
              {/* Search Input */}
              <div
                className="flex items-center rounded-full px-4 py-3 bg-[#bdab93] border border-white"
                style={{
                  border: "8px solid white",
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-sm text-black placeholder-white"
                />
                <Search
                  className="w-5 h-5 text-white cursor-pointer"
                  onClick={handleSearch}
                />
              </div>

              {/* Table of Contents */}
              <div
                className="p-5 bg-[#bdab93] rounded-2xl"
                style={{
                  border: "10px solid white",
                  borderRadius: "20px",
                }}
              >
                <h3 className="font-[500] text-white text-sm mb-4">
                  Table Of Contents
                </h3>

                <ol className="space-y-4 text-sm text-white list-decimal list-inside">
                  {Object.entries(sections).map(([id, title]) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="hover:underline cursor-pointer"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden">
                {/* Row 1: Header */}
                <div
                  className="px-6 py-6"
                  style={{
                    backgroundColor: "#24211c",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <h1 className="text-white text-[20px] font-[500]">
                    Service Animal and Assistive Device Policy (United States)
                  </h1>
                </div>
              </div>

              <h1
                id="whatisdangerousdriving"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                1. Service Animals
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  State and federal law generally prohibit transportation
                  providers from denying service to riders because of their
                  service animals, and from otherwise discriminating against
                  riders with service animals. For this reason, and because it’s
                  the right thing to do, GuardianRide’s policy also prohibits
                  drivers who use the AccuTrack App from denying service to a
                  rider because of the rider’s service animal. There are no
                  exceptions to this policy due to allergies, religious
                  objections, or a generalized fear of animals. As explained in
                  GuardianRide’s Community Guidelines, drivers who engage in
                  discriminatory conduct in violation of GuardianRide’s policy
                  may lose their ability to use the AccuTrack App. GuardianRide
                  will make this determination in its sole discretion following
                  a review of the incident.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  What is a Service Animal?
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  A service animal is an animal that is trained to work or
                  perform tasks for an individual with a disability.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  If a driver is not sure if a rider&apos;s animal is a service
                  animal, the driver may ask if it is a service animal and what
                  tasks the animal is trained to perform.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  Consistent with legal requirements, service animals are not
                  required to wear a tag, be registered, or display any kind of
                  proof that it is a service animal. Riders are not required to
                  provide documentation to drivers.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  How to Report a Service Animal Complaint
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  If a rider has an issue related to his or her service
                  animal—including issues regarding ride cancellations,
                  harassment, or improper cleaning fees—GuardianRide requests
                  that the rider report the issue to GuardianRide.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  To file a report, submit an email to{" "}
                  <a
                    href="mailto:support@guardianride.com"
                    className="text-blue-600 underline"
                  >
                    support@guardianride.com
                  </a>
                  .
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  Once a rider submits a service animal report, GuardianRide’s
                  specialized support team will investigate each complaint and
                  take appropriate action in accordance with this Service Animal
                  Policy.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  We investigate and take action against false claims. Our teams
                  proactively monitor the platform for fraud and continuously
                  implement new processes and technology to identify and prevent
                  fraudulent activity. Reports found to be related to fraud will
                  not affect a driver’s account.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Cleaning Fees
                </h3>
                <p className="text-gray-700 text-[14px]">
                  Riders with service animals are not required to pay cleaning
                  fees for hair or shedding from a rider&apos;s service animal,
                  and drivers are not entitled to such fees. If you are a rider
                  with a service animal and you are charged a cleaning fee for
                  your service animal&apos;s hair or shedding, you may be
                  eligible for a refund.
                </p>
              </div>

              <h1
                id="assistivedevices"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                2. Assistive Devices
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  The law generally prohibits transportation providers from
                  denying service to a person with a disability who can get into
                  the vehicle on their own, and also prohibits transportation
                  providers from refusing to assist with the stowing of
                  assistive devices, like folding wheelchairs, walkers,
                  crutches, and canes, as they would any other luggage. For this
                  reason, and because it’s the right thing to do, GuardianRide’s
                  policy prohibits drivers who use the AccuTrack App from
                  refusing service to a rider with a disability who can get into
                  the vehicle on their own and from refusing to assist with
                  stowing assistive devices like folding wheelchairs, crutches,
                  canes and walkers.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  How to Report an Assistive Device Issue
                </h3>

                <p className="mb-4 text-gray-700 text-[14px]">
                  If a rider has an issue related to his or her assistive
                  device—including ride cancellations or harassment—GuardianRide
                  requests that the rider report the issue to GuardianRide.
                </p>

                <p className="text-gray-700 text-[14px]">
                  To file a report, send an email to{" "}
                  <a
                    href="mailto:support@guardianride.com"
                    className="text-blue-600 underline"
                  >
                    support@guardianride.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[97%] m-auto">
          <Footer />
        </div>
      </section>
    </>
  );
}
