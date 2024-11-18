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
    image: "/ClientPhoto.svg",
  },
  {
    name: "Shalom James",
    position: "Designer BWL",
    text: "“From the onboarding to the work proper and then the revisions and the final work, it was an exception experience working with Viraaly on our deck.”",
    image: "/ClientPhoto.svg",
  },
  {
    name: "Aniebiet Obo",
    position: "Developer BWL",
    text: "WeCr8t provided us with reliable and efficient web solutions that streamlined our business operations.",
    image: "/ClientPhoto.svg",
  },
  {
    name: "Aniebiet Obo",
    position: "Developer BWL",
    text: "WeCr8t provided us with reliable and efficient web solutions that streamlined our business operations.",
    image: "/ClientPhoto.svg",
  },
  {
    name: "Aniebiet Obo",
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
      " LetsCr8T specializes in building custom websites, mobile apps, and digital experiences. We offer services in web design, website development, SEO, user experience (UX) design, and branding to help your business thrive online.",
  },
  {
    id: "2",
    question: "How can I get started with LetsCr8t?",
    answer:
      "Getting started is easy! Simply send us an email, and we'll schedule an initial consultation to discuss your needs and how we can help you achieve your online goals",
  },
  {
    id: "3",
    question: "How long does it take to complete a website project?",
    answer:
      "Project timelines can vary depending on the complexity of the website. Typically, a standard website takes 4-6 weeks from start to finish. We provide a customized timeline during our initial consultation.",
  },
  {
    id: "4",
    question: "How much does a custom website cost?",
    answer:
      "Pricing varies based on your project's requirements, such as the number of pages, specific features, and integrations. We provide a transparent quote after an initial consultation to discuss your needs and goals.",
  },
  {
    id: "5",
    question: "How do we select small businesses for the charity initiative?",
    answer:
      "We focus on small businesses that demonstrate a need for support in building their online presence. Each month, we choose one business based on their application, growth potential, and how we can best assist them with free web services. Interested? click on apply button in the charity section.",
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
    one: "Website Development",
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
    title: "BlockChain",
  },
  {
    title: "Criptocurrency marrket",
  },
  {
    title: "ICO listing",
  },
  {
    title: "Tokenomics",
  },
  {
    title: "Marketing",
  },
  {
    title: "Vrindacoin",
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
    title: "Is Your Message Clear Enough?",
    content:
      "Visitors need to instantly understand what you offer and why it’s the best choice. If your value proposition is unclear or buried under jargon, they’ll leave",
  },

  {
    icon: "/crown.svg",
    title: "Is Your Website Built for Humans?",
    content:
      "Confusing layouts, slow loading times, or poor mobile experience frustrate visitors. Over 50% of web traffic is mobile—if your site isn’t smooth, people won’t stay.",
  },
  {
    icon: "/crown.svg",
    title: "Are You Asking Visitors to Take Action?",
    content:
      "Without bold, clear calls-to-action (CTAs), visitors don’t know what to do next. Whether it’s booking, buying, or signing up, guide them to take action!",
  },
];

export const solutionsData = [
  {
    icon: "/crown.svg",
    title: "Designs That Captivate",
    content:
      "We craft visually stunning, user-friendly designs that make an unforgettable first impression, keeping visitors engaged and eager to learn more",
  },

  {
    icon: "/crown.svg",
    title: "Copy That Resonates",
    content:
      "Our messaging is clear, compelling, and tailored to your audience, ensuring visitors feel understood and are more likely to take action.",
  },
  {
    icon: "/crown.svg",
    title: "Development That Converts",
    content:
      "We build fast, seamless websites, guiding visitors smoothly from curiosity to action—turning clicks into customers.",
  },
];
export const howItWorksData = [
  {
    icon: "/3.svg",
    title: "Schedule",
    content:
      "Send and email or Book a free consultation to discuss your goals and challenges.",
  },

  {
    icon: "/1.svg",
    title: "Create",
    content: "We design and develop a website tailored to your business needs.",
  },
  {
    icon: "/2.svg",
    title: "Launch",
    content:
      "Go live with a conversion focused website ready to grow your business.",
  },
];
