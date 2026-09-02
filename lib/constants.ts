export interface NavLink {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  employmentType?: string;
  description?: string;
  bullets?: string[];
}

export interface HighlightItem {
  id: string;
  category: string;
  title: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
}

export const SITE_METADATA = {
  title: "Ahmed Gad | Luxury Real Estate & Strategic Growth",
  description:
    "Ahmed Gad is a senior sales and business development leader specializing in luxury real estate, investor relations, strategic partnerships and market expansion across Saudi Arabia, GCC and international markets.",
  url: "https://ahmedgad.com",
  author: "Ahmed Gad",
  role: "Senior Sales & Business Development Director",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  kicker: "Executive Profile",
  greeting: "Hi, I'm",
  name: "Ahmed Gad",
  title: "Senior Sales & Business Development Director",
  specialties: [
    "Luxury Real Estate",
    "Investor Relations",
    "Market Expansion",
    "Strategic Partnerships",
    "KSA & GCC",
  ],
  description:
    "With over 13 years of experience across Saudi Arabia, the GCC and international markets, I drive sales growth, build strategic partnerships and create long-term value for investors, developers and clients.",
  primaryCta: {
    label: "Explore Career Journey",
    href: "#experience",
  },
  secondaryCta: {
    label: "Career Highlights",
    href: "#highlights",
  },
  photoCaption: "Driving Growth in Luxury Real Estate & Investment Markets",
  floatingBadge: "Strategic Growth · Lasting Value · Trusted Relationships",
  experienceBadge: {
    years: "13+",
    text: "Years of experience in Saudi Arabia, GCC & international markets.",
  },
};

export const IMPACT_METRICS: MetricItem[] = [
  {
    value: "SAR 80M+",
    label: "Sales Generated",
    detail: "High-value luxury real estate transactions",
  },
  {
    value: "SAR 100M+",
    label: "Development Opportunities",
    detail: "Pipelines secured & strategically positioned",
  },
  {
    value: "38",
    label: "Sales Professionals Led",
    detail: "High-performing cross-functional teams",
  },
  {
    value: "1,000+",
    label: "Broker Network Supervised",
    detail: "Active external broker channel across KSA",
  },
  {
    value: "250+",
    label: "Clients Advised",
    detail: "HNWIs, family offices & strategic investors",
  },
  {
    value: "246+",
    label: "Completed Files",
    detail: "Citizenship & residency investment cases",
  },
];

export const STORY_DATA = {
  headline: "Strategy. Relationships. Growth.",
  lead: "I work at the intersection of luxury real estate, investor relations and strategic growth — helping organizations identify opportunities, build strong partnerships and expand across high-value markets.",
  highlights: [
    "13+ years of experience across Saudi Arabia, GCC & international markets",
    "Proven track record in sales leadership and business development",
    "Direct experience leading teams of up to 38 professionals and 1,000+ brokers",
    "Extensive HNWI, family office, and strategic investor relationships",
    "Ground-up market expansion and operational establishment",
    "Strong focus on integrity, clear execution, and long-term value",
  ],
  quote: "It's not only about closing deals. It's about building trust that lasts.",
};

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: "01",
    title: "Luxury Real Estate",
    description:
      "Sales strategy, project launches, high-value transactions and premium real estate development across Saudi Arabia and international markets.",
  },
  {
    id: "02",
    title: "Investor Relations",
    description:
      "Building long-term relationships with HNWIs, investors, family groups and strategic capital partners.",
  },
  {
    id: "03",
    title: "Sales Leadership",
    description:
      "Building high-performing teams, developing sales strategies and managing large external broker networks.",
  },
  {
    id: "04",
    title: "Market Expansion",
    description:
      "Identifying new opportunities, understanding regional market dynamics and establishing strong operational presence.",
  },
  {
    id: "05",
    title: "Strategic Partnerships",
    description:
      "Connecting developers, investors, brokers and corporate partners to accelerate deal flow and business growth.",
  },
  {
    id: "06",
    title: "Investment Sales",
    description:
      "Supporting clients through investment decisions, cross-border opportunities and long-term asset diversification.",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: "Nov 2025 — Present",
    role: "Independent Principal Consultant & Strategic Partner – Sales & Market Expansion",
    company: "Independent Consultancy Practice",
    employmentType: "Self-employed",
    location: "Saudi Arabia · Hybrid",
    bullets: [
      "Partnering with multiple companies in Saudi Arabia and North Africa.",
      "Closing high-value deals through a strong network of clients and brokers.",
      "Leading market expansion initiatives and supporting sales teams with pipeline development.",
      "Delivering measurable results while open to full-time senior leadership roles in Saudi Arabia.",
    ],
  },
  {
    period: "Jun 2025 — Mar 2026",
    role: "Senior Sales Director",
    company: "DarGlobal",
    employmentType: "Full-time",
    location: "Jeddah, Makkah, Saudi Arabia · On-site",
    bullets: [
      "Led a sales team of 38 staff and supervised 1,000 external brokers across Saudi Arabia.",
      "Closed high-value luxury real estate deals and consistently exceeded quarterly targets.",
      "Expanded market presence in Jeddah, Riyadh, and GCC through strategic client acquisition.",
      "Managed relationships with HNWIs and key investors, delivering strong conversion rates.",
      "Coordinated with marketing, development, and customer service teams to drive integrated sales performance.",
      "Supported regional launches for international projects including Oman, UAE, UK, and Spain.",
    ],
  },
  {
    period: "Jan 2023 — Oct 2025",
    role: "Country Branch Manager – Libya",
    company: "Reach World",
    employmentType: "Full-time",
    location: "Tripoli, Libya · On-site",
    bullets: [
      "Oversaw the full operations of the Libya market, managing sales, advisory, documentation, compliance, and program qualification while dividing time between Jeddah and Tripoli to serve clients in both markets.",
      "Spearheaded the establishment of the Libya branch from the ground up, including preparation, registration, staffing, recruitment, training, and team development.",
      "Achieved full cost coverage within the first 6 months and delivered strong, consistent profit growth year over year through strict cost control and high-value sales performance.",
      "Recognized as a role model branch, with Libya’s operational and financial strategy recommended for replication across all other offices.",
      "Closed high-value citizenship and residency cases for HNWIs across Libya and Saudi Arabia, leveraging monthly travel to KSA and a strong regional network.",
      "Built and supervised a wide network of brokers, referral partners, and agents in both Libya and Saudi Arabia, driving market expansion and increasing referral based sales.",
      "Closed multiple luxury real estate transactions in Europe (Greece, Cyprus, and other EU markets) linked to residency and investment programs.",
      "Maintained strong client relationships, maximized repeat referrals, and expanded market share through continuous engagement and advisory excellence.",
      "Collaborated closely with Marketing, Audit, and R&D departments to align strategies, ensure compliance, enhance quality, and adapt to emerging markets and industry trends.",
    ],
  },
  {
    period: "Apr 2018 — Jan 2023",
    role: "Senior Immigration Consultant",
    company: "Reach Immigration - RI",
    employmentType: "Full-time",
    location: "Saudi Arabia · On-site",
    bullets: [
      "Advised Saudi market clients on Citizenship by Investment (CBI) and Residency by Investment (RBI) programs, delivering high-value solutions for HNWIs and families across major Saudi cities.",
      "Built and managed strong sales pipelines, qualifying clients, preparing documentation, and ensuring full compliance with program requirements.",
      "Closed multiple European real estate investment deals linked to residency programs (Greece, Cyprus, and other EU markets), supporting clients seeking long-term mobility and asset diversification.",
      "Developed deep market knowledge of Saudi client behavior, enabling high conversion rates and strong repeat/referral business.",
      "Strengthened relationships with brokers, referral partners, and corporate channels to expand market reach and increase lead flow.",
      "Supported marketing events, seminars, and targeted outreach campaigns across Jeddah, Riyadh, and Eastern Province to grow brand presence and client acquisition.",
      "Coordinated cross-border applications with regional and European teams, ensuring smooth processing and high client satisfaction.",
    ],
  },
  {
    period: "May 2015 — Mar 2018",
    role: "Sales and Marketing Director",
    company: "Ajyal",
    employmentType: "Full-time",
    location: "Saudi Arabia",
    bullets: [
      "Led the company’s transformation into a real estate developer, establishing new project pipelines and repositioning the brand in the Saudi market.",
      "Secured real estate projects exceeding 100M SAR, driving strong revenue growth and expanding investor relations across Jeddah and major Saudi cities.",
      "Directed marketing, sales strategy, budgeting, and promotional planning to support project launches and investor acquisition.",
      "Built and managed relationships with Saudi investors, capital groups, and strategic partners to accelerate deal-flow and market penetration.",
      "Oversaw sales operations, team performance, and client engagement, ensuring high conversion rates and strong market presence.",
      "Conducted market analysis and feasibility studies to support new development opportunities and guide investment decisions.",
    ],
  },
  {
    period: "Aug 2013 — Dec 2014",
    role: "Promotional Venues Manager - Real Estate",
    company: "The First Group",
    employmentType: "Full-time",
    location: "Saudi Arabia · On-site",
    bullets: [
      "Managed promotional venues (PV) operations across Saudi Arabia, overseeing 24/7 field teams and ensuring high-performance execution in airports, malls, and premium locations.",
      "Directed daily operational workflows, staffing, scheduling, and quality control to maximize lead generation and client engagement.",
      "Delivered structured performance and productivity reports directly to the Gulf COO, supporting strategic decision-making and regional sales planning.",
      "Developed and implemented distribution plans for promotional activities across major Saudi airports and commercial hubs, increasing brand visibility and client acquisition.",
      "Coordinated with sales, marketing, and regional leadership teams to ensure alignment between field operations and overall sales strategy.",
    ],
  },
  {
    period: "Sep 2009 — Jun 2013",
    role: "Retail Sales Manager",
    company: "Etisalat Misr",
    employmentType: "Full-time",
    location: "Egypt · On-site",
    bullets: [
      "Led retail sales operations across multiple branches, managing teams, performance, and daily commercial activities.",
      "Achieved strong sales growth through structured team coaching, customer engagement strategies, and high-performance retail execution.",
      "Oversaw store operations, inventory control, service quality, and compliance with corporate standards.",
      "Built and maintained relationships with key clients, improving retention and driving repeat business.",
      "Implemented sales initiatives that increased footfall, improved conversion rates, and strengthened brand presence across assigned regions.",
    ],
  },
  {
    period: "Dec 2007 — May 2009",
    role: "Media Marketing Consultant",
    company: "Yellow Media - Egypt Yellow Pages",
    employmentType: "Full-time",
    location: "Egypt · On-site",
    bullets: [
      "Managed B2B media sales for corporate clients, offering advertising solutions across printed Yellow Pages platforms in that time.",
      "Built and maintained strong relationships with business owners, marketing teams, and decision-makers to drive recurring advertising contracts.",
      "Conducted needs assessments and presented tailored media packages to increase client visibility and market reach.",
      "Achieved consistent sales targets through structured pipeline management, lead qualification, and high-impact presentations.",
      "Collaborated with production and editorial teams to ensure accurate listing content and timely delivery of advertising materials.",
      "Strengthened brand presence by onboarding new clients across multiple industries and expanding the company’s advertiser base.",
    ],
  },
  {
    period: "Sep 2006 — Jun 2007",
    role: "Quality Control",
    company: "General Motors",
    employmentType: "Full-time",
    location: "Egypt · On-site",
    bullets: [
      "Conducted thorough audits to ensure high-quality goods.",
      "Prepared detailed audit reports and maintained quality compliance standards.",
    ],
  },
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: "01",
    category: "Sales Leadership",
    title: "38 Sales Professionals + 1,000 Brokers",
    company: "DarGlobal",
    role: "Senior Sales Director",
    period: "2025 — 2026",
    location: "Saudi Arabia · Jeddah, Riyadh & GCC",
    summary:
      "Directed high-performance sales operations and supervised a massive external broker network across Saudi Arabia, consistently exceeding revenue targets.",
    bullets: [
      "Led an internal sales team of 38 professionals across Saudi Arabia",
      "Supervised a network of more than 1,000 external real estate brokers",
      "Closed high-value luxury real estate transactions across key regional markets",
      "Managed direct relationships with HNWIs, family offices, and institutional investors",
      "Supported regional launches for premier international developments in Oman, UAE, UK, and Spain",
    ],
  },
  {
    id: "02",
    category: "Real Estate Development",
    title: "SAR 100M+ Development Opportunities",
    company: "Ajyal",
    role: "Sales & Marketing Director",
    period: "2015 — 2018",
    location: "Saudi Arabia",
    summary:
      "Spearheaded corporate transformation into an active real estate developer, securing over SAR 100M in project pipelines.",
    bullets: [
      "Led the strategic transformation of the company into an active real estate developer",
      "Secured and structured real estate development pipelines exceeding SAR 100M",
      "Built relationships with Saudi investors, capital groups, and strategic partners",
      "Directed comprehensive marketing, sales strategy, budgeting, and promotional planning",
      "Conducted detailed market analysis and feasibility studies to guide investment decisions",
    ],
  },
  {
    id: "03",
    category: "Market Expansion",
    title: "Building Operations & Market Presence",
    company: "Reach World",
    role: "Country Branch Manager – Libya",
    period: "2023 — 2025",
    location: "Tripoli, Libya & Jeddah, Saudi Arabia",
    summary:
      "Established country operations from the ground up, achieving full cost coverage in 6 months and creating a benchmark branch.",
    bullets: [
      "Established the country branch from scratch: registration, staffing, recruitment, and team training",
      "Achieved full operational cost coverage within the first 6 months with consistent YoY profit growth",
      "Recognized as a role model branch whose operational and financial strategy was recommended for company-wide replication",
      "Built an extensive network of brokers, referral partners, and agents across Libya and Saudi Arabia",
      "Closed high-value citizenship, residency, and European luxury real estate investment transactions",
    ],
  },
  {
    id: "04",
    category: "Investor Relations",
    title: "Long-Term HNWI & Investor Relationships",
    company: "Reach Immigration & Independent Practice",
    role: "Senior Consultant & Strategic Partner",
    period: "2018 — Present",
    location: "Saudi Arabia & GCC",
    summary:
      "Advised over 250+ clients and families on high-value cross-border real estate and investment residency opportunities.",
    bullets: [
      "Advised Saudi HNWIs and families on Citizenship & Residency by Investment (CBI/RBI) programs",
      "Facilitated and closed multiple European luxury real estate transactions in Greece, Cyprus, and EU markets",
      "Delivered deep market expertise in Saudi client behavior, generating high referral rates and repeat business",
      "Partnered with corporate channels, wealth advisors, and broker networks across major Saudi hubs",
      "Completed over 246+ files with strict compliance, documentation excellence, and client satisfaction",
    ],
  },
];

export const CONTACT_DATA = {
  kicker: "Direct Executive Advisory",
  headline: "Start a Conversation.",
  description:
    "Open to strategic partnerships, executive opportunities, investor relationships and business development conversations across Saudi Arabia, GCC and international markets.",
  buttonText: "Get In Touch",
  email: "a.g600900@gmail.com",
};
