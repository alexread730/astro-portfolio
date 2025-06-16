export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Software Engineer",
    company: "AdCellerant",
    dates: "02/2022 - Present",
    description: [
      "Brought clarity and efficiency to a fast-moving sales workflow by engineering new features and squashing bugs across a React/GraphQL/NodeJS stack.",
      "Contributed to over 17 repositories behind AdCellerant’s sales platform — building tools that are functional and design conscious",
      "Built the PowerPoint Proposal Service from scratch — a dynamic system that transforms raw data into custom-branded decks, complete with composite static maps via the Mapbox API.",
      "Developed the Line Item History Log, enabling account managers to track and review every change in granular detail.",
      "Collaborated in a cross-functional team of up to 10 engineers, shipping clean code, following best practices, and pushing weekly releases to production.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Intrinio",
    dates: "10/2017 - 02/2022",
    description: [
      "Designed and implemented UI, features, and APIs across a data marketplace serving financial professionals.",
      "Engineered SDKs in six languages to interface with proprietary APIs handling hundreds of thousands of daily requests.",
      "Served as the go-between for engineering, marketing, and sales, translating client requirements into scalable technical specs.",
      "Balanced frontend precision with backend resilience in a fast-paced, fully remote environment.",
    ],
  },
  {
    title: "Head of Customer Experience",
    company: "Solé Bicycles",
    dates: "09/2015 - 12/2016",
    description: [
      "Oversaw all customer touchpoints — including support channels, returns, repairs, and logistics.",
      "Contributed to product design, branding, and feedback integration across multiple departments.",
      "Managed POS and warehousing systems to track and update inventory",
    ],
  },
];
