import type { APIRoute } from "astro";
import ogMap from "@utils/ogs-playground/map";
import generateOgImage from "@utils/generateOgImage.tsx";

export const get: APIRoute = async ({ params }) => {
  if (ogMap[params.ogId]) {
    return new Response(
      await ogMap[params.ogId](), {
        status: 200,
        headers: { "Content-Type": "image/svg" },
      }
    );
  }
};

export function getStaticPaths() {
  return Object.keys(ogMap).map(ogId => ({
    params: { ogId },
  }));
}
