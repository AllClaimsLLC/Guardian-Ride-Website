"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  const [searchTerm, setSearchTerm] = useState("");

  // Map of section IDs to their titles
  const sections = {
    overview: "Overview",
    datacollection: "Data collections and uses",
    legal: "Legal Information",
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
                    GuardianRide Privacy Notice
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
                    When you use GuardianRide, you trust us with your personal
                    data. We’re committed to keeping that trust. That starts
                    with helping you understand our privacy practices.
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px]">
                    This notice describes the personal data (“data”) we collect,
                    how it’s used and shared, and your choices regarding this
                    data.
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px] font-semibold">
                    GuardianRide Privacy Notice: Drivers and Delivery People
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px]">
                    Previous version of the Privacy Notice
                  </p>

                  <div className="mb-4 text-gray-700 text-[14px] space-y-2">
                    <p className="font-semibold">I. Overview</p>
                    <p className="font-semibold">
                      II. Data collections and uses
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>A. The data we collect</li>
                      <li>B. How we use data</li>
                      <li>C. Core automated processes</li>
                      <li>D. Cookies and related technologies</li>
                      <li>E. Data sharing and disclosure</li>
                      <li>F. Data retention and deletion</li>
                    </ul>

                    <p className="font-semibold">
                      III. Choice and transparency
                    </p>

                    <p className="font-semibold">IV. Legal information</p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>A. Data controllers and Data Protection Officer</li>
                      <li>B. Our legal bases for using your data</li>
                      <li>C. Legal framework for data transfers</li>
                      <li>D. Updates to this Privacy Notice</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h1 id="overview" className="text-[20px] font-[500] mt-10 mb-4">
                1. Overview
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">Scope</p>{" "}
                <p className="mb-4 text-gray-700 text-[14px]">
                  This notice applies when you use GuardianRide’s apps or
                  websites to request or receive products or services, including
                  rides or deliveries.
                </p>{" "}
                <p className="mb-4 text-gray-700 text-[14px]">
                  This notice describes how we collect and use your data if you
                  request or receive products or services through GuardianRide’s
                  apps or websites.
                </p>{" "}
                <p className="mb-4 text-gray-700 text-[14px]">
                  This notice does not describe GuardianRide’s collection and
                  use of your data if you use GuardianRide to provide (instead
                  of request or receive) services through GuardianRide’s app or
                  websites, including as a driver. GuardianRide’s notice
                  describing our collection and use of such data is available
                  here. Those who use GuardianRide to either request, receive or
                  provide services are referred to as “users” in this notice.
                </p>{" "}
                <p className="mb-4 text-gray-700 text-[14px]">
                  Our privacy practices are subject to applicable laws in the
                  places in which we operate. The types of data processing that
                  such laws require, allow, or prohibit vary globally.
                  Therefore, if you travel across national, state or other
                  geographic borders, GuardianRide&apos;s data processing
                  practices described in this notice may differ from those in
                  your home country or territory.
                </p>
              </div>

              <h1
                id="datacollection"
                className="text-[20px] font-[500] mt-10 mb-4"
              >
                2. Data collections and uses
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="font-semibold mb-2">A. The data we collect</p>
                <p className="text-gray-700 text-[14px] mb-3">
                  GuardianRide collects data:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>That you provide</li>
                  <li>When you use our services</li>
                  <li>From other sources</li>
                </ul>
                <p className="text-gray-700 text-[14px] mb-3">
                  Please go here for a summary of the data we collect and how we
                  use it.
                </p>
                <p className="text-gray-700 text-[14px] mb-6">
                  GuardianRide collects the following data:
                </p>
                {/* ================= 1 ================= */}
                <p className="font-semibold mb-3">
                  1. Data you provide: This includes:
                </p>
                {/* a */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>a. Account information.</b> We collect data when you create
                  or update your GuardianRide account.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Address</li>
                  <li>Contact info (email or phone number)</li>
                  <li>First and last name</li>
                  <li>Login name and password</li>
                  <li>Phone number</li>
                  <li>
                    Payment method (including related payment verification
                    information)
                  </li>
                  <li>Profile photo</li>
                  <li>
                    Settings (including accessibility settings) and preferences
                  </li>
                </ul>
                {/* b */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>b. Demographic data.</b> We collect demographic data if
                  necessary to enable certain features. For example:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>We collect your date of birth and/or age</li>
                  <li>We collect or infer your gender</li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Age or date of birth</li>
                  <li>Gender or inferred gender (using first name)</li>
                </ul>
                {/* c */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>c. Identity verification information.</b> This refers to
                  the data that we collect to verify your account or identity.
                  This may include biometric data that allows you to be
                  identified based on your physical or biological
                  characteristics. For example, biometric data is generated when
                  we use facial verification technology to confirm that your
                  account is not being used by anyone other than you, your age,
                  or to prevent creation of fraudulent accounts.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Government-issued identification documents, such as driver’s
                    licenses or passports (which may contain identification
                    photos and numbers, expiration date, and demographics)
                  </li>
                  <li>User-submitted selfies</li>
                  <li>Facial verification information</li>
                </ul>
                {/* d */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>d. User content.</b> This refers to the data that we
                  collect when you:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>
                    Use features that enable you to create Lists or reviews of
                    restaurants or merchants.
                  </li>
                  <li>
                    Upload photos and recordings (including those submitted for
                    purposes of customer support).
                  </li>
                  <li>Respond to surveys</li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-6">
                  <li>Ratings or feedback</li>
                  <li>
                    Uploaded photos and audio or video recordings, including
                    in-app audio recordings, and user generated content
                  </li>
                  <li>Survey responses</li>
                </ul>
                {/* ================= 2 ================= */}
                <p className="font-semibold mb-3">
                  2. Data collected when you use our services: This includes:
                </p>
                {/* a */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>a. Location data.</b> We determine your approximate
                  location and can determine your precise location if you allow
                  us to do so through the settings on your phone. You can use
                  GuardianRide without letting us collect your precise location.
                  However, it may be less convenient for you, including because
                  you will have to type your location into your phone instead of
                  allowing us to detect it for you.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Approximate location</li>
                  <li>Precise location</li>
                </ul>
                {/* b */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>b. Trip information.</b> This refers to the details we
                  collect about your trip. Details collected about your trip.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Payment information (including amount charged and payment
                    method)
                  </li>
                  <li>Special instructions, allergies</li>
                  <li>Statistics derived from past trip information</li>
                  <li>
                    Trip details (date and time, requested pickup and dropoff
                    addresses, distance traveled)
                  </li>
                  <li>Tax ID (where required by local regulations)</li>
                </ul>
                {/* c */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>c. Usage data.</b> This refers to data about how you
                  interact with GuardianRide’s apps and websites.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>App crashes and other system activity</li>
                  <li>Access dates and times</li>
                  <li>App features or pages viewed</li>
                  <li>GuardianRide search history</li>
                  <li>
                    Data regarding your interactions with marketing and
                    advertising campaigns
                  </li>
                </ul>
                {/* d */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>d. Device data.</b> This refers to data about the device(s)
                  you use to access GuardianRide.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Advertising identifiers</li>
                  <li>Browser type</li>
                  <li>Device motion data</li>
                  <li>Device IP address or other unique device identifiers</li>
                  <li>Hardware models</li>
                  <li>Mobile network data</li>
                  <li>Operating systems and versions</li>
                  <li>Preferred languages</li>
                </ul>
                {/* e */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>e. Communications data.</b> This refers to the data we
                  collect when you (i) contact GuardianRide for customer
                  support, to report a safety concern, or other inquiries and
                  (ii) communicate with drivers and delivery people through
                  GuardianRide’s apps.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Communication type (phone or text message)</li>
                  <li>
                    Content (including audio recordings, recordings of phone
                    calls, call transcripts, and chat logs)
                  </li>
                  <li>Date and time</li>
                </ul>
                {/* f */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>f. In-Vehicle Recordings.</b> We will collect videos of you
                  taken by in-cabin cameras. We may also collect audio
                  recordings, such as when you contact GuardianRide during a
                  trip for customer support purposes.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-6">
                  <li>Visual and/or audio recordings</li>
                </ul>
                {/* ================= 3 ================= */}
                <p className="font-semibold mb-3">
                  3. Data from other sources: These include:
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    a. Law enforcement officials, public health officials and
                    other government authorities.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Name</li>
                  <li>Contact info</li>
                  <li>
                    Information relating to law enforcement, health or other
                    investigations
                  </li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    b. Marketing partners, advertisers, and service providers.
                    This includes banks in connection with cash back programs,*
                    and data resellers.*
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Usage data, including your engagement with marketing and
                    advertising campaigns
                  </li>
                  <li>Contact</li>
                  <li>Device</li>
                  <li>
                    Enrichment data such as demographics (age range, household
                    income range, gender), general interests and lifestyle,
                    general purchasing behavior, viewing preferences and
                    streaming habits.*
                  </li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    c. Service providers who help us verify your identity or
                    detect fraud.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Confirmation of whether your account information relates to
                    known persons
                  </li>
                  <li>Name</li>
                  <li>Contact info</li>
                  <li>Date of birth</li>
                  <li>
                    Information relating to the wireless carrier associated with
                    your phone, such as carrier name and network type
                  </li>
                  <li>
                    Government-issued identification documents such as driver’s
                    licenses or passports, and related information (such as
                    identification numbers, expiration date, and demographics)
                  </li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    d. GuardianRide account owners. This refers to GuardianRide
                    account owners who request services for you (such as friends
                    or family members), or who enable you to request services
                    through their accounts.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Name</li>
                  <li>Contact info</li>
                  <li>Location</li>
                  <li>Trip/order info</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    e. GuardianRide business partners (account creation and
                    access, and APIs). GuardianRide may receive your data from
                    business partners through which you create or access your
                    GuardianRide account, such as payment providers, social
                    media services, or apps or websites that use GuardianRide’s
                    APIs or whose APIs GuardianRide uses.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Varies depending on the business partner you use to create
                    or access your GuardianRide account, or the API used.
                  </li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    f. GuardianRide business partners (debit or credit cards).
                    GuardianRide may receive your data from business partners in
                    connection with debit or credit cards issued by a financial
                    institution in partnership with GuardianRide to the extent
                    disclosed in the terms and conditions for the card.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Debit or credit card activity information</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    g. Users or others providing information in connection with
                    customer support issues, claims or disputes.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1">
                  <li>Name</li>
                  <li>
                    Evidence relating to accidents, conflicts, claims or
                    disputes (which may include photos or recordings of you).
                  </li>
                </ul>
                {/* ===== Section B ===== */}
                <p className="font-semibold mt-8 mb-2">B. How we use data</p>
                <p className="text-gray-700 text-[14px] mb-3">
                  GuardianRide uses data to enable reliable and convenient
                  transportation, delivery, and other products and services. We
                  also use data:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    To enhance the safety and security of our users and
                    services, and to prevent and detect fraud
                  </li>
                  <li>For marketing and advertising</li>
                  <li>To enable communications between users</li>
                  <li>For customer support</li>
                  <li>For research and development</li>
                  <li>To send non-marketing communications to users</li>
                  <li>In connection with legal proceedings</li>
                </ul>
                {/* ================= 1 ================= */}
                <p className="font-semibold mb-3">
                  1. To provide our services. GuardianRide uses data to provide,
                  personalize, maintain, and improve our products and services.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>a. Creating and updating your account</b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Demographics</li>
                  <li>Location</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>b. Enabling services and features.</b> This includes:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>
                    Enabling navigation to pickups and dropoffs, calculating
                    ETAs and tracking the progress of rides or deliveries
                  </li>
                  <li>
                    Enabling navigation to pickups and dropoffs, calculating
                    ETAs and tracking the progress of rides or deliveries
                  </li>
                  <li>
                    Enabling features that involve data sharing, such as ETA
                    sharing and fare splitting
                  </li>
                  <li>Enabling accessibility features</li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Data from other sources</li>
                  <li>Demographics</li>
                  <li>Device</li>
                  <li>Ratings</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    d. Processing payments and enabling payment and e-money
                    products.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Data from other sources</li>
                  <li>Demographics</li>
                  <li>Trip/order</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>e. Personalizing your account.</b> For example, we may
                  present you with personalized restaurant or food
                  recommendations, or trip suggestions, based on your prior
                  orders, trips and delivery location.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Device</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>Usage</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    f. Providing you with trip or delivery updates and
                    generating receipts.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Trip/order</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    g. Informing you of changes to our terms, services, or
                    policies.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Trip/order</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    h. Performing necessary operations to maintain our services,
                    including to troubleshoot software bugs and operational
                    problems.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-6">
                  <li>Account</li>
                  <li>Device</li>
                  <li>Usage</li>
                </ul>
                {/* ================= 2 ================= */}
                <p className="font-semibold mb-3">
                  2. For safety, security, and fraud prevention and detection.
                  We use data to help maintain the safety and security of our
                  services and users.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    a. Verifying your account, identity or compliance with
                    safety requirements.
                  </b>{" "}
                  This includes:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Verifying that you are who you say you are by using the
                    account information you provide during signup (such as name,
                    contact information, date of birth or payment information)
                    alongside insights from identity and fraud prevention
                    third-party databases
                  </li>
                  <li>
                    Verifying your age and that your account is being used by
                    you and not someone else by: Collecting your ID number
                    and/or a photo of your ID, and completing a verification to
                    confirm that the ID is valid, unaltered and that no other
                    account is associated with that document* , Collecting a
                    real-time selfie that we compare against the photo on your
                    ID or your profile photo to confirm that the photos are of
                    the the same person*
                  </li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Data from other sources (third-party databases)</li>
                  <li>Demographics</li>
                  <li>Identity verification (In-vehicle recordings)</li>
                  <li>User content</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    b. Preventing, detecting, and combating fraud, including by
                    Guest Users.
                  </b>
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Communications between users</li>
                  <li>Data from other sources (driver data)</li>
                  <li>Demographics</li>
                  <li>Device</li>
                  <li>Identity verification</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>Usage</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    c. Predicting and helping avoid pairings of users that may
                    result in increased risk of conflict,* or where one user has
                    previously given the other a low (for instance, one star)
                    rating.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Trip/order (including cancellation rates)</li>
                  <li>Usage</li>
                  <li>User content (ratings and reported incidents)</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    d. Providing live support from safety experts during trips
                    or deliveries.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account (phone, user name, vehicle details)</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>User content</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    e. Enforcing GuardianRide’s Terms and Conditions, Community
                    Guidelines, and other policies and standards that are
                    communicated to you.
                  </b>
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Communications</li>
                  <li>Data from other sources (driver data)</li>
                  <li>Device</li>
                  <li>Identity verification</li>
                  <li>In-vehicle recordings</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>Usage</li>
                </ul>
                {/* ================= 3 ================= */}
                <p className="font-semibold mb-3">
                  3. For marketing and advertising. GuardianRide uses data
                  (except Guest Users’ data) to market its services, and those
                  of GuardianRide partners.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    a. Personalizing marketing and ads relating to GuardianRide
                    products and services, and those offered by other companies.
                  </b>{" "}
                  For example, GuardianRide may:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Use your personal data to understand your interests,
                    preferences, or characteristics about you, and personalize
                    ads we show you.
                  </li>
                  <li>
                    Send push notifications suggesting your favorite
                    destinations or merchants, or in-app messages offering
                    discounts or promotions for products or merchants similar to
                    those you’ve previously ordered.
                  </li>
                  <li>
                    Display personalized ads on GuardianRide or other companies’
                    apps or websites. To do this, GuardianRide builds groups, or
                    audiences, based on your interests, preferences, or
                    characteristics, and prioritizes what ad to show you based
                    on what audience our advertisers want to reach.
                  </li>
                  <li>
                    Personalize sponsored listings, discounts or promotions for
                    restaurants and merchants available on GuardianRide.
                  </li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Data from other sources</li>
                  <li>Data from other sources (driver data)</li>
                  <li>Demographics (including inferred gender)</li>
                  <li>Device</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>Usage</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    b. Displaying ads that are targeted based on data about your
                    current trip or delivery request, including time of request
                    and services requested. For example, if you request a trip
                    to a supermarket, we may display in-app ads for third-party
                    products that may be available at that supermarket.
                  </b>
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Data from other sources</li>
                  <li>Data from other sources (driver data)</li>
                  <li>Demographics (including inferred gender)</li>
                  <li>Device</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>Usage</li>
                </ul>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>
                    c. Measuring the effectiveness of marketing and ads, and
                    optimizing our advertising and marketing campaigns.
                  </b>{" "}
                  For example, GuardianRide may:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>
                    Use your data to determine whether your usage of our apps
                    and websites can be attributed to specific marketing
                    campaigns about GuardianRide products and services.
                  </li>
                  <li>
                    Use data about your interaction with ads to help our
                    advertisers understand the performance of their ad campaigns
                    served by GuardianRide.
                  </li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Device</li>
                  <li>Usage</li>
                </ul>
                {/* ================= 4 ================= */}
                <p className="font-semibold mb-3">
                  4. To enable communications between users.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  For example, a driver may message or call you to confirm a
                  pickup location, you may call a driver to retrieve a lost
                  item, or a restaurant or delivery person may contact you with
                  information about your order.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Device</li>
                  <li>Usage</li>
                </ul>
                {/* ================= 5 ================= */}
                <p className="font-semibold mb-3">5. For customer support.</p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  This includes investigating and addressing user concerns,
                  including investigating user reported misconduct (such as
                  inappropriate messages or fraud), monitoring and improving our
                  customer support responses and processes, and identifying
                  potential participants in research studies relating to
                  customer support issues. GuardianRide may use GenAI tools for
                  these purposes.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Communications</li>
                  <li>Device</li>
                  <li>Identity verification info</li>
                  <li>Data from other sources</li>
                  <li>Location</li>
                  <li>Usage</li>
                  <li>User content</li>
                  <li>Trip/order</li>
                  <li>In-vehicle recordings</li>
                </ul>
                {/* ================= 6 ================= */}
                <p className="font-semibold mb-3">
                  6. For research and development.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  We use data for analysis, research and product development,
                  including training machine learning models. This helps us make
                  our services more convenient and easy to use, enhance the
                  safety and security of our services, and develop new services
                  and features.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Communications</li>
                  <li>Data from other sources</li>
                  <li>Demographics</li>
                  <li>Device</li>
                  <li>Identity verification</li>
                  <li>Location</li>
                  <li>Usage</li>
                  <li>User content</li>
                  <li>Trip/order</li>
                </ul>
                {/* ================= 7 ================= */}
                <p className="font-semibold mb-3">
                  7. For non-marketing communications.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  This includes surveys and communications regarding elections,
                  ballots, referenda and other political processes that relate
                  to our services. For example, we may notify you of ballot
                  measures or pending legislation relating to GuardianRide’s
                  services where you live.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Location</li>
                </ul>
                {/* ================= 8 ================= */}
                <p className="font-semibold mb-3">
                  8. For legal proceedings and requirements.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  We use data to investigate or address claims or disputes
                  relating to use of GuardianRide’s services; to satisfy
                  requirements under and/or for purposes of compliance with,
                  applicable laws, regulations, operating licenses, agreements
                  or insurance policies; or pursuant to legal process or
                  governmental request, including from law enforcement.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Types:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-2">
                  <li>Account</li>
                  <li>Communications</li>
                  <li>Data from other sources</li>
                  <li>Demographics</li>
                  <li>Device</li>
                  <li>Identity verification</li>
                  <li>Location</li>
                  <li>Usage</li>
                  <li>User content</li>
                  <li>Trip/order</li>
                  <li>In-vehicle recordings</li>
                </ul>
                {/* ===== Section C ===== */}
                <p className="font-semibold mt-8 mb-2">
                  C. Core automated processes
                </p>
                <p className="text-gray-700 text-[14px] mb-3">
                  GuardianRide uses automated processes to enable certain parts
                  of our products and services, including functions essential
                  for service delivery and user safety such as matching, pricing
                  and fraud prevention and detection.
                </p>{" "}
                <p className="text-gray-700 text-[14px] mb-3">
                  GuardianRide relies on automated processes to enable essential
                  parts of our services, including matching (pairing users
                  requesting and providing transportation), pricing (calculating
                  the amount owed for such services) and fraud detection and
                  prevention. These processes allow GuardianRide to provide a
                  seamless, and safe, experience to millions of users globally
                  every day.
                </p>{" "}
                <p className="text-gray-700 text-[14px] mb-3">
                  This section describes how automated matching and fraud
                  prevention and detection processes work, including how they
                  impact your GuardianRide experience and the personal and
                  non-personal data used to enable these processes.
                </p>{" "}
                <p className="text-gray-700 text-[14px] mb-3">
                  You may contact GuardianRide if you have questions or concerns
                  regarding these processes.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>1. Matching</b>
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide uses algorithms to efficiently match you with
                  drivers. Our algorithms evaluate various factors to determine
                  the best match, including your location, requested
                  destination, and historical data (including whether you and a
                  driver have previously reported having negative experiences
                  with each other). We are constantly refining our matching
                  process to provide the best experience to all users on our
                  platform and may consider different factors depending on the
                  location where you use GuardianRide.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>2. Fraud prevention and detection</b>
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide uses algorithms to prevent and detect fraud
                  against GuardianRide or our users. This includes efforts to
                  monitor for account takeovers, suspicious user behaviors, and
                  unauthorized access attempts, including by third-party
                  aggregators.
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  These tools look for patterns that may indicate fraudulent
                  behavior, such as those that vary significantly from typical
                  user behavior. To do this, GuardianRide performs real-time
                  monitoring of information collected from or generated by
                  users, including location data, payment information, and
                  GuardianRide usage. We also examine historical data and
                  compare it against real-time data to help detect suspicious
                  behavior.
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide may limit your access to its services, or require
                  that you undertake a particular action such as verifying your
                  identity before allowing such access, if it detects potential
                  fraudulent activity.
                </p>
                <p className="text-gray-700 text-[14px]">
                  You may contact GuardianRide customer support if you have
                  questions or concerns about these processes.
                </p>
                {/* ===== Section d ===== */}
                <p className="font-semibold mt-8 mb-2">
                  D. Cookies and related technologies
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide and its partners use cookies and other online
                  identifiers on our apps, websites, emails and online ads for
                  purposes described in this notice.
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  Cookies are small text files that are stored on browsers or
                  devices by websites, apps, online media and ads. GuardianRide
                  uses cookies and similar technologies for purposes such as:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Authenticating users</li>
                  <li>Remembering user preferences and settings</li>
                  <li>Determining the popularity of content</li>
                  <li>
                    Delivering and measuring the effectiveness of advertising
                    campaigns
                  </li>
                  <li>
                    Analyzing site traffic and trends, and generally
                    understanding the online behaviors and interests of people
                    who interact with our services
                  </li>
                </ul>
                <p className="text-gray-700 text-[14px]">
                  We may also allow others to provide audience measurement and
                  analytics services for us, to serve ads on our behalf across
                  the internet or for other companies’ products and services on
                  our apps, and to track and report on the performance of those
                  ads. These entities may use cookies, web beacons, SDKs and
                  other technologies to identify the devices used by visitors to
                  our websites, as well as when they visit other online sites
                  and services.
                </p>
                {/* ===== Section E ===== */}
                <p className="font-semibold mt-8 mb-2">
                  E. Data sharing and disclosure
                </p>
                <p className="text-gray-700 text-[14px] mb-3">
                  We share your data with other users where necessary to provide
                  our services or features, at your request, or with your
                  consent. We also share data with our affiliates, subsidiaries,
                  service providers and partners, for legal reasons, or in
                  connection with claims or disputes. GuardianRide may share
                  data:
                </p>
                {/* ================= 1 ================= */}
                <p className="font-semibold mb-3">1. With other users</p>
                <p className="font-semibold mb-3">
                  This may include sharing data with:
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>Recipient</b>
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">Your driver</p>
                <p className="font-semibold mt-2 mb-1">Data Shared:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account (First name and Rating)</li>
                  <li>Pickup and/or dropoff locations</li>
                  <li>
                    Settings (including accessibility settings) and preferences
                  </li>
                </ul>
                <p className="font-semibold mb-3">
                  2. Upon request or with your consent
                </p>
                <p className="font-semibold mb-3">
                  This may include sharing data with:
                </p>
                {/* Recipient 1 */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>Recipient</b>
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  GuardianRide business partners. We share data with companies
                  whose apps or websites you access through GuardianRide,
                  including for purposes of promotions, contests or specialized
                  services.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Shared:</p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  Depending on the app or website you access through
                  GuardianRide, and for what purpose, data may include:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Device</li>
                  <li>Trip/order</li>
                </ul>
                {/* Recipient 2 */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>Recipient</b>
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  Emergency services. We enable you to share your data with
                  police, fire, and ambulance services in the event of an
                  emergency or after certain incidents. For more information,
                  please go to the “Choice and transparency” and “Emergency data
                  sharing” sections below.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Shared:</p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>Requested pickup/dropoff</li>
                </ul>
                {/* Recipient 3 */}
                <p className="mb-2 text-gray-700 text-[14px]">
                  <b>Recipient</b>
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  Insurance companies. If you are involved in an incident, or
                  report or submit a claim to an insurance company relating to
                  GuardianRide’s services, GuardianRide will share data with
                  that insurance company for the purpose of adjusting or
                  handling that claim.
                </p>
                <p className="font-semibold mt-2 mb-1">Data Shared:</p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  Data necessary to adjust or handle the claim may include:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-4">
                  <li>Account</li>
                  <li>Communications</li>
                  <li>Device</li>
                  <li>Location</li>
                  <li>Trip/order</li>
                  <li>Usage</li>
                  <li>User content</li>
                </ul>
                {/* ================= 3 ================= */}
                <p className="font-semibold mb-3">
                  3. With GuardianRide service providers and business partners
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  These include the third parties, or categories of third
                  parties, listed below.
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-1 mb-6">
                  <li>
                    Accountants, consultants, lawyers, and other professional
                    service providers.
                  </li>

                  <li>
                    Ad and marketing partners and providers, including ad and
                    marketing publishers (such as social media platforms), ad
                    networks and advertisers, third-party data providers, ad
                    technology vendors, measurement and analytics providers, and
                    other service providers. GuardianRide uses these vendors to
                    reach or better understand current and potential users of
                    GuardianRide services or of our advertising partners, and
                    measure and improve ad effectiveness. For example, we share
                    audience lists with ad and marketing publishers in which
                    users are identified by limited data points (e.g., mobile
                    advertising ID, hashed email, name) and grouped based on
                    inferred interests and characteristics. GuardianRide
                    instructs ad and marketing publishers to target these
                    groups, or audiences, with ads.
                  </li>

                  <li>
                    Ad intermediaries. We share data - including advertising or
                    device identifier, hashed email address, approximate
                    location, current trip or order information, and ad
                    interaction data - with these intermediaries to enable their
                    services and for such other purposes as are disclosed in
                    their privacy notices. You may opt out from ad
                    personalization.
                  </li>

                  <li>Customer support platform and service providers.</li>
                  <li>
                    <a
                      href="https://policies.google.com/privacy?hl=en-US"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Google
                    </a>
                    , in connection with the use of Google Maps in
                    GuardianRide’s apps. Identity verification and risk
                    solutions providers.
                  </li>
                  <li>Payment processors and facilitators.</li>
                  <li>
                    Research partners, including those performing surveys or
                    research projects in partnership with GuardianRide or on
                    GuardianRide’s behalf.
                  </li>
                  <li>
                    Social media companies in connection with GuardianRide’s use
                    of their tools in GuardianRide’s apps and websites.
                  </li>
                  <li>
                    Service providers that assist GuardianRide to enhance the
                    safety and security of GuardianRide apps and services.
                  </li>
                  <li>
                    Service providers that provide us with artificial
                    intelligence and machine learning tools and services.
                  </li>
                  <li>
                    Third-party service providers and partners that integrate
                    with GuardianRide’s apps.
                  </li>
                  <li>
                    Third-party vehicle suppliers, including fleet and rental
                    partners.
                  </li>
                  <li>
                    Autonomous vehicle partners that provide rides on
                    GuardianRide apps.
                  </li>
                </ul>
                {/* ================= 4 ================= */}
                <p className="font-semibold mb-3">
                  4. With GuardianRide subsidiaries and affiliates
                </p>
                <p className="mb-6 text-gray-700 text-[14px]">
                  We share data with our subsidiaries and affiliates to help us
                  provide our services or conduct data processing on our behalf.
                </p>
                {/* ================= 5 ================= */}
                <p className="font-semibold mb-3">
                  5. For legal reasons or in the event of a claim or dispute
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide may share your data if we believe it’s required
                  by applicable law, regulation, operating license or agreement,
                  legal process or governmental request, insurance policy, or
                  where the disclosure is otherwise appropriate due to safety or
                  similar concerns.
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  This includes sharing data with law enforcement officials,
                  public health officials, other government authorities,
                  insurance companies, third-party fleet partners, or other
                  third parties as necessary to enforce our terms and
                  conditions, user agreements, or other policies; to protect
                  GuardianRide’s rights or property or the rights, safety or
                  property of others; or in the event of a claim or dispute
                  relating to the use of our services. In the event of a dispute
                  relating to use of another person’s credit card, we may be
                  required by law to share a user’s data, including trip or
                  order information, with the owner of that credit card. For
                  more information, please see GuardianRide’s Guidelines for
                  United States Law Enforcement.
                </p>
                <p className="text-gray-700 text-[14px]">
                  We may also share data with others in connection with, or
                  during negotiations of, any merger, sale of company assets,
                  consolidation or restructuring, financing, or acquisition of
                  all or a portion of our business by or into another company.
                </p>
                {/* ===== Section F ===== */}
                <p className="font-semibold mt-8 mb-2">
                  F. Data retention and deletion
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide retains your data for as long as necessary for
                  the purposes described above. Users may request account
                  deletion through the GuardianRide apps and websites.
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide retains your data for as long as necessary for
                  the purposes described above. Those periods vary depending on
                  the type of data, and the purposes for which we collect and
                  maintain it.
                </p>
                <p className="mb-2 text-gray-700 text-[14px]">
                  For example, we retain your data:
                </p>
                <ul className="list-disc ml-6 text-[14px] space-y-2 mb-4">
                  <li>
                    for as long as you maintain your GuardianRide account (i.e.,
                    the life of your account, or “LOA”) where it is necessary in
                    order for GuardianRide to provide its service. This includes
                    account information, like your first and last name, email,
                    phone number and payment information.
                  </li>

                  <li>
                    For 7 years from collection (unless you first delete your
                    GuardianRide account) if necessary for purposes of
                    GuardianRide’s tax, insurance, legal or regulatory
                    requirements; subject to GuardianRide’s legitimate interests
                    in defending against, or asserting, legal claims; or where
                    necessary for purposes such as research and development.
                  </li>

                  <li>
                    For only as long as required to enable specific services or
                    features. For example, if you submit an image of your ID to
                    verify your age for alcohol delivery where required by law,
                    we delete such images within 48 hours unless longer
                    retention is required by law.
                  </li>
                </ul>
                <p className="mb-4 text-gray-700 text-[14px]">
                  The following table lists GuardianRide’s retention practices
                  with respect to categories of data described above.
                  GuardianRide may retain data for longer, or shorter, than the
                  periods described below where required by law.
                </p>
                {/* Retention Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left border border-gray-200 text-[14px]">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2">Data Category</th>
                        <th className="border px-4 py-2">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Account</td>
                        <td className="border px-4 py-2">LOA</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Communications</td>
                        <td className="border px-4 py-2">
                          The sooner of LOA or 7 years
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Demographic</td>
                        <td className="border px-4 py-2">LOA</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Device</td>
                        <td className="border px-4 py-2">LOA</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          Identity Verification
                        </td>
                        <td className="border px-4 py-2">
                          1 year for government IDs <br />3 years for
                          user-submitted selfies
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Location Data</td>
                        <td className="border px-4 py-2">
                          The sooner of LOA or 7 years
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Trip/Order</td>
                        <td className="border px-4 py-2">
                          The sooner of LOA or 7 years
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Usage Data</td>
                        <td className="border px-4 py-2">
                          The sooner of LOA or 7 years
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-3 text-gray-700 text-[14px]">
                  Where GuardianRide does not need to retain your data in order
                  for GuardianRide to provide its services, or for purposes of
                  our tax, insurance, legal or regulatory requirements, we will
                  delete your data once no longer necessary for the purposes for
                  which we collected it. Such periods vary depending on the type
                  of data and the purposes for which we collected it. For
                  example, we generally delete certain information that we use
                  to display personalized marketing and advertising to you after
                  approximately one year, if not sooner.
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  Following an account deletion request, we delete your account
                  and data, except as necessary for purposes of safety,
                  security, fraud prevention or compliance with legal
                  requirements, or because of issues relating to your account
                  (such as an outstanding credit or an unresolved claim or
                  dispute). For example, if you are banned from GuardianRide’s
                  services because of serious fraudulent or unsafe behavior,
                  GuardianRide will retain your data after an account deletion
                  request to prevent you from re-obtaining access to
                  GuardianRide’s platform.
                </p>
                <p className="mb-3 text-gray-700 text-[14px]">
                  The data that we retain in such situations varies depending on
                  the purpose for the retention. For example, if we retain your
                  data due to fraudulent behavior, we will retain the data
                  relating to such behavior, and the data that we need to
                  prevent you from further accessing GuardianRide’s platform,
                  which may include your account information, identity
                  verification information, transaction data, and user content
                  and communications data. Similarly, if you are involved in an
                  incident while using GuardianRide that may lead to litigation
                  or an insurance claim, we will retain the data that is
                  potentially relevant to such litigation or insurance claim.
                </p>
                <p className="text-gray-700 text-[14px]">
                  We generally delete data within 90 days of an account deletion
                  request, except where retention is necessary for the reasons
                  described above.
                </p>
              </div>

              <h1 id="legal" className="text-[20px] font-[500] mt-10 mb-4">
                3. Legal Information
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                {/* ===== Section A ===== */}
                <p className="font-semibold mb-2">
                  A. Data controllers and Data Protection Officer
                </p>

                <p className="mb-3 text-gray-700 text-[14px]">
                  GuardianRide, LLC. is the sole controller of the data
                  processed by GuardianRide when you use GuardianRide’s services
                  globally, except where it is a joint controller with other
                  GuardianRide affiliates.
                </p>

                <p className="mb-6 text-gray-700 text-[14px]">
                  GuardianRide, LLC. (“GL”) is the controller of the data
                  processed by GuardianRide when you use GuardianRide’s services
                  globally.
                </p>

                {/* ===== Section B ===== */}
                <p className="font-semibold mb-2">
                  B. Updates to this Privacy Notice
                </p>

                <p className="mb-3 text-gray-700 text-[14px]">
                  We may occasionally update this notice. If we make significant
                  changes, we will notify you in advance of the changes through
                  the GuardianRide apps or through other means, such as email.
                  We encourage you to periodically review this notice for the
                  latest information on our privacy practices.
                </p>

                <p className="text-gray-700 text-[14px]">
                  Use of our services after an an update constitutes consent to
                  the updated notice to the extent permitted by law.
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
