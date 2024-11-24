import Image from "next/image";
import WebIcon from "../public/web&mobile.gif";
import BrandingIcon from "../public/branding.gif";
import SupportIcon from "../public/web-mintenance.gif";
import ContentIcon from "../public/content.gif";

// REVIEWS
export const REVIEWS = [
  {
    name: "Harold Uku",
    position: "Founding Partner H.O.D Legal",
    text: "LetsCr8T exceeded our expectations with a sleek, user-friendly website that perfectly captured our vision. The entire development process exceptional.",
    image: "/harold.jpeg",
  },
  {
    name: "Ebiere Adegbesan",
    position: "CEO Tredek Vine",
    text: "LetsCr8T really understood what I needed and created a beautiful, easy-to-use website for my business. I’ve noticed more customer engagement since launching. I Highly recommend LetsCr8T.",
    image: "/Ebi.jpeg",
  },
  {
    name: "Williams Joseph",
    position: "Founder & CEO of PageScan",
    text: "Letscr8t built an incredible website for my business. The team listened to my needs, delivered outstanding design and functionality, and exceeded my expectations. I Highly recommend them for your business.",
    image: "/williams.jpeg",
  },
  {
    name: "Daniel Oroemi",
    position: "Developer BWL",
    text: "WeCr8t provided us with reliable and efficient web solutions that streamlined our business operations.",
    image: "/daniel.jpeg",
  },
  {
    name: "Aniebiet OboPP",
    position: "Developer BWL",
    text: "WeCr8t provided us with reliable and efficient web solutions that streamlined our business operations.",
    image: "/ClientPhoto.svg",
  },
];

// FAQs
export const FAQS = [
  {
    id: "1",
    question: "What services does LetsCr8t offer?",
    answer:
      "LetsCr8T builds custom websites, mobile apps, and digital solutions. Our services include web design, development, UX design, and branding to help businesses thrive online.",
  },
  {
    id: "2",
    question: "How can I get started with LetsCr8t?",
    answer:
      "Getting started is simple! Schedule a free consultation to discuss your goals and how we can help.",
  },
  {
    id: "3",
    question: "How long does it take to complete a website project?",
    answer:
      "Timelines vary based on complexity. A standard website typically takes 4-6 weeks. We’ll provide a detailed timeline during our consultation",
  },
  {
    id: "4",
    question: "How much does a custom website cost?",
    answer:
      "Costs depend on factors like pages, features, and integrations. We provide a transparent quote after discussing your project needs.",
  },
  {
    id: "5",
    question: "How do we select small businesses for the charity initiative?",
    answer:
      "We choose businesses needing online support, focusing on growth potential. Apply via the charity section to be considered",
  },
];

export const Services = [
  {
    icon: (
      <Image
        src={WebIcon}
        alt="icon of website development"
        width={90}
        height={90}
      />
    ),
    service: "Website Design & Development",
    description: (
      <>
        We create responsive, conversion-focused{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          Websites
        </span>{" "}
        and{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          {" "}
          Web-Apps
        </span>{" "}
        that captivate users and drive business results.
      </>
    ),
    width: "607px",
  },

  {
    icon: (
      <Image
        src={BrandingIcon}
        alt="icon of website development"
        width={90}
        height={90}
      />
    ),

    service: "Branding & Visual Identity",

    description: (
      <>
        We Design logos, color schemes, and{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          brand
        </span>{" "}
        assets that make your{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          business
        </span>{" "}
        unforgettable.
      </>
    ),
    width: "488px",
  },
  {
    icon: (
      <Image
        src={ContentIcon}
        alt="icon of Content Strategy & Copywriting"
        width={90}
        height={90}
      />
    ),
    service: "SEO & Content Strategy",

    description: (
      <>
        We
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          {" "}
          optimize
        </span>{" "}
        your website for search engines and craft compelling{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          {" "}
          content{" "}
        </span>
        that speaks to your audience.
      </>
    ),
    width: "513px",
  },

  {
    icon: (
      <Image
        src={SupportIcon}
        alt="icon of maintenance and support"
        width={90}
        height={90}
      />
    ),
    service: "Web Maintenance & Support",

    description: (
      <>
        We Keep your website, up-to-date, and{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          performing
        </span>{" "}
        at its best with our ongoing support services.
      </>
    ),
    width: "488px",
  },
];

export const teamMembers = [
  {
    name: 1,
    image: "/gift.svg",
    hoverImage: "/gift2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
  {
    id: 2,
    image: "/PREYE.svg",
    hoverImage: "/PREYE2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
  {
    id: 3,
    image: "/kufre.svg",
    hoverImage: "/kufre2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
  {
    id: 4,
    image: "/aniebet.svg",
    hoverImage: "/aniebet2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
  {
    id: 5,
    image: "/abraham.svg",
    hoverImage: "/abraham2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
  {
    id: 6,
    image: "/shalom.svg",
    hoverImage: "/shalom2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
  {
    id: 7,
    image: "/chris.svg",
    hoverImage: "/chris2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
  {
    id: 8,
    image: "/jubril.svg",
    hoverImage: "/jubril2.svg",
    normalWidth: 140,
    normalHeight: 140,
  },
];

export const PORTFOLIO = [
  {
    image: "/portfolio-img1.png",
    project: "Daniel Araromi",
    span: "– Portfolio Website",
    link: "https://offer-portfolio.vercel.app/",
    gif: "/Daniel-Portfolio.gif",
  },
  {
    image: "/portfolio-img5.png",
    project: "R&R Therapy",
    span: " – Web Application",
    link: "https://therapy-nine-ivory.vercel.app/",
    gif: "/therapy.gif",
  },
  {
    image: "/portfolio-img4.png",
    project: "Xhibit",
    span: " – Web Application",
    link: "https://www.hodlegal.org/",
    gif: "/xhibit-portfolio.gif",
  },

  {
    image: "/portfolio-img2.png",
    project: "H.O.D LEGAL",
    span: " – Website Development",
    link: "https://www.hodlegal.org/",
    gif: "/hod-portfolio.gif",
  },

  {
    image: "/portfolio-img6.png",
    project: "LetsCr8T",
    span: " – Agency Website",
    link: "https://www.hodlegal.org/",
    gif: "/letscr8t-portfolio.gif",
  },
  {
    image: "/portfolio-img3.png",
    project: "WeCr8T ",
    span: " – Agency Website",
    link: "https://www.wecr8t.xyz",
    gif: "/Wecr8t-portfolio.gif",
  },
];
export const worksData = [
  {
    image: "/project-1.svg",
    project: "XHIBIT WEB-APP",
    link: "https://offer-portfolio.vercel.app/",
  },
  {
    image: "/project-2.svg",
    project: "RISIDIO WEBSITE",
    link: "https://therapy-nine-ivory.vercel.app/",
  },
  {
    image: "/project-1.svg",
    project: "XHIBIT WEB-APP",
    link: "https://offer-portfolio.vercel.app/",
  },
  {
    image: "/project-2.svg",
    project: "RISIDIO WEBSITE",
    link: "https://therapy-nine-ivory.vercel.app/",
  },
  {
    image: "/project-1.svg",
    project: "XHIBIT WEB-APP",
    link: "https://offer-portfolio.vercel.app/",
  },
];

export const ServiceListingData = [
  {
    service_name: "Design & User Experience",
    one: " UX Design",
    two: "Prototyping",
    three: "Web Accessibility",
    four: "User testing",
  },

  {
    service_name: "Branding & Visual Identity",
    one: "Branding",
    two: "Brand Strategy ",
    three: " Visual & Motion identity",
    four: "Graphic Design",
  },

  {
    service_name: "Custom Development",
    one: "Website & Web-App Development",
    two: "Mobile App Development",
    three: "E-Commerce Solutions",
    four: "Creative Tech",
  },
  {
    service_name: "Content Strategy & Maintenance",
    one: "Content Strategy",
    two: "SEO Copywriting",
    three: "Ongoing Maintenance:",
    four: "Support Services",
  },
];
export const categoriesData = [
  {
    title: "Website Design",
  },
  {
    title: "Web Development",
  },
  {
    title: " Tools & Productivity",
  },
  {
    title: "Case Studies & Projects",
  },
  {
    title: "Start-Up & Small Business",
  },
  {
    title: "Web Trends & Innovations",
  },
];
export const recentPostData = [
  {
    date: "November 12, 2024",
    title: "  10 Essential Features Every Modern Website Needs in 2024",
  },
  {
    date: "November 12, 2024",
    title: "  10 Essential Features Every Modern Website Needs in 2024",
  },
  {
    date: "November 12, 2024",
    title: "  10 Essential Features Every Modern Website Needs in 2024",
  },
];

export const clientChallengeData = [
  {
    icon: "/crown.svg",
    title: "Captivating Designs",
    content:
      "We create visually striking, user-friendly designs that leave a lasting impression on your audience.",
  },

  {
    icon: "/crown.svg",
    title: "Copy That Connects",
    content:
      "Your message matters. We craft clear, engaging copy that speaks to your audience and drives action",
  },
  {
    icon: "/crown.svg",
    title: "Built for Mobile and Speed",
    content:
      "With over 50% of web traffic on mobile, we ensure your site is fast, responsive, and built to perform everywhere.",
  },
  {
    icon: "/crown.svg",
    title: "Strong Calls-to-Action (CTAs)",
    content:
      "We guide visitors seamlessly from curiosity to conversion with bold, strategic CTAs that get results.",
  },

  {
    icon: "/crown.svg",
    title: "Future-Proof Development",
    content:
      "Your website or app will be scalable, secure, and ready to grow alongside your business",
  },
  {
    icon: "/crown.svg",
    title: "Support You Can Count On",
    content:
      "We’re here to help—before, during, and after your launch. Think of us as your long-term partner.",
  },
];

export const howItWorksData = [
  {
    icon: "/3.svg",
    title: "Schedule",
    content:
      "Book a free consultation to discuss your vision and how we can bring it to life.",
  },

  {
    icon: "/1.svg",
    title: "Create",
    content:
      "We design and develop a solution tailored to your business needs.",
  },
  {
    icon: "/2.svg",
    title: "Launch",
    content:
      "Bring your vision to life, share it with the world, and start growing your business.",
  },
];
