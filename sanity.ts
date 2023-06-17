import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2023-06-12",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => imageUrlBuilder(config).image(source);

// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// export const clienConfig = {
//   dataset: "production",
//   projectId: "8d8ggv0h",
//   apiVersion: "2023-06-12",
//   useCdn: true,
// };

// export const sanityClient = createClient(clienConfig);

// export const urlFor = (source: any) =>
//   imageUrlBuilder(clienConfig).image(source);
