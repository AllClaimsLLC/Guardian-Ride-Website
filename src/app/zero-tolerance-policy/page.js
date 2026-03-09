"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ZeroTolerancePolicy() {
  const [searchTerm, setSearchTerm] = useState("");

  // Map of section IDs to their titles
  const sections = {
    whatissuspectedimpaireddriving: "What is suspected impaired driving?",
    whatisareportofimpaireddriving: "What is a report of impaired driving?",
    howdoesguardianridehandlereportsofsuspectedimpaireddriving:
      "How does GuardianRide handle reports of suspected impaired driving?",
    willadriverbeaffectedbyfalseriderreports:
      "Will a driver be affected by false rider reports?",
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
                    Zero Tolerance Policy
                  </h1>
                </div>

                {/* Row 2: Content */}
                <div
                  className="px-6 py-6 text-sm text-black leading-relaxed"
                  style={{
                    backgroundColor: "#ffffff",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <p className="mb-4 text-gray-700 text-[14px]">
                    Every driver who uses the GuardianRide platform has a
                    responsibility to drive safely and follow the established
                    rules of the road. GuardianRide has a zero-tolerance policy
                    for the use of alcohol or drugs by drivers using
                    GuardianRide’s Driver app: AccuTrack. If we receive reports
                    of suspected impaired driving, the driver or delivery person
                    may lose access to their account, as stated in their
                    agreement with GuardianRide.*
                  </p>
                </div>
              </div>

              <h1
                id="whatissuspectedimpaireddriving"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                1. What is suspected impaired driving?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  A driver or delivery person, by law, may not drive or bike
                  while using alcohol, drugs, or any other substance that
                  impairs their ability to safely operate a vehicle. That
                  includes having open containers of alcohol or drugs in a
                  vehicle while using the GuardianRide apps.
                </p>
              </div>

              <h1
                id="whatisareportofimpaireddriving"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                2. What is a report of impaired driving
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  A report of suspected impaired driving includes a report from
                  any person that explicitly alleges that the driver or delivery
                  person was using, in possession of, or appeared to be impaired
                  by drugs or alcohol, or that the vehicle smelled like alcohol
                  or other drugs.
                </p>
              </div>

              <h1
                id="howdoesguardianridehandlereportsofsuspectedimpaireddriving"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                3. How does GuardianRide handle reports of suspected impaired
                driving?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  A report from any person who reasonably suspects the driver is
                  under the influence of drugs or alcohol while providing
                  rideshare services or delivery services will lead to loss of
                  access to the AccuraTrack app while further investigation is
                  conducted. If investigation finds sufficient evidence that a
                  driver violated this policy, they will permanently lose access
                  to GuardianRide’s AccuraTrack app.
                </p>
              </div>

              <h1
                id="willadriverbeaffectedbyfalseriderreports"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                4. Will a driver be affected by false rider reports?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  Our teams proactively review each report for signs that it
                  might be fraudulent. We are continually implementing new
                  processes and technology to identify and discourage user
                  fraud. Any report that appears to be fraudulent would not
                  affect a driver’s safety history or their status on the
                  AccuraTrack app. Users who submit false information to
                  GuardianRide or otherwise engage in fraudulent activity
                  violate GuardianRide’s Community Guidelines and risk losing
                  access to the GuardianRide platform.
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
