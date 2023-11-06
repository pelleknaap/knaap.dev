import type { APIRoute } from "astro";
import ogMap from "@utils/ogs-playground/map";

export const get: APIRoute = async ({ params }) => {
  if (ogMap[params.ogId]) {
    return {
      body: await ogMap[params.ogId](),
    };
  }
};

export function getStaticPaths() {
  return Object.keys(ogMap).map(ogId => ({
    params: { ogId },
  }));
}
