import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "csd7x6wg",
  dataset: "production",
  apiVersion: "2026-04-16",
  useCdn: false,
});
