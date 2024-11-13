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
    service: "Mobile & Web App Development",
    description: (
      <>
        We create custom{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          Mobile
        </span>{" "}
        and{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          {" "}
          web
        </span>{" "}
        apps that are easy to use, responsive, and fit your business needs.
        Whether you need a simple web or a sophisticated web app, we’ve got you
        covered.
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
    service: "Branding & Identity Design",

    description: (
      <>
        We help build your{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          brand
        </span>{" "}
        from the ground up with unique logos, color schemes, and design elements
        that make your{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          business
        </span>{" "}
        memorable.
      </>
    ),
    width: "488px",
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
        We ensure your website or app{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          runs smoothly
        </span>{" "}
        by managing updates, security, and troubleshooting, so you can focus on
        growing your business worry-free.
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
    service: "Content Strategy & Copywriting",

    description: (
      <>
        We craft compelling
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          {" "}
          content
        </span>{" "}
        that tells your story and engages your{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          {" "}
          audience
        </span>
        , attracting and converting customers with the right message at the
        right time.
      </>
    ),
    width: "513px",
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
    gif: "/therapy.gif",
  },
  {
    image: "/portfolio-img6.png",
    project: "LetsCr8T",
    span: " – Agency Website",
    link: "https://www.hodlegal.org/",
    gif: "/therapy.gif",
  },
  {
    image: "/portfolio-img5.png",
    project: "R&R Therapy",
    span: " – Web Application",
    link: "https://therapy-nine-ivory.vercel.app/",
    gif: "/therapy.gif",
  },

  {
    image: "/portfolio-img2.png",
    project: "H.O.D LEGAL",
    span: " – Website Development",
    link: "https://www.hodlegal.org/",
    gif: "/therapy.gif",
  },

  {
    image: "/portfolio-img4.png",
    project: "Xhibit",
    span: " – Web Application",
    link: "https://www.hodlegal.org/",
    gif: "/therapy.gif",
  },
  {
    image: "/portfolio-img3.png",
    project: "WeCr8T ",
    span: " – Agency Website",
    link: "https://www.wecr8t.xyz",
    gif: "/therapy.gif",
  },
];

export const ServiceListingData = [
  {
    service_name: "Design & User Experience",
    one: "User Experience (UX) Design",
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
    five: "Brand Guidelines",
    six: "Content Strategy & Copywriting",
  },

  {
    service_name: "Custom Development",
    one: "Custom Website Development",
    two: "Mobile App Development",
    three: "Creative Tech",
    four: "Web Maintenance & Support",
  },
];
