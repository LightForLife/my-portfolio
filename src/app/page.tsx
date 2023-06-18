import { GetStaticProps } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import foto from "../../public/good.jpg";
import { PageInfo, Skill, Experience, Project, Social } from "../../typings";
import { fetchPageInfo } from "../../utills/fetchPageInfo";
import { fetchExperience } from "../../utills/fetchExperiences";
import { fetchSkills } from "../../utills/fetchSkills";
import { fetchProjects } from "../../utills/fetchProjects";
import { fetchSocials } from "../../utills/fetchSocial";
import { sanityClient, urlFor } from "../../sanity";

// ====================================
import { createClient } from "next-sanity";

const client = createClient({
  dataset: "production",
  projectId: "8d8ggv0h",
  apiVersion: "2023-06-12",
  useCdn: true,
});

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ socials }: Props) {
  return (
    <main
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={foto}
              width={600}
              height={600}
              alt="Buttom to top"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            ></Image>
          </div>
        </footer>
      </Link>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: { pageInfo, experiences, skills, projects, socials },
    revalidate: 10,
  };
};
