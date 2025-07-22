// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import shadcnuiLogo from './assets/tech_logo/shadcnui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import schoolLogo from './assets/education_logo/school.png';
import regent from './assets/education_logo/regent.png';

// Project Section Logo's
import shopcoeommerceLogo from './assets/work_logo/shop.co-e-ommerce.png';
import instagramCloneLogo from './assets/work_logo/instagramclone.png';
import weatherAppLogo from './assets/work_logo/weatherapplogo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Shadcn UI', logo: shadcnuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo }, // updated key to match better naming
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Diploma in Civil Engineering",
    school: "Regent Institute of Science and Technology",
    date: "Dec 2021 - Sep 2024",
    desc: "Focused on applied sciences and structural concepts, combining engineering principles with real-world learning.",
    img: regent, 
  },
  {
    id: 2,
    degree: "12th Standard",
    school: "Panihati Trannath High School",
    date: "2019 - 2021",
    desc: "Science stream with a focus on mathematics, physics, and computer applications.",
    img: schoolLogo,
  },
  {
    id: 3,
    degree: "10th Standard",
    school: "Panihati Trannath High School",
    date: "2018 - 2019",
    desc: "Completed with a strong academic foundation in core subjects including math and science.",
    img: schoolLogo,
  },
];


export const projects = [
  {
    id: 0,
    title: "SHOP.CO-E-Commerce",
    description: `An end-to-end e-commerce web application built using Next.js, Tailwind CSS, Redux Toolkit, ShadCN UI, Node.js, Express.js, MongoDB, and more.
Key Features:
- 🔄 Dynamic Product Listings: Integrated with a product API to show real-time listings.
- 🔍 Search & Filtering: Category-based, price-based filtering, and real-time search.
- 🔐 Authentication & Authorization: JWT-based login/signup with role-based access (User & Admin).
- 🔑 Forgot Password: Secure password reset via email using Nodemailer.
- 🛠️ Admin Panel: Add, edit, and delete products, manage orders, and update order statuses.
- 📦 Product Pages: Detailed product view with images, pricing, reviews, and ratings.
- 🛒 Shopping Features: Add/remove from cart, update quantity, add to wishlist, and place orders.
- 📂 Order Management: Users can view their order history.
- 📱 Responsive UI: Fully optimized for mobile, tablet, and desktop screens.
- 💡 Tech Highlights: Cloudinary for image storage, Multer for uploads, bcrypt for password hashing, and React Icons for enhanced visuals.
- 🔗 RESTful APIs: Secure and scalable APIs for users, products, orders, cart, and wishlist.
- 🧠 Scalable Architecture: Clean component structure and state management for future growth.`,

    image: shopcoeommerceLogo,
    tags: [
      "Next.js", "Tailwind CSS", "Redux Toolkit", "Express.js", "MongoDB",
      "Node.js", "JWT", "Cloudinary", "Nodemailer"
    ],
    github: "https://github.com/avhradip/Shopfrontend",
    webapp: "https://golden-jelly-72b975.netlify.app/",
  },
  {
    id: 1,
    title: "Instagram Clone - MERN Social App",
    description: `A full-featured social media web application built using React.js, Tailwind CSS, Redux Toolkit, Node.js, Express.js, and MongoDB.

Key Features:
- 🔐 Authentication & Authorization: JWT-based login/signup with secure password reset via email (Nodemailer).
- 👥 User Interactions: Follow/unfollow users, view real-time followers/following, and search users.
- 📝 Post Management: Create posts with captions and images, like/unlike, comment (add/edit/delete), and delete own posts.
- 📥 Saved Posts: Add or remove posts from saved (favorites) section.
- 📰 Feed & Discovery: Personalized feed from followed users, suggested users, explore and search pages.
- 📱 Responsive UI: Fully optimized for all screen sizes with a modern look and feel.
- 💡 Tech Highlights: Cloudinary for media uploads, Multer for file handling, bcrypt for password security, and React Icons for enhanced UI.
- 🔗 RESTful APIs: Secure and scalable APIs for managing users, posts, comments, followers, and saved items.
- 🧠 Clean Architecture: Well-structured components and state management for scalability.`,

    image: instagramCloneLogo,
    tags: [
      "React.js", "Tailwind CSS", "Redux Toolkit", "Express.js", "MongoDB",
      "Node.js", "JWT", "Cloudinary", "Nodemailer"
    ],
    github: "https://github.com/avhradip/Instagram",
    webapp: "https://idyllic-torte-b75560.netlify.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description: `A simple and responsive weather application that allows users to search for current weather information by city using the OpenWeatherMap API.

Key Features:
- 🔍 City Search: Enter any city name to get real-time weather data.
- 🌡️ Weather Details: Displays temperature, humidity, wind speed, and general conditions.
- 🌎 API Integration: Fetches live weather data from the OpenWeatherMap API.
- 📱 Responsive Design: Optimized layout for both mobile and desktop screens.
- 🧠 Clean UI: Minimalist design built with Tailwind CSS and React for a smooth user experience.`,

    image: weatherAppLogo,
    tags: ["React.js", "Tailwind CSS", "OpenWeatherMap API", "JavaScript"],
    github: "https://github.com/avhradip/WeatherApp",
    webapp: "https://gorgeous-tartufo-1e759e.netlify.app/",
  },
];  

