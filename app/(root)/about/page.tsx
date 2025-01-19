import Divider from "@/components/Layout/Divider";
import Title from "@/components/Layout/Title";
import React from "react";

export default function page() {
  return (
    <>
      <section>
        <Title>About</Title>
        <div className="space-y-8">
          <p className="justify">
            Abyan was born in Jakarta, Indonesia. a 16 years web developer 🧑‍💻.
            Being exposed to the creative arts and sciences at an early age,
            this has always guided him on the path to learn something new and be
            curious of how things work, a Front End developer who loves to
            create new things 🤞
          </p>
          <ul className="list-disc space-y-5 ml-5">
            <li className="justify">
              ✨ I spend my spare time building and developing free Apps and Web
              Applications because I want to continue growing and honing my
              skills 😄.
            </li>
            <li className="justify">
              🤝 I'm always excited to collaborate with others and contribute to
              different projects. If you have a project that needs an extra set
              of hands or fresh ideas, feel free to reach out to me!
            </li>
            <li className="justify">
              📬 If you come across anything interesting in my projects or have
              a project you'd like me to collaborate on, please don't hesitate
              to get in touch. Let's create something awesome together!
            </li>
          </ul>
          <p className="justify">
            Feel free to explore my projects and get in touch for
            collaborations!
          </p>
        </div>
      </section>
      <Divider />
      <section>
        <Title>Tech Stack</Title>
        <p>
          This site is a NextJS Project. It uses TypeScript, ReactJS for
          components, TailwindCSS for styling, and Notion for blog/work content.
          It relies on the framework NextJS.
        </p>
      </section>
    </>
  );
}
