// Mock data for Chinmay Dhamgunde's Portfolio

export const personalInfo = {
  name: "Chinmay Dhamgunde",
  title: "Full-Stack Developer",
  subtitle: "Blockchain & Web3 Specialist", 
  location: "Pune, India",
  email: "chinmaydhamgunde10@gmail.com",
  phone: "+91 7385530847",
  linkedin: "https://linkedin.com/in/chinmay-dhamgunde",
  github: "https://github.com/chinmaydhamgunde",
  summary: "Results-driven Full-Stack Developer with hands-on experience architecting and deploying scalable applications using the MERN stack and a specialization in blockchain technology, building and deploying secure decentralized applications (DApps) on the Ethereum network."
};

export const skills = {
  languages: ["JavaScript (ES6+)", "Java", "Python", "Solidity", "SQL", "C++"],
  frontend: ["React.js", "HTML5", "CSS3", "REST APIs", "jQuery"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "MySQL"],
  blockchain: ["Ethereum", "Smart Contracts", "Web3.js", "Hardhat"],
  tools: ["Git", "GitHub", "Docker", "Linux", "Windows"]
};

export const projects = [
  {
    id: 1,
    name: "NFT Marketplace",
    description: "A full-stack decentralized marketplace for NFTs with Ethereum smart contracts",
    techStack: ["React.js", "Solidity", "Ethereum", "Web3.js", "Hardhat", "MongoDB"],
    highlights: [
      "Developed full-stack decentralized marketplace for NFTs, authoring and deploying Ethereum smart contracts",
      "Engineered responsive frontend with React.js, achieving 30% reduction in page load times",
      "Implemented Web3.js bridge between UI and blockchain for seamless wallet integration"
    ],
    githubUrl: "https://github.com/chinmaydhamgunde/nft-marketplace",
    liveUrl: "https://nft-marketplace-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    name: "Muscify Faucet DApp", 
    description: "Token faucet DApp on Ethereum testnet with smart contract security",
    techStack: ["Solidity", "Ethereum", "JavaScript", "HTML/CSS"],
    highlights: [
      "Architected and deployed token faucet DApp on Ethereum testnet with 24-hour cycle",
      "Engineered on-chain logic to prevent abuse by tracking user addresses and timestamps",
      "Designed clean, intuitive frontend for smart contract interaction"
    ],
    githubUrl: "https://github.com/chinmaydhamgunde/muscify-faucet",
    liveUrl: "https://muscify-faucet.vercel.app",
    featured: true
  }
];

export const experience = [
  {
    id: 1,
    company: "Edulntern",
    position: "MERN Stack Developer Intern",
    duration: "Dec 2023 – Jan 2024",
    type: "internship",
    achievements: [
      "Architected and deployed full-stack blog platform using MERN stack with dynamic, responsive UX",
      "Engineered secure, multi-layered authentication system using JWT, reducing unauthorized access by 50%"
    ]
  },
  {
    id: 2,
    company: "KGen (IndiGG - Web3 Gaming Guild)",
    position: "Community Growth & Engagement Lead", 
    duration: "Nov 2022 – Apr 2023",
    type: "leadership",
    achievements: [
      "Spearheaded content strategy that scaled Web3 gaming community to 5,000+ active members in 6 months",
      "Drove 40% increase in member engagement through targeted social media campaigns and community events"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "Aptos Blockchain Mainnet Event Winner",
    description: "Won $1,000 prize for contributions to the Aptos blockchain ecosystem",
    type: "competition",
    highlight: true
  },
  {
    id: 2,
    title: "LeetCode Problem Solver",
    description: "Max rating of 1447, consistently solving medium and hard algorithmic problems",
    type: "programming"
  },
  {
    id: 3,
    title: "CodeChef 2-Star Coder",
    description: "Peak rating of 1415 with consistent performance in competitive programming",
    type: "programming"
  },
  {
    id: 4,
    title: "GeeksForGeeks College Rank",
    description: "Ranked 220th in college with a score of 600+",
    type: "programming"
  }
];

export const education = {
  institution: "Pimpri Chinchwad College of Engineering (PCCOE)",
  degree: "Bachelor of Engineering in Information Technology",
  duration: "Expected Graduation: 2025",
  cgpa: "8.13/10.0",
  location: "Pune, India"
};