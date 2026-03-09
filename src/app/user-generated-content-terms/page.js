"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function UserGeneratedContentTerms() {
  const [searchTerm, setSearchTerm] = useState("");

  // Map of section IDs to their titles
  const sections = {
    guardianridesroleregardingusergeneratedcontent:
      "GuardianRide’s role regarding User Generated Content",
    licencetousergeneratedcontent: "Licence to User Generated Content",
    representationsandwarranties: "Representations and Warranties",
    indemnification: "Indemnification",
    violationofterms: "Violation of Terms",
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
                    User Generated Content Terms
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
                    GuardianRide, LLC., including its subsidiaries and
                    affiliates (collectively, “GuardianRide”), may, at its sole
                    discretion, permit or allow you and others, including
                    drivers, riders, schools, guardians, and other businesses or
                    partners (in either case “User” or “you”) who use
                    GuardianRide’s platform(s), tools, or social media channels,
                    from time to time to create, submit, upload, publish, email,
                    send messages, or otherwise make available textual, audio,
                    or visual content and information, including commentary,
                    reviews, initiation of support requests, merchants
                    communication with consumers, and submission of entries for
                    competitions and promotions (&quot;User Generated Content”,
                    or “UGC&quot;) to GuardianRide or Users. By accessing or
                    using the Services to provide UGC, you confirm your
                    agreement to be bound by these User Generated Content Terms
                    (“Terms”). These Terms may also be subject to other
                    agreements you have with GuardianRide and/or applicable
                    terms. PLEASE READ THESE TERMS CAREFULLY, AS THEY CONSTITUTE
                    A LEGAL AGREEMENT BETWEEN YOU AND GUARDIANRIDE. In these
                    Terms, the words “including” and &quot;include” mean
                    “including, but not limited to.”
                  </p>
                </div>
              </div>

              <h1
                id="guardianridesroleregardingusergeneratedcontent"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                1. GuardianRide’s role regarding User Generated Content
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  You acknowledge that GuardianRide is an online service
                  provider and is not a publisher of UGC; nonetheless,
                  GuardianRide may, but shall not be obligated to, review or
                  monitor UGC and may, at its sole discretion, refuse to
                  display, remove, edit, or disable UGC for any reason,
                  including if GuardianRide determines that UGC may negatively
                  affect GuardianRide or that UGC violates these Terms, the
                  General Community Guidelines, the terms of any other agreement
                  that you have with GuardianRide, any UGC or other content
                  creation guidelines and/or policies that may be provided to
                  you by GuardianRide from time to time, or applicable codes,
                  laws, legislation, licences, orders (including court orders),
                  ordinances, rules, regulations, or any other requirement
                  imposed by a government authority. GuardianRide does not
                  endorse or approve any UGC available on the Services.
                  GuardianRide has the right to display any UGC submitted by You
                  on its Platform(s) in accordance with these Terms and shall
                  have the right to combine such UGC with any UGC created by
                  other Users, as well as any content created by GuardianRide
                  itself.
                </p>
              </div>

              <h1
                id="licencetousergeneratedcontent"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                2. Licence to User Generated Content
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  UGC remains your property; however, you grant GuardianRide a
                  worldwide, perpetual, irrevocable, transferable,
                  sub-licensable, royalty-free licence to use, copy, modify,
                  create derivative works of, distribute, publicly display,
                  publicly perform, and otherwise exploit in any manner such UGC
                  in all formats and distribution channels now known or
                  hereafter devised (including in connection with the Services
                  and GuardianRide&apos;s business, and on third-party sites and
                  services), without further notice to or consent from you, and
                  without the requirement of payment to you or any other person
                  or entity.
                </p>
              </div>

              <h1
                id="representationsandwarranties"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                3. Representations and Warranties
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  You represent and warrant that: (i) you either are the sole
                  and exclusive owner of all UGC or you have all rights,
                  licences, consents and releases necessary to grant
                  GuardianRide the licence to the UGC as set forth above; (ii)
                  neither the UGC, nor your submission, uploading, publishing,
                  emailing, messaging, or otherwise making available of such
                  UGC, nor GuardianRide&apos;s use of the UGC as permitted
                  herein will infringe, misappropriate or violate a third
                  party&apos;s intellectual property or proprietary rights, or
                  rights of publicity or privacy, or result in the violation of
                  any applicable codes, laws, legislation, licences, orders
                  (including court orders), ordinances, rules, regulations, or
                  any other requirement imposed by a government authority; and
                  (iii) you assume all risks (including accuracy and
                  reliability) associated with the content and shall not imply
                  in any UGC that the content is endorsed or verified by
                  GuardianRide.
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  When providing UGC or otherwise using the Services, you agree
                  that you will not:
                </p>

                <ul className="list-disc pl-6 text-gray-700 text-[14px] space-y-2">
                  <li>
                    Do or allow to be done anything which will or is reasonably
                    likely to adversely affect the Services or GuardianRide.
                  </li>
                  <li>
                    Use the Services to cause nuisance, annoyance,
                    inconvenience, or property damage, including using vulgar or
                    harassing language, hate speech, abusive behavior, or
                    spamming.
                  </li>
                  <li>
                    Contribute UGC that is inappropriate, abusive, harassing,
                    profane, threatening, hateful, offensive, vulgar, obscene,
                    sexually explicit, derogatory, defamatory, infringing,
                    invasive of another person’s privacy, inaccurate, or
                    otherwise reasonably objectionable.
                  </li>
                  <li>
                    Provide content that you don&apos;t have permission to
                    freely distribute, including the personal information of
                    another person.
                  </li>
                  <li>
                    Modify, adapt, appropriate, reproduce, distribute,
                    translate, create derivative works or adaptations of,
                    publicly display, sell, trade, incorporate into
                    advertisements, or in any way use another User’s UGC, except
                    as expressly authorised by GuardianRide or the owner of the
                    UGC.
                  </li>
                  <li>
                    Impersonate another person or falsely claim or imply that
                    you are a GuardianRide employee, representative, or driver.
                  </li>
                  <li>
                    Attempt to obtain, or phish for, a password, account
                    information, or other private information from anyone else
                    using the Services.
                  </li>
                  <li>
                    Use any robot, spider, or other automated device or process
                    to access the Services for any purpose or copy any material
                    from the Services.
                  </li>
                  <li>
                    Attempt to use the Services on or through any service that
                    is not controlled or authorised by GuardianRide.
                  </li>
                  <li>
                    Promote a business, other commercial venture, food delivery
                    platform, or venue, or otherwise use the Services for
                    commercial purposes, except in connection with your account
                    with GuardianRide in accordance with your agreement, these
                    Terms, and/or Merchant online terms and conditions.
                  </li>
                  <li>
                    Promote or encourage any prohibited activity described
                    above.
                  </li>
                </ul>
              </div>

              <h1
                id="indemnification"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                4. Indemnification
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  You will indemnify, defend, and hold harmless GuardianRide,
                  its Affiliates, and their respective directors, officers,
                  employees, agents, successors, and assigns, against all
                  claims, damages, losses, and expenses (including reasonable
                  outside legal fees) with respect to any third-party claim(s)
                  arising out of or related to the UGC. You agree that the
                  provisions in this section will survive any termination of
                  your account or these Terms.
                </p>
              </div>

              <h1
                id="violationofterms"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                5. Violation of Terms
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  If you or someone using your account with GuardianRide
                  violates these Terms or fails to remedy a violation after a
                  warning, GuardianRide may take action against you, including
                  revoking access to certain or all of the Services, or
                  terminating your account. In case of severe violations,
                  GuardianRide may take these actions without issuing a prior
                  warning. When appropriate, GuardianRide will notify you of the
                  action it will take in response to violations of these rules
                  or breach of these Terms.
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Specific GuardianRide Services may post additional rules that
                  apply to your conduct on those services.
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
