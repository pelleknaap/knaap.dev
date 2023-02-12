import type { SocialObjects } from "@types";

export const SITE = {
  website: "https://knaap.dev",
  author: "Pelle van der Knaap",
  desc: "My personal blog and site containing information about development and other personal interests.",
  title: "Pelle v/d Knaap",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pelleknaap",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://nl.linkedin.com/in/pelle-van-der-knaap-b3a4201a7",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:pelle.vd.knaap@xs4all.nl",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/pellevdknaap",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
];
