import logo from '../assets/logoAddbook.png'
export const techSkills = [
    { name: "Website Design", level: 90 },
    { name: "HTML5 / CSS3", level: 88 },
    { name: "JavaScript", level: 82 },
    { name: "React.js", level: 78 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Laravel", level: 75 },
    { name: "JWT API", level: 70 },
    { name: "Linux Basics", level: 65 },
];

export const designSkills = [
    { name: "Adobe Photoshop", level: 88 },
    { name: "Adobe Illustrator", level: 80 },
    { name: "CorelDRAW", level: 75 },
    { name: "Adobe Premiere Pro", level: 82 },
    { name: "Adobe After Effects", level: 70 },
    { name: "CapCut", level: 90 },
];
export const projects = [
    {
        id: 1,
        category: "webdev",
        title: "E-STORE - e-Commerce UI & Cart System",
        description: "A responsive electronics e-commerce storefront featuring dynamic product filtering, context-driven shopping cart management (add, update, delete items), and intuitive auto-scroll UX features.",
        tags: ["React", "React Router", "Context API", "Tailwind CSS"],
        demo: "https://electronic-store-ui.vercel.app/",
        github: "https://github.com/Heanai/electronic-store-ui",
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
    },
    {
        id: 2,
        category: "webdev",
        title: "Addbook Computer Center",
        description: "A comprehensive course enrollment and shopping platform featuring detailed course outlines, interactive modas, live receipt previews, and a structured course navigation layout.",
        tags: ["React", "CSS3", "JavaScript", "HTML5"], // កែសម្រួលតាមកូដ CSS ដើម និង React ដែលអ្នកបានប្រើប្រាស់
        demo: "https://add-book-center.vercel.app/",
        github: "#", // អ្នកអាចដាក់លីង GitHub Repository របស់អ្នកនៅត្រង់នេះ
        image: logo, // រូបភាពតំណាងឱ្យ Computer Center/Online Learning
    },
    {
        id: 3,
        category: "webdev",
        title: "Food",
        description: "Content management system tailored for creatives to showcase work online.",
        tags: ["React", "Node.js", "MongoDB"],
        demo: "https://food-khmer-euro-githib-io.vercel.app/",
        github: "#",
        image: "https://images.getbento.com/accounts/89316af9a381ceb78a2c5fa75b7b7831/media/images/54156table-with-food-for-usa-4th-july-independence-day-2023-11-27-05-37-19-utc.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5",
    },
    {
        id: 4,
        category: "design",
        title: "Brand Identity – CaféKhmer",
        description: "Full branding package including logo, color palette, and print collateral.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    },
    {
        id: 5,
        category: "design",
        title: "Social Media Kit",
        description: "Cohesive Instagram & Facebook templates for a local fashion brand.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    },
    {
        id: 6,
        category: "video",
        title: "Campus Event Reel",
        description: "60-second highlight reel of university tech fair with motion graphics.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    },
    {
        id: 7,
        category: "video",
        title: "Product Promo – BrewCo",
        description: "15-second animated product advertisement for a local coffee startup.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
    },
];