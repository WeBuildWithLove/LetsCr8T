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
    text: "We had the pleasure of engaging WeCr8T to develop a website for our firm, and the entire experience was exceptional. The team delivered a website that was sleek, user-friendly, and responsive, perfectly aligning with our vision. ",
    image: "/mfoniso.png",
  },
  {
    name: "Shalom James",
    position: "Designer BWL",
    text: "“From the onboarding to the work proper and then the revisions and the final work, it was an exception experience working with Viraaly on our deck.”",
    image: "/shalom.png",
  },
  {
    name: "Aniebiet Obo",
    position: "Developer BWL",
    text: "WeCr8t provided us with reliable and efficient web solutions that streamlined our business operations.",
    image: "/aniebet.png",
  },
  {
    name: "Aniebiet Obo",
    position: "Developer BWL",
    text: "WeCr8t provided us with reliable and efficient web solutions that streamlined our business operations.",
    image: "/aniebet.png",
  },
  {
    name: "Aniebiet Obo",
    position: "Developer BWL",
    text: "WeCr8t provided us with reliable and efficient web solutions that streamlined our business operations.",
    image: "/aniebet.png",
  },
];

// FAQs
export const FAQS = [
  {
    id: "1",
    question: "What services does WeCr8t offer?",
    answer:
      "We specialize in website and web app development, branding and identity design, web maintenance and support, and content strategy and copywriting. Whether you're building from scratch or need ongoing support, we’ve got you covered.",
  },
  {
    id: "2",
    question: "How can I get started with WeCr8t?",
    answer:
      "It’s easy! Just click the 'Start Project' button and fill out a quick form, or schedule a free consultation with our team. We’ll discuss your needs and create a plan that’s right for your business.",
  },
  {
    id: "3",
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of your project, but typically, a custom website can take anywhere from 4 to 8 weeks from start to launch. We’ll provide you with a detailed timeline after our initial consultation.",
  },
  {
    id: "4",
    question: "What are your prices?",
    answer:
      "Our prices vary depending on the type and complexity of the project. For example, a basic website will cost less than a custom web app with advanced features. Contact us for a personalized quote based on your specific needs.",
  },
  {
    id: "5",
    question: "How do we select small businesses for the charity initiative?",
    answer:
      "We focus on small businesses that demonstrate a need for support in building their online presence. Each month, we choose one business based on their application, growth potential, and how we can best assist them with free web services.",
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
        Whether you need a simple web or a complex web app, we’ve got you
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
        with a unique logo, colors, and style that make your{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          business
        </span>{" "}
        easy to recognize and memorable.
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
        We keep your website or app{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          running smoothly
        </span>{" "}
        by handling updates, security, and fixes so you don’t have to worry
        about a thing.
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
        We write engaging{" "}
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          {" "}
          content
        </span>{" "}
        that tells your story and connects with your
        <span className="text-cr8tOrange font-medium font-urban capitalize">
          audience
        </span>
        , making it easier to attract and keep customers.
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
    image: "/port1.svg",
    project: "Daniel Araromi",
    span: "– Portfolio Website",
    link: "https://www.hodlegal.org/",
  },
  {
    image: "/port2.svg",
    project: "H.O.D LEGAL",
    span: " – Website Development",
    link: "https://www.hodlegal.org/",
  },
  {
    image: "/port1.svg",
    project: "Xhibit",
    span: " – Web Application",
    link: "https://www.hodlegal.org/",
  },
  {
    image: "/port2.svg",
    project: "WeCr8T ",
    span: " – Agency Website",
    link: "https://www.hodlegal.org/",
  },
  {
    image: "/port1.svg",
    project: "H.O.D LEGAL",
    span: " – Website Development",
    link: "https://www.hodlegal.org/",
  },
  {
    image: "/port2.svg",
    project: "R&R Therapy",
    span: " – Web Application",
    link: "https://www.hodlegal.org/",
  },
];

export const ServiceListingData = [
  {
    service_name: "Design",
    one: "User Experience",
    two: "Prototyping",
    three: "Web Accessibility",
    four: "User testing",
  },
  {
    service_name: "Branding",
    one: "Brand Strategy ",
    two: " Visual & Motion identity",
    three: " Brand Guidelines",
  },

  {
    service_name: "Creative Tech",
    one: "Web Development",
    two: "Mobile App Development",
    three: "Web Maintenance & Support",
    four: "Content Strategy & Copywriting",
  },
];
