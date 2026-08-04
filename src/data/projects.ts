export interface TechItem {
  name: string;
  icon?: string; // icon URL (e.g. https://cdn.simpleicons.org/react/61DAFB)
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectDetails {
  longDescription: string;
  screenshots: string[];
  techStack: TechItem[];
  highlights?: string[];
  links?: ProjectLink[]; // extra store/site links shown in the modal (e.g. App Store, Google Play)
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
  tags: string[];
  source: string;
  details?: ProjectDetails; // present only for featured projects → opens rich modal
}

export const projects: Project[] = [
  {
    title: "Zoo Intelligence",
    description: "AI animal-health monitoring for Gorewada Zoo. Keepers log daily care in any language; the app builds per-animal timelines, raises upcoming vaccination and deworming alerts, and answers health questions through an AI chatbot and symptom analyzer.",
    tools: ["AI Integration", "RAG", "Next.js", "React"],
    image: "projects/zoo-intelligence/zoo-1.png",
    link: "https://aristagorewada.netlify.app/",
    tags: ["web apps", "ai and automation"],
    source: "Freelance",
    details: {
      longDescription:
        "Zoo Intelligence is an AI-driven animal health monitoring system built for Gorewada Zoo's Sangai deer conservation program. A zookeeper simply types daily observations like food, cleaning, vaccinations, and treatments as free text in any language, and AI parses and translates each note into clean, structured records in the output language. Every entry feeds a per-animal timeline that becomes a complete life history for each deer. On top of that data sit four AI capabilities: automatic alerts for upcoming events like vaccinations and deworming; an AI chatbot that answers questions about any animal's past, present, and future (e.g. 'is Raja vaccinated?' or 'when is the next booster due?'); and a symptom analyzer where a keeper describes a symptom and the AI retrieves a likely diagnosis, recommended actions, and medications by combining the animal's own history with medical knowledge from the web. Retrieval is powered by on-device embeddings and a vector search layer, so answers stay grounded in the zoo's real records.",
      screenshots: [
        "projects/zoo-intelligence/zoo-1.png",
        "projects/zoo-intelligence/zoo-2.png",
        "projects/zoo-intelligence/zoo-3.png",
        "projects/zoo-intelligence/zoo-4.png",
      ],
      techStack: [
        { name: "OpenAI", icon: "images/openai.svg" },
        { name: "AI Chatbot", icon: "images/chatbot.svg" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
        { name: "Vector DB (RAG)", icon: "images/vector.svg" },
        { name: "Document Grounding", icon: "images/document.svg" },
        { name: "Multi-Agent Architecture", icon: "images/agents.svg" },
      ],
      highlights: [
        "Multilingual logging: keepers record daily food, cleaning, and vaccination notes as free text in any language, auto-structured into the database",
        "Animal timelines: a complete, chronological life history of every animal's care and health events",
        "Smart alerts: automatic reminders for upcoming vaccinations, deworming, and health checks",
        "AI chatbot: ask about any animal's past, present, or future, like 'is Raja vaccinated?' or 'when is the next booster?'",
        "AI symptom analyzer: describe a symptom and get a likely diagnosis, immediate actions, and medications drawn from past records and the web",
      ],
    },
  },
  {
    title: "Service Intelligence Layer",
    description: "Enterprise service-intelligence SaaS for industrial machine fleets. Unifies dealer performance, machine lifecycle, predictive maintenance, and spare-parts revenue across four role-based dashboards for admin, dealer, field engineer, and customer.",
    tools: ["Next.js", "TypeScript", "Prisma", "Enterprise SaaS"],
    image: "images/aristasil.png",
    link: "https://aristasil.netlify.app/",
    tags: ["web apps", "ai and automation"],
    source: "Freelance",
    details: {
      longDescription:
        "The Arista Service Intelligence Layer (SIL) is a production-grade enterprise SaaS platform that gives an industrial machine manufacturer end-to-end visibility over its entire service ecosystem. It ships four distinct, role-based experiences behind role-based access control: a national 'control tower' for the brand admin (network-wide machine, dealer, service, and inventory KPIs), an operations cockpit for dealer managers (customers, engineers, service scheduling, and stock), a mobile-optimised app for field engineers (digital multi-step job execution and safety checks), and a self-service portal for customers (machine status, service history, and breakdown requests). The platform tracks each machine as a 'digital passport' (full service history, parts replaced, remaining life, running hours, and next service) while an AI insights hub clusters recurring breakdowns, surfaces emerging failure patterns, and generates service summaries. Inventory and forecasting modules tie service data to spare-parts demand, stockout risk, and missed-service revenue leakage, turning field operations into measurable, auditable business intelligence.",
      screenshots: [
        "images/aristasil.png",
        "projects/service-intelligence-layer/sil-1.png",
      ],
      techStack: [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Multi-Agent Architecture", icon: "images/agents.svg" },
        { name: "Document Grounding", icon: "images/document.svg" },
        { name: "Vector DB", icon: "images/vector.svg" },
        { name: "shadcn/ui", icon: "https://cdn.simpleicons.org/shadcnui/ffffff" },
        { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/ffffff" },
        { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/ffffff" },
        { name: "NextAuth.js", icon: "images/auth.svg" },
        { name: "Recharts", icon: "images/recharts.svg" },
        { name: "Zod", icon: "https://cdn.simpleicons.org/zod/3E67B1" },
      ],
      highlights: [
        "Four role-based experiences: admin control tower, dealer operations cockpit, field-engineer mobile app, and customer portal, all behind RBAC",
        "Installed-base 'digital passport': per-machine service history, parts used, remaining life, running hours, and next service due",
        "Dealer performance leaderboard: service compliance, on-time rate, repeat issues, stockouts, and revenue per machine with traffic-light scoring",
        "Predictive maintenance & AI insights: automated breakdown clustering, emerging-failure detection, and AI service summaries",
        "Inventory & spare-parts revenue protection: demand forecasting, stockout-risk alerts, and missed-service revenue-leakage tracking",
        "Digital field service: engineers run multi-step job execution with safety checks; customers raise and track breakdown requests",
      ],
    },
  },
  {
    title: "CA AI",
    description: "AI-powered vouching and compliance engine for CA firms, with automated invoice extraction, GST reconciliation, tax-notice responses, and audit documentation at near-zero manual effort.",
    tools: ["AI Integration", "Audit Tech", "React", "Node"],
    image: "projects/vouching/caai-1.png",
    link: "https://vouching-frontend.onrender.com/",
    tags: ["web apps", "ai and automation"],
    source: "Freelance",
    details: {
      longDescription:
        "CA AI is a Smart Vouching & Compliance Intelligence Engine built for chartered accountancy audit workflows. It uses AI to extract data from thousands of invoices, reconcile GST returns, and flag compliance exceptions with near-zero manual effort, turning what was days of tedious ledger work into an automated, auditable pipeline. Beyond vouching, it bundles a suite of AI assistants that reconcile GST filings, draft responses to tax notices, and generate complete audit working papers, so CAs can focus on judgement instead of formatting.",
      screenshots: [
        "projects/vouching/caai-1.png",
        "projects/vouching/caai-2.png",
        "projects/vouching/caai-3.png",
      ],
      techStack: [
        { name: "OpenAI", icon: "images/openai.svg" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "SQLAlchemy", icon: "https://cdn.simpleicons.org/sqlalchemy/D71F00" },
      ],
      highlights: [
        "Smart Vouching Engine: AI invoice extraction, GST reconciliation & compliance flagging across thousands of invoices with near-zero manual effort",
        "AI GST Reconciliation: automated GSTR-1 vs 3B vs 2B matching with ITC gap reports and a filing-readiness dashboard",
        "AI Tax Notice Response Assistant: reads GST and income-tax notices, maps provisions, and drafts structured responses for CA review",
        "AI Audit Documentation Assistant: auto-generates working papers, checklists, and summaries from client uploads with zero formatting effort",
      ],
    },
  },
  {
    title: "ExcelDash",
    description: "Turns boring spreadsheets into interactive KPI dashboards. Upload Excel or CSV for instant charts and metrics, switch to AI mode for deeper trends, and ask a built-in chatbot questions about your data.",
    tools: ["AI Integration", "Dashboard", "Next.js", "React"],
    image: "projects/exceldash/exceldash-1.png",
    link: "https://exceldash.netlify.app/",
    tags: ["web apps", "ai and automation"],
    source: "Freelance",
    details: {
      longDescription:
        "ExcelDash transforms plain, hard-to-read spreadsheets into clean, interactive KPI dashboards. Drop in an Excel or CSV file and it instantly detects your metrics and segments, then renders them as KPI cards, trend lines, bar charts, and distributions. It runs in two modes: Standard Mode converts your tabular data straight into dashboards and charts, while AI Mode goes further, surfacing deeper metrics, trends, and a strategic summary of what the numbers actually mean. A built-in AI Data Assistant lets you ask questions about your dataset in plain English and get grounded answers, and a one-click Data Dossier packages everything into a shareable business report.",
      screenshots: [
        "projects/exceldash/exceldash-1.png",
        "projects/exceldash/exceldash-2.png",
        "projects/exceldash/exceldash-3.png",
        "projects/exceldash/exceldash-4.png",
      ],
      techStack: [
        { name: "OpenAI", icon: "images/openai.svg" },
        { name: "AI Chatbot", icon: "images/chatbot.svg" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Recharts", icon: "images/recharts.svg" },
        { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/ffffff" },
      ],
      highlights: [
        "Standard Mode: instantly converts raw Excel/CSV tables into clean KPI cards, charts, and dashboards",
        "AI Mode: surfaces deeper metrics, trends, and an auto-generated strategic summary of your data",
        "AI Data Assistant: ask questions in plain English and get answers grounded in your uploaded dataset",
        "Data Dossier: one-click, shareable business report with a strategic overview and primary findings",
      ],
    },
  },
  {
    title: "Web Asset Scraper",
    description: "Paste any URL and instantly extract all its images, PDFs, and documents. Preview, sort, and filter the results, then export everything as a ZIP, CSV, or Excel file.",
    tools: ["React", "Node.js", "Express", "Puppeteer"],
    image: "images/web_asset_scraper.png",
    link: "https://web-asset-scraper.onrender.com/",
    tags: ["web apps"],
    source: "Freelance",
    details: {
      longDescription:
        "Web Asset Scraper pulls every downloadable asset out of any public web page. Paste a URL and it crawls the page, handling modern, JavaScript-heavy sites via a stealth Puppeteer engine, then returns all of its images, PDFs, and documents in a live preview grid. You can sort and filter the results by type, size, or name, select exactly what you need, and export in whatever format suits your workflow: a bundled ZIP of the raw files, or a CSV/Excel manifest of every asset and its metadata. It's built as a fast, no-friction tool for designers, researchers, and developers who need to grab a site's media in seconds instead of saving files one by one.",
      screenshots: ["images/web_asset_scraper.png"],
      techStack: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
        { name: "Puppeteer", icon: "https://cdn.simpleicons.org/puppeteer/40B5A4" },
        { name: "Axios", icon: "https://cdn.simpleicons.org/axios/5A29E4" },
        { name: "Radix UI", icon: "https://cdn.simpleicons.org/radixui/ffffff" },
      ],
      highlights: [
        "Extracts every image, PDF, and document from any public URL in one click",
        "Live preview grid with sorting and filtering by type, size, and name",
        "Bulk export as ZIP, CSV, or Excel: grab all assets or just the ones you select",
        "Stealth Puppeteer crawling reliably handles modern, JavaScript-heavy sites",
      ],
    },
  },
  {
    title: "POSA Salud",
    description: "Global Payments-integrated mobile point-of-sale for iPhone, iPad, and Android, with full offline-to-cloud sync between a legacy Windows (DBF) POS and the mobile app.",
    tools: ["Python", "MySQL", "REST APIs", "Global Payments"],
    image: "images/posa_salud_app.png",
    link: "https://play.google.com/store/apps/details?id=com.posanywhere.salud&hl=en_IN",
    tags: ["mobile apps"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "POSA Salud is a mobile point-of-sale app that turns iPhone, iPad, and Android devices into a full retail POS for sales, orders, returns, and inventory. As the backend developer, I designed and built the REST APIs powering the app and, most critically, the full two-way synchronization layer that keeps two very different systems in lockstep: a legacy Windows desktop POS that runs offline on DBF files, and the mobile app running on a cloud MySQL database. This covered every sync scenario, from offline edits and reconnection to conflict handling, keeping sales, inventory, and vendor data consistent across both systems. I also integrated Global Payments for both physical card-reader and online card payments, and connected third-party services such as DoorDash for online ordering.",
      screenshots: ["images/posa_salud_app.png"],
      techStack: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "REST APIs", icon: "images/api.svg" },
        { name: "Two-way Sync", icon: "images/subscription.svg" },
        { name: "Global Payments", icon: "images/payments.svg" },
      ],
      highlights: [
        "Built the REST APIs powering the POSA Salud mobile POS app",
        "Engineered full two-way sync between an offline Windows (DBF) desktop POS and the cloud MySQL mobile app, covering every offline, reconnect, and conflict scenario",
        "Integrated Global Payments for both physical card-reader and online card payments",
        "Connected third-party services such as DoorDash for online ordering",
      ],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/posa-salud/id6749905267" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.posanywhere.salud&hl=en_IN" },
        { label: "Website", url: "https://www.posasalud.com/" },
      ],
    },
  },
  {
    title: "Atlantic Awning",
    description: "Premium custom awning and canopy solutions for residential and commercial spaces, designed for New England weather durability.",
    tools: ["WordPress", "Elementor", "Responsive Design"],
    image: "images/atlantic_awning.png",
    link: "https://atlantic-awning.com/",
    tags: ["websites"],
    source: "Freelance",
    details: {
      longDescription:
        "A polished marketing and lead-generation website for Atlantic Awning, a New England manufacturer of custom awnings and canopies. Built on WordPress with Elementor, it showcases residential and commercial product lines through rich galleries, service-area pages, and clear calls to action, all wrapped in a fully responsive layout that holds up on any device.",
      screenshots: ["images/atlantic_awning.png"],
      techStack: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/ffffff" },
        { name: "Elementor", icon: "https://cdn.simpleicons.org/elementor/ffffff" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      ],
      highlights: [
        "Custom Elementor page designs for residential and commercial awning product lines",
        "Fully responsive, mobile-first layout with fast-loading galleries",
        "Lead-focused structure with clear service-area pages and calls to action",
      ],
    },
  },
  {
    title: "Arista AI",
    description: "Strategic AI consultancy helping businesses transition from strategic planning to full-scale AI production and integration.",
    tools: ["WordPress", "Elementor", "AI Integration"],
    image: "images/arista_ai.png",
    link: "https://arista-ai.net/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "The corporate website for Arista AI, a strategic AI consultancy. It presents the firm's positioning, guiding businesses from AI strategy through to full production deployment, with structured service breakdowns, case-study framing, and conversion-focused contact flows, built on WordPress and Elementor for fast content iteration.",
      screenshots: ["images/arista_ai.png"],
      techStack: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/ffffff" },
        { name: "Elementor", icon: "https://cdn.simpleicons.org/elementor/ffffff" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      ],
      highlights: [
        "Clear service architecture from AI strategy to production integration",
        "Conversion-focused layout with strong calls to action",
        "Editable WordPress/Elementor stack for rapid content updates",
      ],
    },
  },
  {
    title: "Holy Mother Of The Rosary Cathedral",
    description: "A professional community-focused website for the Polish National Catholic Cathedral in Lancaster, NY, featuring integrated schedules and donor portals.",
    tools: ["WordPress", "Elementor", "jQuery", "PHP"],
    image: "images/hmr_cathedral.png",
    link: "https://www.holymotheroftherosary.org/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "A community-focused website for the Holy Mother of the Rosary Cathedral, a Polish National Catholic parish in Lancaster, NY. It brings the congregation's schedules, events, sacraments, and donation options online, with an accessible, welcoming design built on WordPress and Elementor and enhanced with jQuery-driven interactions. Online giving is powered by a secure Global Payments Integrated gateway, letting parishioners donate directly through the site.",
      screenshots: ["images/hmr_cathedral.png"],
      techStack: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/ffffff" },
        { name: "Elementor", icon: "https://cdn.simpleicons.org/elementor/ffffff" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "jQuery", icon: "https://cdn.simpleicons.org/jquery/0769AD" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Global Payments", icon: "images/payments.svg" },
      ],
      highlights: [
        "Secure online donations powered by a Global Payments Integrated gateway",
        "Integrated mass and event schedules for the congregation",
        "Accessible, welcoming design for a broad community audience",
      ],
    },
  },
  {
    title: "POSA Doctor",
    description: "Health-check diagnostic tool for retail systems providing real-time business monitoring and alert management.",
    tools: ["WordPress", "Elementor", "System Monitoring"],
    image: "images/posadoctor.png",
    link: "https://www.posadoctor.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "A product website for POSA Doctor, a health-check and diagnostic tool for retail systems that provides real-time business monitoring and alerting. Built on WordPress and Elementor, it frames the monitoring product for retail operators who need proactive system oversight, and includes a Zoho-integrated live chat widget for visitor support.",
      screenshots: ["images/posadoctor.png"],
      techStack: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/ffffff" },
        { name: "Elementor", icon: "https://cdn.simpleicons.org/elementor/ffffff" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Zoho", icon: "https://cdn.simpleicons.org/zoho/E42527" },
      ],
      highlights: [
        "Frames real-time retail system monitoring and alerts",
        "Zoho-integrated live chat widget for customer support",
        "Responsive WordPress/Elementor build",
      ],
    },
  },
  {
    title: "POSA Salud",
    description: "Product marketing website for POSA Salud, the mobile POS for iPhone, iPad, and Android. A fast React and Vite single-page site with signup, login, and a Zoho-integrated live chat.",
    tools: ["React", "Vite", "Tailwind CSS", "Zoho"],
    image: "images/posa_salud.png",
    link: "https://www.posasalud.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "The product marketing website for POSA Salud, the mobile point-of-sale app for iPhone, iPad, and Android. Built as a fast React and Vite single-page app, it presents the product's features, pricing, and FAQs, provides account signup and login, and includes a Zoho-integrated live chat widget for support. The backend, sync, and payment work behind the product is covered in the POSA Salud mobile-app project.",
      screenshots: ["images/posa_salud.png"],
      techStack: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Zoho", icon: "https://cdn.simpleicons.org/zoho/E42527" },
      ],
      highlights: [
        "Fast React and Vite single-page marketing site with account signup and login",
        "Zoho-integrated live chat widget for customer support",
        "Features, pricing, and FAQ pages for the POSA Salud mobile POS",
      ],
    },
  },
  {
    title: "POSAXChange",
    description: "Powerful marketplace integration application bridging the gap between POS systems and major online selling platforms.",
    tools: ["Next.js", "Tailwind CSS", "Marketplace API"],
    image: "images/posaxchange.png",
    link: "https://www.posaxchange.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "A marketplace-integration application that bridges POS systems with major online selling platforms. Built with Next.js and Tailwind CSS, it delivers a fast, modern interface for its sync-and-connect value proposition, includes integrated online payments and recurring subscription billing so customers can pay for and manage their plans directly in-app, and offers a Zoho-integrated live chat widget for support.",
      screenshots: ["images/posaxchange.png"],
      techStack: [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Payments", icon: "images/payments.svg" },
        { name: "Subscriptions", icon: "images/subscription.svg" },
        { name: "Zoho", icon: "https://cdn.simpleicons.org/zoho/E42527" },
      ],
      highlights: [
        "Integrated online payments and recurring subscription billing",
        "Zoho-integrated live chat widget for customer support",
        "Bridges POS systems with major online selling platforms",
      ],
    },
  },
  {
    title: "POS Anywhere",
    description: "A versatile retail platform offering unified ecommerce, mobile point-of-sale, and broad marketplace integrations.",
    tools: ["Next.js", "Tailwind CSS", "Ecommerce"],
    image: "images/pos_anywhere.png",
    link: "https://www.posanywhere.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "A modern marketing site for POS Anywhere, a unified retail platform spanning ecommerce, mobile point-of-sale, and marketplace integrations. Built with Next.js and Tailwind CSS, it delivers a fast, app-like browsing experience that communicates the product's cross-channel retail capabilities.",
      screenshots: ["images/pos_anywhere.png"],
      techStack: [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      ],
      highlights: [
        "Fast, app-like experience powered by Next.js",
        "Explains unified ecommerce, mobile POS, and marketplace integrations",
        "Responsive, conversion-oriented product marketing",
      ],
    },
  },
  {
    title: "United Fire Safety",
    description: "Global supplier of precision-molded industrial fire safety equipment and precision hose fittings for industrial markets.",
    tools: ["WordPress", "Elementor", "Industrial Design"],
    image: "images/united_fire.png",
    link: "https://unitedfire.computersosinc.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "A product and capabilities website for United Fire Safety, a global supplier of precision-molded industrial fire-safety equipment and hose fittings. The site organises a technical product catalogue for industrial buyers with an emphasis on specification clarity, built on WordPress and Elementor.",
      screenshots: ["images/united_fire.png"],
      techStack: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/ffffff" },
        { name: "Elementor", icon: "https://cdn.simpleicons.org/elementor/ffffff" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      ],
      highlights: [
        "Structured technical catalogue for industrial fire-safety products",
        "Specification-focused product pages for B2B buyers",
        "Responsive WordPress/Elementor build",
      ],
    },
  },
  {
    title: "Preferred Materials",
    description: "Trusted source for ready-mix concrete and builders supplies with decades of experience in construction materials.",
    tools: ["WordPress", "Builders Supplies", "Local SEO"],
    image: "images/preferred_materials.png",
    link: "https://www.preferredmaterialsllc1.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "A local-business website for Preferred Materials, a supplier of ready-mix concrete and builders' supplies. It pairs a clear product and services overview with local-SEO-optimised content to help contractors and builders find and contact the company, built on WordPress.",
      screenshots: ["images/preferred_materials.png"],
      techStack: [
        { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/ffffff" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css/663399" },
      ],
      highlights: [
        "Local-SEO-optimised pages to capture regional construction demand",
        "Clear product and builders-supply service overview",
        "Easy-to-maintain WordPress content structure",
      ],
    },
  },
  {
    title: "Computer SOS Inc",
    description: "Regional technology hub specializing in retail IT services, custom software development, and ecommerce strategy.",
    tools: ["Bootstrap", "Software Dev", "IT Services"],
    image: "images/computer_sos.png",
    link: "https://www.computersosinc.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "The corporate website for Computer SOS Inc, a regional technology hub offering retail IT services, custom software development, and ecommerce strategy. Built on Bootstrap, it presents the company's service lines in a clean, responsive layout aimed at retail and small-business clients.",
      screenshots: ["images/computer_sos.png"],
      techStack: [
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css/663399" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "jQuery", icon: "https://cdn.simpleicons.org/jquery/0769AD" },
      ],
      highlights: [
        "Presents IT services, custom software, and ecommerce offerings",
        "Clean, responsive Bootstrap layout",
        "Targeted at retail and small-business clients",
      ],
    },
  },
  {
    title: "Ashwin Badhiye Portfolio",
    description: "Professional landing page showcasing technical background, social links, and project highlights for Ashwin Badhiye.",
    tools: ["HTML5", "CSS3", "Netlify"],
    image: "images/ashwin_badhiye_old.png",
    link: "https://ashwinbadhiye.netlify.app/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "An earlier personal landing page for Ashwin Badhiye, hand-built with HTML5 and CSS3 and deployed on Netlify. It presents technical background, social links, and project highlights in a lightweight, fast-loading single page.",
      screenshots: ["images/ashwin_badhiye_old.png"],
      techStack: [
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css/663399" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
      ],
      highlights: [
        "Lightweight, hand-coded single-page site",
        "Fast global delivery via Netlify",
        "Showcases background, links, and project highlights",
      ],
    },
  },
  {
    title: "MYL Sports",
    description: "Comprehensive league management software and administrative services for sports organizations and teams.",
    tools: ["Bootstrap", "Sports Management", "SaaS"],
    image: "images/mylsports.png",
    link: "https://www.mylsports.com/",
    tags: ["websites"],
    source: "Oriens DevSecOps",
    details: {
      longDescription:
        "The website for MYL Sports, a league-management software and services provider for sports organisations. Built on Bootstrap, it presents the SaaS platform and administrative services with a clean, responsive layout aimed at leagues and teams.",
      screenshots: ["images/mylsports.png"],
      techStack: [
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css/663399" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "jQuery", icon: "https://cdn.simpleicons.org/jquery/0769AD" },
      ],
      highlights: [
        "Presents league-management SaaS and admin services",
        "Clean, responsive Bootstrap layout",
        "Aimed at sports organisations, leagues, and teams",
      ],
    },
  }
];
