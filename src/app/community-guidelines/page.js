"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CommunityGuidelines() {
  const [searchTerm, setSearchTerm] = useState("");

  // Map of section IDs to their titles
  const sections = {
    unitedStatesandCanada: "United States and Canada",
    guidelinesforallofus: "Guidelines for all of us",
    discrimination: "Discrimination",
    helpkeeponeanothersafe: "Help keep one another safe",
    followthelaw: "Follow the law",
    yourfeedbackmatters: "Your feedback matters",
    howGuardianRideEnforcesOurGuidelines:
      "How GuardianRide enforces our guidelines",
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
                    GuardianRide Community Guidelines
                  </h1>
                </div>
              </div>

              <h1
                id="unitedStatesandCanada"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                1. United States and Canada
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  Our guidelines were developed to help make every experience
                  feel safe, respectful, and positive. They apply to everyone
                  who uses the GuardianRide Platform. It also includes
                  interactions you may have with GuardianRide employees and
                  contractors, including through online support systems, or over
                  the phone.* And, in some instances, our guidelines apply to
                  conduct outside the GuardianRide Platform that we become aware
                  of, when such conduct may threaten the safety of the
                  GuardianRide Platform.
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Thank you for joining us in supporting and safeguarding a
                  welcoming environment.
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  The guidelines below help explain some of the specific kinds
                  of positive community engagement on the GuardianRide Platform,
                  as well as the behaviors or circumstances that may cause you
                  to lose access to it. There will always be unforeseen events
                  that may ultimately lead to your losing access to using the
                  GuardianRide Platform and services, but the following
                  guidelines—which we’ll update regularly—provide the basis for
                  behavior we expect from all in the GuardianRide community. Not
                  following any one of our guidelines can constitute a material
                  breach or violation of the terms of your agreement with
                  GuardianRide and may result in the loss of access to part or
                  all of the GuardianRide Platform. You can report potential
                  violations of the Community Guidelines to GuardianRide and we
                  will address any report in accordance with our policies.
                </p>
              </div>

              <h1
                id="guidelinesforallofus"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                2. Guidelines for all of us
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  Everyone is required to follow GuardianRide’s Community
                  Guidelines, which reflect the 3 pillars: (1) treat everyone
                  with respect; (2) help keep one another safe; and (3) follow
                  the law.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Treat everyone with respect
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  The actions you take while using the GuardianRide Platform can
                  have a big impact on the safety and comfort of others.
                  Courtesy matters. For example, always try to be on time for
                  your ride. It’s also common courtesy not to shout, swear, or
                  slam doors. And by tidying up after yourself—whether it’s
                  taking your trash home or cleaning up a spilled drink—you’ll
                  help ensure that everyone has a pleasant ride. You are
                  expected to exercise good judgment and behave decently toward
                  other people when using the GuardianRide Platform—just as you
                  would in any public place.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Physical contact
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Don’t touch strangers or anyone you just met while using the
                  GuardianRide Platform. Limited exceptions are permitted for
                  people needing or requesting physical assistance. Hurting or
                  intending to hurt anyone is never allowed.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Sexual assault and misconduct
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We all value our personal space and privacy. It’s OK to chat
                  with other people while remaining respectful. But please don’t
                  comment on someone’s appearance or ask whether they are
                  single. Sexual assault and sexual misconduct of any kind is
                  prohibited. Sexual assault and misconduct refers to sexual
                  contact or behavior without explicit consent of the other
                  person. Personal space and privacy should be respected.
                </p>

                <p className="mb-4 text-gray-700 text-[14px] font-medium">
                  GuardianRide has a no-sex rule regardless of whether you know
                  the person or they give you their consent.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Threatening and/or rude behavior is prohibited
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Aggressive, confrontational, or harassing behavior is not
                  allowed. Don’t use language, make gestures, or take actions
                  that could be disrespectful, discriminatory, threatening, or
                  inappropriate.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Post-trip contact
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Contact should end when the trip or delivery is complete,
                  unless it’s to return a lost item. Unwanted contact (where
                  there is not mutual consent) can be seen as harassment and
                  includes, for example, texting, calling, social media contact,
                  visiting, or trying to visit someone in person after a trip or
                  delivery has been completed.
                </p>
              </div>

              <h1
                id="discrimination"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                3. Discrimination
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  You should always feel safe and welcome. That’s why we don’t
                  tolerate racist or discriminatory conduct and behavior. Do not
                  discriminate against someone or engage in a disparaging manner
                  toward someone based on traits such as their race, ethnicity,
                  skin color, age, disability, gender identity, marital status,
                  pregnancy, national origin, religion, sex, sexual orientation,
                  language, geographical location, or any other characteristic
                  protected under relevant law.
                </p>

                <p className="mb-3 text-gray-700 text-[14px]">
                  The following list provides examples of discriminatory
                  behavior but is not exhaustive:
                </p>

                <ul className="list-disc pl-6 mb-4 text-gray-700 text-[14px] space-y-2">
                  <li>
                    Refusing to provide services based on characteristics like a
                    person&apos;s race, ethnicity, skin color, age, disability,
                    gender identity, marital status, national origin, religion,
                    sex, sexual orientation, language, geographical location, or
                    any other characteristic protected under relevant law.
                  </li>

                  <li>
                    Rating another user—whether drivers, riders, schools,
                    guardians, or businesses—based on these traits.
                  </li>

                  <li>
                    Discriminating on the basis of a rider&apos;s destination.
                    Intentionally refusing a route solely for the purpose of
                    avoiding a particular neighborhood due to the
                    characteristics of the people or businesses that are located
                    in that area is not allowed.
                  </li>

                  <li>
                    Using discriminatory language, making discriminatory
                    remarks, vilifying, or asking questions about sensitive
                    topics regarding national origin, race, ethnicity, or any
                    other trait previously mentioned. Making racist comments or
                    using slurs is never allowed.
                  </li>
                </ul>

                <p className="mb-4 text-gray-700 text-[14px]">
                  If you are subject to discrimination or witness discriminatory
                  behavior, you can report the incident to GuardianRide by
                  emailing{" "}
                  <a
                    href="support@guardianride.com."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    support@guardianride.com.
                  </a>
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Property damage
                </h3>

                <p className="mb-4 text-gray-700 text-[14px]">
                  Damaging property is never allowed. Some examples include
                  damaging the car or other mode of transportation requested
                  through the GuardianRide Platform, breaking or vandalizing a
                  phone or tablet, intentionally spilling food or drink, smoking
                  in a car, damaging a merchant’s premises, or vomiting due to
                  excessive alcohol consumption or otherwise. If you damage
                  property, you’re responsible for the cost of cleaning and
                  repair fees, outside of normal wear and tear. Intentional
                  damage may result in account deactivation.
                </p>
              </div>

              <h1
                id="helpkeeponeanothersafe"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                4. Help keep one another safe
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  We’re hard at work every day to help create safer experiences
                  for everyone. Your safety drives us. That’s why these
                  standards were written. Everyone has a role to play in helping
                  to create a safe environment.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Account sharing
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Account sharing is not allowed. For example, drivers must
                  complete their routes themselves.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Extra riders and non-account riders
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  When driving with GuardianRide, no one other than the driver
                  and the rider should be in the vehicle. These guidelines apply
                  unless our local guidelines, terms, or other policies say
                  otherwise. The guardian is responsible for the behavior of
                  their rider.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Vehicle information
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  For an easy pickup or delivery, the GuardianRide Platform
                  gives riders, guardians, and schools identifying information
                  about drivers and their vehicles, including their license
                  plate number, vehicle make and model, profile picture, and
                  name. Drivers must complete trips using only approved
                  vehicles.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">Seat belts</h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Every driver, and every rider—including those in the back
                  seat—should always buckle up.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Helmets for bikes, motorcycles, and scooters
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  For your safety, when riding a bike, e-bike, motorcycle, or
                  scooter, please use a well-fitting and buckled helmet, worn
                  according to the manufacturer’s instructions.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Recording video and/or audio
                </h3>
                <p className="mb-3 text-gray-700 text-[14px]">
                  All GuardianRide vehicles are fitted with a dashcam, which can
                  be used to record rides and provide evidence to GuardianRide,
                  law enforcement, or insurance companies in the event that
                  something goes wrong on a ride. Drivers and riders may choose
                  to use their phones to record rides as well. Please note:
                </p>

                <ul className="list-disc pl-6 mb-4 text-gray-700 text-[14px] space-y-2">
                  <li>
                    In some locations, local laws and regulations require that
                    individuals provide consent to being recorded and/or be
                    notified of recording in advance. Please check your local
                    laws to understand your responsibilities.
                  </li>
                  <li>
                    Users may submit recordings to GuardianRide at their
                    discretion. GuardianRide will review submitted footage and
                    take all action consistent with the Community Guidelines and
                    platform terms of use.
                  </li>
                  <li>
                    Sharing or streaming a person’s image or audio or video
                    recording on social media or in other digital or physical
                    public locations is a violation of our Community Guidelines
                    and may prompt further investigation by our safety team.
                  </li>
                </ul>

                <h3 className="font-semibold text-[14px] mb-2">
                  Proper maintenance and upkeep
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Pursuant to the terms of their agreements with GuardianRide
                  and applicable regulations, drivers are expected to keep their
                  vehicles maintained and in good operating condition. This
                  means maintaining their vehicle according to industry safety
                  and maintenance standards, and monitoring for and repairing
                  any parts that are recalled by the vehicle manufacturer.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Drive safely and carefully
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Drivers are expected to maintain an environment that makes
                  riders feel safe; even if driving practices don’t violate the
                  law, reports of dangerous driving can lead to the loss of
                  access to part or all of the GuardianRide Platform.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">Emergencies</h3>
                <p className="mb-3 text-gray-700 text-[14px]">
                  In case of an emergency or if you find yourself in immediate
                  danger, alert your local authorities or emergency services
                  before notifying GuardianRide.
                </p>

                <p className="mb-3 text-gray-700 text-[14px]">
                  We take threats of suicide and self-harm seriously and may
                  reach out to authorities to request a wellness check if we
                  receive notification that there is an imminent risk of
                  self-harm.
                </p>

                <p className="text-gray-700 text-[14px]">
                  For public emergencies, GuardianRide may take additional
                  measures to try to preserve the safety of our platform,
                  including but not limited to natural disasters, public health
                  emergencies, and public crisis situations.
                </p>
              </div>

              <h1
                id="followthelaw"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                5. Follow the law
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  We have standards based on applicable laws and regulations
                  that everyone must follow. For example, using the GuardianRide
                  Platform to commit any crime—such as transporting drugs, money
                  laundering, committing drug or human trafficking, or sexually
                  exploiting children—or to violate any other law is strictly
                  prohibited.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Follow all laws
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We’re committed to following all applicable laws and earning
                  your trust, and we expect everyone who uses the GuardianRide
                  Platform to do their part and to know and adhere to relevant
                  laws and regulations, including traffic laws. All relevant
                  licenses, permits, and any other legal documents required of
                  drivers and delivery people must be kept up to date.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  For riders, let your driver handle the driving: don’t ask a
                  driver or delivery person to speed or to make illegal stops,
                  dropoffs, or maneuvers.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">Car seats</h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Drivers and riders should comply with applicable laws when
                  traveling with infants and small children. Where the use of a
                  car seat is required by law, it’s the rider’s responsibility
                  to provide and fit a suitable car seat, unless our local
                  guidelines, terms, or other policies say otherwise. Children
                  age 12 and under should travel in the back seat.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  If a child does not appear to be within the height and weight
                  safety requirements for the car seat, or if a driver otherwise
                  feels that the child cannot be safely transported in the seat,
                  the driver can cancel the ride.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Service animals and assistive devices
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  It is against the law to deny a ride to a rider with a service
                  animal or assistive device (a wheelchair or crutches, for
                  example) because of the service animal or the assistive
                  device. In keeping with our policy, riders are allowed to
                  transport assistive devices and animals, whether pets or
                  service animals, pursuant to the terms and limitations of the
                  applicable law.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Drugs and alcohol
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Drugs and alcohol are never allowed while using the
                  GuardianRide Platform.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  If you’re a rider or guardian, and you have reason to believe
                  your driver may be under the influence of drugs or alcohol,
                  ask the driver to end the trip immediately. Then exit the
                  vehicle and call 911. Once you have left the vehicle, please
                  also report your experience to GuardianRide. You can learn
                  more about our Zero Tolerance Policy.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">Firearms ban</h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Riders as well as drivers are prohibited from carrying
                  firearms while using the GuardianRide Platform, to the extent
                  permitted by applicable law.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">Fraud</h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Deception can weaken trust and also be dangerous.
                  Intentionally falsifying information or assuming someone
                  else’s identity isn’t allowed. It is important to provide
                  honest and accurate information when reporting incidents, or
                  creating and accessing your GuardianRide accounts.
                </p>

                <h3 className="font-semibold text-[14px] mb-2">
                  Intellectual property guidelines
                </h3>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Never use GuardianRide’s trademark or intellectual property
                  without permission. Drivers should also return
                  GuardianRide-branded items to GuardianRide if they lose access
                  to the platform. The use of unauthorized or third-party items
                  may confuse riders. If it’s required under local law to
                  display GuardianRide-branded logos, only official
                  GuardianRide-branded logos should be used. Drivers should not
                  display GuardianRide-branded items when they are not accessing
                  the platform.
                </p>
              </div>

              <h1
                id="yourfeedbackmatters"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                6. Your feedback matters
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  If something happens, whether it’s good or bad, we make it
                  easy for you to tell us. Our team is continually improving our
                  standards, and your feedback is important to keep our
                  standards relevant as our technology evolves. Please rate your
                  experience at the end of each trip or delivery. And if
                  something happens—such as a traffic accident—and you want to
                  report it, you can email{" "}
                  <a
                    href="mailto:support@guardianride.com"
                    className="text-blue-600 underline"
                  >
                    support@guardianride.com
                  </a>{" "}
                  so that our Support team can follow up. In case of an
                  emergency or if you find yourself in immediate danger, alert
                  your local authorities or emergency services before notifying
                  GuardianRide.
                </p>

                <p className="text-gray-700 text-[14px]">
                  GuardianRide may at times permit or allow you and others who
                  use the GuardianRide Platform or GuardianRide’s tools or
                  social media channels to create, submit, upload, publish,
                  email, send messages, or otherwise make available textual,
                  audio, or visual content and information to GuardianRide or
                  users. Such activity and content is subject to GuardianRide’s
                  User Generated Content Terms.
                </p>
              </div>

              <h1
                id="howGuardianRideEnforcesOurGuidelines"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                7. How GuardianRide enforces our guidelines
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  If you violate any terms of your contractual agreement(s) with
                  GuardianRide, or any applicable terms or policies, including
                  any one of these Community Guidelines or any additional
                  policies and standards that are communicated by GuardianRide
                  to you from time to time, you can lose access to all or part
                  of the GuardianRide Platform. If you have more than one
                  GuardianRide account, such as a driver account and a guardian
                  account, violating the Community Guidelines could also lead
                  you to lose access to all GuardianRide accounts. If you
                  believe an error caused you to lose access to your account,
                  you may contact the GuardianRide Support team.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  GuardianRide receives feedback through a variety of channels
                  and reviews reports submitted to our Support team that may
                  violate our Community Guidelines. If we are made aware of
                  potentially problematic behavior, we may contact you so we can
                  look into it. We may, at our sole discretion, put a hold on
                  your account or turn your account inactive until our review is
                  complete.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  Not following any one of our guidelines may result in the loss
                  of access to all or part of the GuardianRide Platform. This
                  can include reported violations of our Community Guidelines
                  and certain actions you may take outside of the GuardianRide
                  Platform if we determine that those actions threaten the
                  safety of the GuardianRide community, our employees, and
                  contractors, or cause harm to GuardianRide’s brand,
                  reputation, or business. If the issues raised are serious,
                  repeated, or you refuse to cooperate, you may lose access to
                  the GuardianRide Platform. Any behavior involving
                  discrimination, violence, sexual misconduct, harassment,
                  fraud, or deceptive, illegal, or unsafe activity while using
                  the GuardianRide Platform can result in the immediate loss of
                  access to the platform. Additionally, when law enforcement is
                  involved, we will cooperate with their investigation. We may
                  also proactively report suspected criminal behavior to law
                  enforcement in accordance with our Privacy Notice. All drivers
                  and delivery people wanting to use the GuardianRide Platform
                  undergo a screening process, including motor vehicle record
                  and criminal background checks. A driver will lose access to
                  their GuardianRide account(s) if any check uncovers a matter
                  relevant to their use of the GuardianRide Platform that
                  violates GuardianRide’s standards or other criteria required
                  by local regulators.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  Many states, cities, and airports also regulate the provision
                  of certain services, including ridesharing services, on the
                  GuardianRide Platform. If your driver account is not in
                  compliance with applicable regulatory requirements, we may be
                  required to remove your access to the GuardianRide Platform.
                </p>

                <p className="text-gray-700 text-[14px] italic">
                  *Note: Drivers are not agents (actual, ostensible, or
                  otherwise) or employees of GuardianRide. They are independent
                  third-party providers.
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
