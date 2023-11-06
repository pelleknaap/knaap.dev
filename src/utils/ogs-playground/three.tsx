import React from "react";
import {
  createFont,
  generateDynamicOpengraph,
} from "@utils/generateDynamicOpengraph";

const isDev = import.meta.env.DEV;

const template = (
  <div
    style={{
      background: "#F0EEEA",
      width: "100%",
      height: "100%",
      color: "#000000",
      display: "flex",
      alignItems: "center",
    }}
  >
    <p
      style={{
        fontSize: 48,
        fontWeight: "bold",
        margin: "-1rem 0 0 4rem",
        maxWidth: "50%",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <img
      src={`${
        isDev ? "http://localhost:3000" : "https://knaap.dev"
      }/assets/mock-up-og.png`}
      height="630"
      alt="Redunant"
    />
  </div>
);

const fonts = [
  await createFont({
    name: "Space Grotesk",
    weight: 700,
    style: "normal",
    path: "https://github.com/floriankarsten/space-grotesk/blob/master/fonts/ttf/static/SpaceGrotesk-Bold.ttf?raw=true",
  }),
];

const generateOgImage = async () => generateDynamicOpengraph(template, fonts);

export default generateOgImage;
