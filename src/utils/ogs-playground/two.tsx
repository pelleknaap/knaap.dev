import React from "react";
import {
  createFont,
  generateDynamicOpengraph,
} from "@utils/generateDynamicOpengraph";

const template = (
  <div
    style={{
      background: "rgb(33, 39, 55)",
      width: "100%",
      height: "100%",
      padding: "0 8rem",
      color: "white",
      display: "flex",
    }}
  >
    <svg
      style={{
        color: "rgb(179, 136, 235)",
        position: "absolute",
        left: "2rem",
        top: "2rem",
        transform: "rotate(45deg)",
      }}
      viewBox="0 0 104 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.8423 28.0455C40.1003 40.488 33.7034 47.4071 42.3311 59.9567C45.574 64.6737 51.0754 64.9647 56.1978 64.8456C74.2193 64.4265 90.3714 47.8042 85.2644 29.6456C78.7565 6.50604 51.7424 -1.83704 31.1311 6.00113C6.09473 15.5221 -5.65504 48.9498 10.2422 71.0678C22.6415 88.3189 42.2065 96.8456 62.9533 96.8456C66.5389 96.8456 95.1311 94.2304 95.1311 88.49C95.1311 83.9025 74.0003 74.3094 92.7311 84.8456C94.4674 85.8222 103.052 87.8944 100.642 90.4456C95.7931 95.5799 89.2215 102.363 91.0422 109.646"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
      ></path>
    </svg>

    <p
      style={{
        fontSize: 72,
        fontWeight: "bold",
        marginTop: "10rem",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
);

const fonts = [
  await createFont({
    name: "IBM Plex Mono",
    weight: 400,
    style: "normal",
    path: "https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf",
  }),
  await createFont({
    name: "IBM Plex Mono",
    weight: 600,
    style: "normal",
    path: "https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf",
  }),
];

const generateOgImage = async () => generateDynamicOpengraph(template, fonts);

export default generateOgImage;
