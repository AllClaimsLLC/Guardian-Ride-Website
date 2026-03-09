"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DangerousDrivingPolicy() {
  const [searchTerm, setSearchTerm] = useState("");

  // Map of section IDs to their titles
  const sections = {
    whatisdangerousdriving: "What is dangerous driving?",
    howdoesguardianRideidentifydangerousdriving:
      "How does GuardianRide identify dangerous driving?",
    howdoesariderletguardianrideknowaboutthewayadriverisdriving:
      "How does a rider let GuardianRide know about the way a driver is driving?",
    whathappenstothedriverifunsafedrivingbehaviorsareidentified:
      "What happens to the driver if unsafe driving behaviors are identified?",
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
                    Dangerous Driving Policy
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
                    rules of the road and all applicable laws. If we receive
                    serious or repeated reports or other signals of dangerous
                    driving and/or violations of applicable driving laws, the
                    driver may lose access to their account, as stated in their
                    Platform Access Agreement with GuardianRide.*
                  </p>
                </div>
              </div>

              <h1
                id="whatisdangerousdriving"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                1. What is dangerous driving?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px] font-semibold">
                  Examples include:
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Distracted driving
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 text-[14px] space-y-1">
                  <li>Drowsy driving.</li>
                  <li>
                    Looking at screens, or otherwise not looking at the road.
                  </li>
                  <li>Driving in an emotional state.</li>
                </ul>

                <h3 className="font-semibold text-[14px] mb-2">
                  Not following traffic laws
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 text-[14px] space-y-1">
                  <li>Following signs, traffic lights, and signals</li>
                  <li>Turning only where permitted</li>
                  <li>Signaling before turning or changing lanes</li>
                  <li>Yielding the right of way to pedestrians</li>
                  <li>Not driving or stopping in a bike lane or crosswalk</li>
                </ul>

                <h3 className="font-semibold text-[14px] mb-2">
                  Aggressive driving
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 text-[14px] space-y-1">
                  <li>Speeding</li>
                  <li>Braking suddenly</li>
                  <li>Tailgating</li>
                  <li>Abruptly accelerating or stopping</li>
                  <li>
                    Swerving, including into pedestrian walkways or bike lanes
                  </li>
                </ul>

                <h3 className="font-semibold text-[14px] mb-2">
                  Driving under the influence
                </h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 text-[14px] space-y-1">
                  <li>
                    Using or being under the influence of alcohol or other drugs
                    when using the Driver app
                  </li>
                  <li>
                    GuardianRide has a Zero Tolerance Policy on driving under
                    the influence.
                  </li>
                </ul>

                <h3 className="font-semibold text-[14px] mb-2">
                  Misuse of Advanced Driver Assistance Systems
                </h3>
                <ul className="list-disc pl-6 text-gray-700 text-[14px] space-y-1">
                  <li>
                    Engaging in unsafe behaviors while the driver assistance
                    system is engaged, such as distracted driving, using a cell
                    phone, or sleeping behind the wheel
                  </li>
                  <li>
                    Failing to keep at least one hand and normally both hands on
                    the wheel while the driver assistance system is engaged
                  </li>
                  <li>
                    Physical manipulation of the driver monitoring system
                    intended to avoid detection of driver distraction
                  </li>
                  <li>
                    Relying on ADAS to fully perform driving tasks instead of
                    actively engaging in driving
                  </li>
                </ul>
              </div>

              <h1
                id="howdoesguardianrideidentifydangerousdriving"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                2. How does GuardianRide identify dangerous driving?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  Users can contact customer support and report instances when a
                  driver drove dangerously. Reports of unsafe driving may
                  include any complaint about a driver’s operation of a vehicle
                  that resulted in an unsafe, high-risk, or dangerous experience
                  for the rider. GuardianRide also uses phone sensor data to
                  help identify unsafe driving behaviors during a trip, whether
                  en route to a pickup or while transporting a rider or
                  delivery.
                </p>
              </div>

              <h1
                id="howdoesariderletguardianrideknowaboutthewayadriverisdriving"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                3. How does a rider let GuardianRide know about the way a driver
                is driving?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  GuardianRide is committed to helping every experience for
                  riders and drivers feel safe, respectful, and positive. If a
                  rider feels that their driver was driving in an unsafe manner
                  during a trip, we ask them to let us know by reaching out to
                  our customer support team{" "}
                  <a
                    href="https://help.uber.com/riders/article/my-driver-drove-dangerously?nodeId=833301f6-392f-486a-b274-4d57db2c19aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    here
                  </a>{" "}
                  or in the GuardianRide app.
                </p>
              </div>

              <h1
                id="whathappenstothedriverifunsafedrivingbehaviorsareidentified"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                4. What happens to the driver if unsafe driving behaviors are
                identified?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  If dangerous driving is identified, whether through a rider
                  report or phone sensor data, a driver receives an in-app
                  message letting them know about the issue. We also let them
                  know that serious or repeated instances of unsafe driving can
                  result in their loss of access to the Driver app. If a driver
                  has repeated incidents of dangerous driving, we’ll let them
                  know that their account is at risk of deactivation if the
                  action continues.
                </p>
              </div>

              <h1
                id="willadriverbeaffectedbyfalseriderreports"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                5. Will a driver be affected by false rider reports?
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  Our teams proactively review each report for signs of fraud.
                  We are continually implementing new processes and technology
                  to identify and discourage user fraud. Any report we find to
                  be related to fraud would not affect a driver’s safety history
                  or their status on the Driver app. Users who submit false
                  information to GuardianRide or otherwise engage in fraudulent
                  activity violate GuardianRide’s Community Guidelines and risk
                  losing access to the GuardianRide platform.
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  * For more information about the types of conduct that can
                  cause a user to lose access to the GuardianRide platform, read
                  our Community Guidelines.
                </p>
                <p className="text-gray-700 text-[14px] italic">
                  Note: Our Community Guidelines apply to everyone who uses the
                  GuardianRide platform. Drivers are independent third-party
                  providers and not actual agents, ostensible agents, or
                  employees of GuardianRide.
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
