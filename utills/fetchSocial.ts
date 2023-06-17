import { Social } from "../typings";

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  console.log("first");

  const data = await res.json();
  const socials: Social[] = data.socials;

  console.log("fetching", socials);

  return socials;
};
