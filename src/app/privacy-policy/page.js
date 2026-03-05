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
                    with helping you understand our privacy practices. This
                    notice describes the personal data (“data”) we collect, how
                    it’s used and shared, and your choices regarding this data.
                    GuardianRide Privacy Notice: Drivers and Delivery People
                    Previous version of the Privacy Notice I. Overview II. Data
                    collections and uses   A. The data we collect   B. How we
                    use data   C. Core automated processes   D. Cookies and
                    related technologies   E. Data sharing and disclosure   F.
                    Data retention and deletion III. Choice and transparency IV.
                    Legal information   A. Data controllers and Data Protection
                    Officer   B. Our legal bases for using your data   C. Legal
                    framework for data transfers   D. Updates to this Privacy
                    Notice
                  </p>
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
                <p className="mb-4 text-gray-700 text-[14px]">
                  Scope This notice applies when you use GuardianRide’s apps or
                  websites to request or receive products or services, including
                  rides or deliveries. This notice describes how we collect and
                  use your data if you request or receive products or services
                  through GuardianRide’s apps or websites. This notice does not
                  describe GuardianRide’s collection and use of your data if you
                  use GuardianRide to provide (instead of request or receive)
                  services through GuardianRide’s app or websites, including as
                  a driver. GuardianRide’s notice describing our collection and
                  use of such data is available here. Those who use GuardianRide
                  to either request, receive or provide services are referred to
                  as “users” in this notice. Our privacy practices are subject
                  to applicable laws in the places in which we operate. The
                  types of data processing that such laws require, allow, or
                  prohibit vary globally. Therefore, if you travel across
                  national, state or other geographic borders,
                  GuardianRide&apos;s data processing practices described in
                  this notice may differ from those in your home country or
                  territory.
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
                <p className="mb-4 text-gray-700 text-[14px]">
                  II. Data collections and uses A. The data we collect
                  GuardianRide collects data: 1. That you provide 2. When you
                  use our services 3. From other sources Please go here for a
                  summary of the data we collect and how we use it. GuardianRide
                  collects the following data: 1. Data you provide: This
                  includes: Data category Data types a. Account information. We
                  collect data when you create or update your GuardianRide
                  account. Address Contact info (i.e., email or phone number)
                  First and last name Login name and password Phone number
                  Payment method (including related payment verification
                  information) Profile photo Settings (including accessibility
                  settings) and preferences b. Demographic data. We collect
                  demographic data if necessary to enable certain features. For
                  example: We collect your date of birth and/or age We collect
                  or infer your gender Age or date of birth Gender or inferred
                  gender (using first name) c. Identity verification
                  information. This refers to the data that we collect to verify
                  your account or identity. This may include biometric data that
                  allows you to be identified based on your physical or
                  biological characteristics. For example, biometric data is
                  generated when we use facial verification technology to
                  confirm that your account is not being used by anyone other
                  than you, your age, or to prevent creation of fraudulent
                  accounts. Government-issued identification documents, such as
                  driver’s licenses or passports (which may contain
                  identification photos and numbers, expiration date, and
                  demographics) User-submitted selfies Facial verification
                  information d. User content. This refers to the data that we
                  collect when you: Use features that enable you to create Lists
                  or reviews of restaurants or merchants. Upload photos and
                  recordings (including those submitted for purposes of customer
                  support). Respond to a survey. Ratings or feedback Uploaded
                  photos and audio or video recordings, including in-app audio
                  recordings, and user generated content Survey responses 2.
                  Data collected when you use our services: This includes: Data
                  category Data types a. Location data. We determine your
                  approximate location and can determine your precise location
                  if you allow us to do so through the settings on your phone.
                  You can use GuardianRide without letting us collect your
                  precise location. However, it may be less convenient for you,
                  including because you will have to type your location into
                  your phone instead of allowing us to detect it for you.
                  Approximate location Precise location b. Trip information.
                  This refers to the details we collect about your trip. Payment
                  information (including amount charged and payment method)
                  Special instructions, allergies Statistics derived from past
                  trip information Trip details, including Date and time
                  Requested pickup and dropoff addresses Distance traveled Tax
                  ID (where required by local regulations) c. Usage data. This
                  refers to data about how you interact with GuardianRide’s apps
                  and websites. App crashes and other system activity Access
                  dates and times App features or pages viewed GuardianRide
                  search history Data regarding your interactions with marketing
                  and advertising campaigns d. Device data. This refers to data
                  about the device(s) you use to access GuardianRide.
                  Advertising identifiers Browser type Device motion data Device
                  IP address or other unique device identifiers Hardware models
                  Mobile network data Operating systems and versions Preferred
                  languages e. Communications data. This refers to the data we
                  collect when you (i) contact GuardianRide for customer
                  support, to report a safety concern, or other inquiries and
                  (ii) communicate with drivers and delivery people through
                  GuardianRide’s apps. Communication type (phone or text
                  message) Content (including audio recordings, recordings of
                  phone calls, call transcripts, and chat logs) Date and time f.
                  In-Vehicle Recordings. We will collect videos of you taken by
                  in-cabin cameras. We may also collect audio recordings, such
                  as when you contact GuardianRide during a trip for customer
                  support purposes. Visual and/or audio recordings 3. Data from
                  other sources: These include: Data category Data types a. Law
                  enforcement officials, public health officials and other
                  government authorities. Name Contact info Information relating
                  to law enforcement, health or other investigations b.
                  Marketing partners, advertisers, and service providers. This
                  includes banks in connection with cash back programs,* and
                  data resellers.* Usage data, including your engagement with
                  marketing and advertising campaigns Contact Device Enrichment
                  data such as demographics (age range, household income range,
                  gender), general interests and lifestyle, general purchasing
                  behavior, viewing preferences and streaming habits.* c.
                  Service providers who help us verify your identity or detect
                  fraud. Confirmation of whether your account information
                  relates to known persons Name Contact info Date of birth
                  Information relating to the wireless carrier associated with
                  your phone, such as carrier name and network type
                  Government-issued identification documents such as driver’s
                  licenses or passports, and related information (such as
                  identification numbers, expiration date, and demographics) d.
                  GuardianRide account owners. This refers to GuardianRide
                  account owners who request services for you (such as friends
                  or family members), or who enable you to request services
                  through their accounts. Name Contact info Location Trip/order
                  info e. GuardianRide business partners (account creation and
                  access, and APIs). GuardianRide may receive your data from
                  business partners through which you create or access your
                  GuardianRide account, such as payment providers, social media
                  services, or apps or websites that use GuardianRide’s APIs or
                  whose APIs GuardianRide uses. Varies depending on the business
                  partner you use to create or access your GuardianRide account,
                  or the API used. f. GuardianRide business partners (debit or
                  credit cards). GuardianRide may receive your data from
                  business partners in connection with debit or credit cards
                  issued by a financial institution in partnership with
                  GuardianRide to the extent disclosed in the terms and
                  conditions for the card. Debit or credit card activity
                  information g. Users or others providing information in
                  connection with customer support issues, claims or disputes.
                  Name Evidence relating to accidents, conflicts, claims or
                  disputes (which may include photos or recordings of you). B.
                  How we use data GuardianRide uses data to enable reliable and
                  convenient transportation, delivery, and other products and
                  services. We also use data: To enhance the safety and security
                  of our users and services, and to prevent and detect fraud For
                  marketing and advertising To enable communications between
                  users For customer support For research and development To
                  send non-marketing communications to users In connection with
                  legal proceedings 1. To provide our services. GuardianRide
                  uses data to provide, personalize, maintain, and improve our
                  products and services. Data uses Data used includes a.
                  Creating and updating your account Account Demographics
                  Location b. Enabling services and features. This includes:
                  Enabling navigation to pickups and dropoffs, calculating ETAs
                  and tracking the progress of rides or deliveries Matching you
                  with available drivers or when you request transportation.
                  Enabling features that involve data sharing, such as ETA
                  sharing and fare splitting Enabling accessibility features
                  Account Data from other sources Demographics Device Ratings d.
                  Processing payments and enabling payment and e-money products.
                  Account Data from other sources Demographics Trip/order e.
                  Personalizing your account. For example, we may present you
                  with personalized restaurant or food recommendations, or trip
                  suggestions, based on your prior orders, trips and delivery
                  location. Account Device Location Trip/order Usage f.
                  Providing you with trip or delivery updates and generating
                  receipts. Account Trip/order g. Informing you of changes to
                  our terms, services, or policies. Account Trip/order h.
                  Performing necessary operations to maintain our services,
                  including to troubleshoot software bugs and operational
                  problems. Account Device Usage 2. For safety, security, and
                  fraud prevention and detection. We use data to help maintain
                  the safety and security of our services and users. Data uses
                  Data used includes a. Verifying your account, identity or
                  compliance with safety requirements. This includes: Verifying
                  that you are who you say you are by using the account
                  information you provide during signup (such as name, contact
                  information, date of birth or payment information) alongside
                  insights from identity and fraud prevention third-party
                  databases Verifying your age and that your account is being
                  used by you and not someone else by: Collecting your ID number
                  and/or a photo of your ID, and completing a verification to
                  confirm that the ID is valid, unaltered and that no other
                  account is associated with that document* Collecting a
                  real-time selfie that we compare against the photo on your ID
                  or your profile photo to confirm that the photos are of the
                  the same person* Account Data from other sources (third-party
                  databases) Demographics Identity verification In-vehicle
                  recordings User content b. Preventing, detecting, and
                  combating fraud, including by Guest Users. Account
                  Communications between users Data from other sources (driver
                  data) Demographics Device Identity verification Location
                  Trip/order Usage c. Predicting and helping avoid pairings of
                  users that may result in increased risk of conflict,* or where
                  one user has previously given the other a low (for instance,
                  one star) rating. Account Trip/order (including cancellation
                  rates) Usage User content (ratings and reported incidents) d.
                  Providing live support from safety experts during trips or
                  deliveries. Account (phone, user name, vehicle details)
                  Location Trip/order User content e. Enforcing GuardianRide’s
                  Terms and Conditions, Community Guidelines, and other policies
                  and standards that are communicated to you. Account
                  Communications Data from other sources (driver data) Device
                  Identity verification In-vehicle recordings Location
                  Trip/order Usage 3. For marketing and advertising.
                  GuardianRide uses data (except Guest Users’ data) to market
                  its services, and those of GuardianRide partners. Data uses
                  Data used includes a. Personalizing marketing and ads relating
                  to GuardianRide products and services, and those offered by
                  other companies. For example, GuardianRide may: Use your
                  personal data to understand your interests, preferences, or
                  characteristics about you, and personalize ads we show you.
                  Send push notifications suggesting your favorite destinations
                  or merchants, or in-app messages offering discounts or
                  promotions for products or merchants similar to those you’ve
                  previously ordered. Display personalized ads on GuardianRide
                  or other companies’ apps or websites. To do this, GuardianRide
                  builds groups, or audiences, based on your interests,
                  preferences, or characteristics, and prioritizes what ad to
                  show you based on what audience our advertisers want to reach.
                  Personalize sponsored listings, discounts or promotions for
                  restaurants and merchants available on GuardianRide. Account
                  Data from other sources Demographics (including inferred
                  gender) Device Location Trip/order Usage b. Displaying ads
                  that are targeted based on data about your current trip or
                  delivery request, including time of request and services
                  requested. For example, if you request a trip to a
                  supermarket, we may display in-app ads for third-party
                  products that may be available at that supermarket. Account
                  Data from other sources Demographics (including inferred
                  gender) Device Location Trip/order info Usage c. Measuring the
                  effectiveness of marketing and ads, and optimizing our
                  advertising and marketing campaigns. For example, GuardianRide
                  may: Use your data to determine whether your usage of our apps
                  and websites can be attributed to specific marketing campaigns
                  about GuardianRide products and services. Use data about your
                  interaction with ads to help our advertisers understand the
                  performance of their ad campaigns served by GuardianRide.
                  Account Device Usage 4. To enable communications between
                  users. Data uses Data used includes For example, a driver may
                  message or call you to confirm a pickup location, you may call
                  a driver to retrieve a lost item, or a restaurant or delivery
                  person may contact you with information about your order.
                  Account Device Usage 5. For customer support. Data uses Data
                  used includes This includes investigating and addressing user
                  concerns, including investigating user reported misconduct
                  (such as inappropriate messages or fraud), monitoring and
                  improving our customer support responses and processes, and
                  identifying potential participants in research studies
                  relating to customer support issues. GuardianRide may use
                  GenAI tools for these purposes. Account Communications Device
                  Identity verification info Data from other sources Location
                  Usage User content Trip/order In-vehicle recordings 6. For
                  research and development. Data uses Data used includes We use
                  data for analysis, research and product development, including
                  training machine learning models. This helps us make our
                  services more convenient and easy to use, enhance the safety
                  and security of our services, and develop new services and
                  features. Account Communications Data from other sources
                  Demographics Device Identity verification Location Usage User
                  content Trip/order 7. For non-marketing communications. Data
                  uses Data used includes This includes surveys and
                  communications regarding elections, ballots, referenda and
                  other political processes that relate to our services. For
                  example, we may notify you of ballot measures or pending
                  legislation relating to GuardianRide’s services where you
                  live. Account Location 8. For legal proceedings and
                  requirements. Data uses Data used includes We use data to
                  investigate or address claims or disputes relating to use of
                  GuardianRide’s services; to satisfy requirements under and/or
                  for purposes of compliance with, applicable laws, regulations,
                  operating licenses, agreements or insurance policies; or
                  pursuant to legal process or governmental request, including
                  from law enforcement. Account Communications Data from other
                  sources Demographics Device Identity verification Location
                  Usage User content Trip/order In-vehicle recordings C. Core
                  automated processes GuardianRide uses automated processes to
                  enable certain parts of our products and services, including
                  functions essential for service delivery and user safety such
                  as matching, pricing and fraud prevention and detection.
                  GuardianRide relies on automated processes to enable essential
                  parts of our services, including matching (pairing users
                  requesting and providing transportation), pricing (calculating
                  the amount owed for such services) and fraud detection and
                  prevention. These processes allow GuardianRide to provide a
                  seamless, and safe, experience to millions of users globally
                  every day. This section describes how automated matching and
                  fraud prevention and detection processes work, including how
                  they impact your GuardianRide experience and the personal and
                  non-personal data used to enable these processes. You may
                  contact GuardianRide if you have questions or concerns
                  regarding these processes. 1. Matching GuardianRide uses
                  algorithms to efficiently match you with drivers. Our
                  algorithms evaluate various factors to determine the best
                  match, including your location, requested destination, and
                  historical data (including whether you and a driver have
                  previously reported having negative experiences with each
                  other). We are constantly refining our matching process to
                  provide the best experience to all users on our platform and
                  may consider different factors depending on the location where
                  you use GuardianRide. 2. Fraud prevention and detection
                  GuardianRide uses algorithms to prevent and detect fraud
                  against GuardianRide or our users. This includes efforts to
                  monitor for account takeovers, suspicious user behaviors, and
                  unauthorized access attempts, including by third-party
                  aggregators. These tools look for patterns that may indicate
                  fraudulent behavior, such as those that vary significantly
                  from typical user behavior. To do this, GuardianRide performs
                  real-time monitoring of information collected from or
                  generated by users, including location data, payment
                  information, and GuardianRide usage. We also examine
                  historical data and compare it against real-time data to help
                  detect suspicious behavior. GuardianRide may limit your access
                  to its services, or require that you undertake a particular
                  action such as verifying your identity before allowing such
                  access, if it detects potential fraudulent activity. You may
                  contact GuardianRide customer support if you have questions or
                  concerns about these processes. D. Cookies and related
                  technologies GuardianRide and its partners use cookies and
                  other online identifiers on our apps, websites, emails and
                  online ads for purposes described in this notice. Cookies are
                  small text files that are stored on browsers or devices by
                  websites, apps, online media and ads. GuardianRide uses
                  cookies and similar technologies for purposes such as:
                  Authenticating users Remembering user preferences and settings
                  Determining the popularity of content Delivering and measuring
                  the effectiveness of advertising campaigns Analyzing site
                  traffic and trends, and generally understanding the online
                  behaviors and interests of people who interact with our
                  services We may also allow others to provide audience
                  measurement and analytics services for us, to serve ads on our
                  behalf across the internet or for other companies’ products
                  and services on our apps, and to track and report on the
                  performance of those ads. These entities may use cookies, web
                  beacons, SDKs and other technologies to identify the devices
                  used by visitors to our websites, as well as when they visit
                  other online sites and services. E. Data sharing and
                  disclosure We share your data with other users where necessary
                  to provide our services or features, at your request, or with
                  your consent. We also share data with our affiliates,
                  subsidiaries, service providers and partners, for legal
                  reasons, or in connection with claims or disputes.
                  GuardianRide may share data: 1. With other users This may
                  include sharing data with: Recipient Data shared Your driver
                  Account First name Rating Pickup and/or dropoff locations
                  Settings (including accessibility settings) and preferences 2.
                  Upon request or with your consent This may include sharing
                  data with: Recipient Data shared GuardianRide business
                  partners. We share data with companies whose apps or websites
                  you access through GuardianRide, including for purposes of
                  promotions, contests or specialized services. Depending on the
                  app or website you access through GuardianRide, and for what
                  purpose, may include: Account Device Trip/order Emergency
                  services. We enable you to share your data with police, fire,
                  and ambulance services in the event of an emergency or after
                  certain incidents. For more information, please go to the
                  “Choice and transparency” and “Emergency data sharing”
                  sections below. Account Name Phone number Location Trip/order
                  Requested pickup/dropoff Insurance companies. If you are
                  involved in an incident, or report or submit a claim to an
                  insurance company relating to GuardianRide’s services,
                  GuardianRide will share data with that insurance company for
                  the purpose of adjusting or handling that claim. Data
                  necessary to adjust or handle the claim, which may include:
                  Account Communications Device Location Trip/order Usage User
                  content 3. With GuardianRide service providers and business
                  partners These include the third parties, or categories of
                  third parties, listed below. Accountants, consultants,
                  lawyers, and other professional service providers. Ad and
                  marketing partners and providers, including ad and marketing
                  publishers (such as social media platforms), ad networks and
                  advertisers, third-party data providers, ad technology
                  vendors, measurement and analytics providers, and other
                  service providers. GuardianRide uses these vendors to reach or
                  better understand current and potential users of GuardianRide
                  services or of our advertising partners, and measure and
                  improve ad effectiveness. For example, we share audience lists
                  with ad and marketing publishers in which users are identified
                  by limited data points (e.g., mobile advertising ID, hashed
                  email, name) and grouped based on inferred interests and
                  characteristics. GuardianRide instructs ad and marketing
                  publishers to target these groups, or audiences, with ads. Ad
                  intermediaries. We share data - including advertising or
                  device identifier, hashed email address, approximate location,
                  current trip or order information, and ad interaction data -
                  with these intermediaries to enable their services and for
                  such other purposes as are disclosed in their privacy notices.
                  You may opt out from ad personalization. Customer support
                  platform and service providers. <a
                    href="https://policies.google.com/privacy?hl=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Google
                  </a>, in connection with the
                  use of Google Maps in GuardianRide’s apps. Identity
                  verification and risk solutions providers. Payment processors
                  and facilitators. Research partners, including those
                  performing surveys or research projects in partnership with
                  GuardianRide or on GuardianRide’s behalf. Social media
                  companies in connection with GuardianRide’s use of their tools
                  in GuardianRide’s apps and websites. Service providers that
                  assist GuardianRide to enhance the safety and security of
                  GuardianRide apps and services. Service providers that provide
                  us with artificial intelligence and machine learning tools and
                  services. Third-party service providers and partners that
                  integrate with GuardianRide’s apps. Third-party vehicle
                  suppliers, including fleet and rental partners. Autonomous
                  vehicle partners that provide rides on GuardianRide apps. 4.
                  With GuardianRide subsidiaries and affiliates We share data
                  with our subsidiaries and affiliates to help us provide our
                  services or conduct data processing on our behalf. 5. For
                  legal reasons or in the event of a claim or dispute
                  GuardianRide may share your data if we believe it’s required
                  by applicable law, regulation, operating license or agreement,
                  legal process or governmental request, insurance policy, or
                  where the disclosure is otherwise appropriate due to safety or
                  similar concerns. This includes sharing data with law
                  enforcement officials, public health officials, other
                  government authorities, insurance companies, third-party fleet
                  partners, or other third parties as necessary to enforce our
                  terms and conditions, user agreements, or other policies; to
                  protect GuardianRide’s rights or property or the rights,
                  safety or property of others; or in the event of a claim or
                  dispute relating to the use of our services. In the event of a
                  dispute relating to use of another person’s credit card, we
                  may be required by law to share a user’s data, including trip
                  or order information, with the owner of that credit card. For
                  more information, please see GuardianRide’s Guidelines for
                  United States Law Enforcement. We may also share data with
                  others in connection with, or during negotiations of, any
                  merger, sale of company assets, consolidation or
                  restructuring, financing, or acquisition of all or a portion
                  of our business by or into another company. F. Data retention
                  and deletion GuardianRide retains your data for as long as
                  necessary for the purposes described above. Users may request
                  account deletion through the GuardianRide apps and websites.
                  GuardianRide retains your data for as long as necessary for
                  the purposes described above. Those periods vary depending on
                  the type of data, and the purposes for which we collect and
                  maintain it. For example, we retain your data: for as long as
                  you maintain your GuardianRide account (i.e., the life of your
                  account, or “LOA”) where it is necessary in order for
                  GuardianRide to provide its service. This includes account
                  information, like your first and last name, email, phone
                  number and payment information. for 7 years from collection
                  (unless you first delete your GuardianRide account) if
                  necessary for purposes of GuardianRide’s tax, insurance, legal
                  or regulatory requirements; subject to GuardianRide’s
                  legitimate interests in defending against, or asserting, legal
                  claims; or where necessary for purposes such as research and
                  development. for only as long as required to enable specific
                  services or features. For example, if you submit an image of
                  your ID to verify your age for purposes of alcohol delivery
                  where required by law, we delete such images within 48 hours
                  unless longer retention is required by law. The following
                  table lists GuardianRide’s retention practices with respect to
                  categories of data described above. GuardianRide may retain
                  data for longer, or shorter, than the periods described below
                  where required by law. Data Category Retention Period Account
                  LOA Communications The sooner of LOA or 7 years Demographic
                  LOA Device LOA Identity Verification 1 year for government IDs
                  3 years for user-submitted selfies Location Data The sooner of
                  LOA or 7 years Trip/Order The sooner of LOA or 7 years Usage
                  Data The sooner of LOA or 7 years Where GuardianRide does not
                  need to retain your data in order for GuardianRide to provide
                  its services, or for purposes of our tax, insurance, legal or
                  regulatory requirements, we will delete your data once no
                  longer necessary for the purposes for which we collected it.
                  Such periods vary depending on the type of data, and the
                  purposes for which we collected it. For example, we generally
                  delete certain information that we use to display personalized
                  marketing and advertising to you after approximately one year,
                  if not sooner. Following an account deletion request, we
                  delete your account and data, except as necessary for purposes
                  of safety, security, fraud prevention or compliance with legal
                  requirements, or because of issues relating to your account
                  (such as an outstanding credit or an unresolved claim or
                  dispute). For example, if you are banned from GuardianRide’s
                  services because of serious fraudulent or unsafe behavior,
                  GuardianRide will retain your data after an account deletion
                  request to prevent you from re-obtaining access to
                  GuardianRide’s platform. The data that we retain in such
                  situations varies depending on the purpose for the retention.
                  For example, if we retain your data due to fraudulent
                  behavior, we will retain the data relating to such behavior,
                  and the data that we need to prevent you from further
                  accessing GuardianRide’s platform, which may include your
                  account information, identity verification information,
                  transaction data, and user content and communications data.
                  Similarly, if you are involved in an incident while using
                  GuardianRide that may lead to litigation or an insurance
                  claim, we will retain the data that is potentially relevant to
                  such litigation or insurance claim. We generally delete data
                  within 90 days of an account deletion request, except where
                  retention is necessary for the above reasons.
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
                <p className="mb-4 text-gray-700 text-[14px]">
                  A. Data controllers and Data Protection Officer GuardianRide,
                  LLC. is the sole controller of the data processed by
                  GuardianRide when you use GuardianRide’s services globally,
                  except where it is a joint controller with other GuardianRide
                  affiliates. GuardianRide, LLC. (“GL”) is the controller of the
                  data processed by GuardianRide when you use GuardianRide’s
                  services globally. B. Updates to this Privacy Notice We may
                  occasionally update this notice. If we make significant
                  changes, we will notify you in advance of the changes through
                  the GuardianRide apps or through other means, such as email.
                  We encourage you to periodically review this notice for the
                  latest information on our privacy practices. Use of our
                  services after an update constitutes consent to the updated
                  notice to the extent permitted by law.
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
