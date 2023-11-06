import satori, { Font, SatoriOptions } from "satori";
import type React from "react";

const createFont = async ({
  name,
  path,
  weight,
  style,
}: Omit<Font & { path: string }, "data">): Promise<Font> => {
  const fontFile = await fetch(path);

  const fontBuffer: ArrayBuffer = await fontFile.arrayBuffer();

  return {
    data: fontBuffer,
    name,
    weight,
    style,
  };
};
const options: (fonts: Font[]) => SatoriOptions = fonts => {
  return {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts,
  };
};

const generateDynamicOpengraph = async (
  template: React.ReactNode,
  fonts: Font[]
) => await satori(template, options(fonts));

export { generateDynamicOpengraph, createFont };
