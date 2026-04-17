export interface Project {
  title: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Holy Mother Of The Rosary Cathedral",
    description: "A professional community-focused website for the Polish National Catholic Cathedral in Lancaster, NY, featuring integrated schedules and donor portals.",
    tools: ["WordPress", "Elementor", "jQuery", "PHP"],
    image: "images/hmr_cathedral.png",
    link: "https://www.holymotheroftherosary.org/",
    tags: ["websites"]
  },
  {
    title: "Atlantic Awning",
    description: "Premium custom awning and canopy solutions for residential and commercial spaces, designed for New England weather durability.",
    tools: ["WordPress", "Elementor", "Responsive Design"],
    image: "images/atlantic_awning.png",
    link: "https://staging2.atlantic-awning.com/",
    tags: ["websites"]
  },
  {
    title: "Arista AI",
    description: "Strategic AI consultancy helping businesses transition from strategic planning to full-scale AI production and integration.",
    tools: ["WordPress", "Elementor", "AI Integration"],
    image: "images/arista_ai.png",
    link: "https://arista-ai.net/",
    tags: ["websites"]
  },
  {
    title: "POS Anywhere",
    description: "A versatile retail platform offering unified ecommerce, mobile point-of-sale, and broad marketplace integrations.",
    tools: ["Next.js", "Tailwind CSS", "Ecommerce"],
    image: "images/pos_anywhere.png",
    link: "https://www.posanywhere.com/",
    tags: ["websites"]
  },
  {
    title: "United Fire Safety",
    description: "Global supplier of precision-molded industrial fire safety equipment and precision hose fittings for industrial markets.",
    tools: ["WordPress", "Elementor", "Industrial Design"],
    image: "images/united_fire.png",
    link: "https://unitedfire.computersosinc.com/",
    tags: ["websites"]
  },
  {
    title: "Preferred Materials",
    description: "Trusted source for ready-mix concrete and builders supplies with decades of experience in construction materials.",
    tools: ["WordPress", "Builders Supplies", "Local SEO"],
    image: "images/preferred_materials.png",
    link: "https://www.preferredmaterialsllc1.com/",
    tags: ["websites"]
  },
  {
    title: "Computer SOS Inc",
    description: "Regional technology hub specializing in retail IT services, custom software development, and ecommerce strategy.",
    tools: ["Bootstrap", "Software Dev", "IT Services"],
    image: "images/computer_sos.png",
    link: "https://www.computersosinc.com/",
    tags: ["websites"]
  },
  {
    title: "Ashwin Badhiye Portfolio",
    description: "Professional landing page showcasing technical background, social links, and project highlights for Ashwin Badhiye.",
    tools: ["HTML5", "CSS3", "Netlify"],
    image: "images/ashwin_badhiye_old.png",
    link: "https://ashwinbadhiye.netlify.app/",
    tags: ["websites"]
  },
  {
    title: "POSAXChange",
    description: "Powerful marketplace integration application bridging the gap between POS systems and major online selling platforms.",
    tools: ["Next.js", "Tailwind CSS", "Marketplace API"],
    image: "images/posaxchange.png",
    link: "https://www.posaxchange.com/",
    tags: ["websites"]
  },
  {
    title: "POSA Doctor",
    description: "Health-check diagnostic tool for retail systems providing real-time business monitoring and alert management.",
    tools: ["WordPress", "Elementor", "System Monitoring"],
    image: "images/posadoctor.png",
    link: "https://www.posadoctor.com/",
    tags: ["websites"]
  },
  {
    title: "MYL Sports",
    description: "Comprehensive league management software and administrative services for sports organizations and teams.",
    tools: ["Bootstrap", "Sports Management", "SaaS"],
    image: "images/mylsports.png",
    link: "https://www.mylsports.com/",
    tags: ["websites"]
  }
];
