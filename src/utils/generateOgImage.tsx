import { SITE } from "@config";
import React from "react";
import {
  createFont,
  generateDynamicOpengraph,
} from "@utils/generateDynamicOpengraph";

const template = (text: string) => {
  return (
    <div
      style={{
        background: "rgb(33, 39, 55)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          border: "4px solid rgb(179, 136, 235)",
          background: "rgb(33, 39, 55)",
          opacity: "0.9",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem",
          width: "88%",
          height: "80%",
        }}
      />

      <div
        style={{
          border: "4px solid rgb(179, 136, 235)",
          background: "rgb(33, 39, 55)",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
            width: "90%",
            height: "90%",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              maxHeight: "84%",
              overflow: "hidden",
            }}
          >
            {text}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "8px",
              fontSize: 28,
            }}
          >
            <span>
              by{" "}
              <span
                style={{
                  color: "transparent",
                }}
              >
                "
              </span>
              <span style={{ overflow: "hidden", fontWeight: "bold" }}>
                {SITE.author}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const generateOgImage = async (text = SITE.title) =>
  generateDynamicOpengraph(template(text), fonts);

export default generateOgImage;
