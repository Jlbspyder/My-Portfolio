const projects = [
   {
    id: 1,
    name: "ERP Application",
    image:  "/erp.png",
    liveDemo: true,
    privateCode: true,
    description: "ERP application featuring a metric dashboard, payroll management, leave and loan workflows, audit logs, and role-based access control. Based on an internal ERP system I developed professionally, with proprietary functionality removed.",
    stack: ["React", "React Native", "TypeScript", "Express", "Node.js", "Mongoose", "Redux ToolKit"],
    demo: "https://jlb-rbac-erp.netlify.app",
    repo: "https://github.com/Jlbspyder/ERP_APP"
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    image:  "/dessert-shop.png",
    liveDemo: true,
    privateCode: false,
    description: "A production grade dessert shopping web app with full cart functionalities, PayPal integration, secure authentication, and an admin CMS dashboard for managing desserts.",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "PayPal", "JWT"],
    demo: " https://dessert-shop.onrender.com/",
    repo: "https://github.com/Jlbspyder/Desserts-shop"
  },
    {
    id: 3,
    name: "RSS Feed Aggregator",
    image:  "/rss-feed.png",
    liveDemo: true,
    privateCode: false,
    description: " A full-stack customizable content aggregator that pulls RSS and Atom feeds into one well designed reading dashboard. It features user authentication and caching of feed data.",
    stack: ["React", "Express", "Neon", "Prisma", "JWT", "Tailwind CSS"],
    demo: "https://jlb-rssfeed.netlify.app",
    repo: "https://github.com/Jlbspyder/RSS-FEED"
  },
   {
    id: 4,
    name: "Vehicle Configurator",
    image:  "/car-copy-2.jpg",
    liveDemo: true,
    privateCode: true,
    description: "A responsive automotive platform featuring interactive vehicle customization, allowing users to explore models, modify colors and specifications, and experience a modern car configuration workflow.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    demo: "https://car-configurator-clone.netlify.app/",
    repo: "https://github.com/Jlbspyder/Car-Configurator"
  },
];

export default projects;
