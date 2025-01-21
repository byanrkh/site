import Title from "@/components/Layout/Title";
import React from "react";

export default function About() {
  return (
    <section>
      <Title>About</Title>
      <div className="space-y-8">
        <p>
          Abyan was born in <u>Jakarta, Indonesia</u>. a 16 years web developer
          🧑‍💻. Being exposed to the creative arts and sciences at an early age,
          this has always guided him on the path to learn something new and be
          curious of how things work,{" "}
          <span className="underline">
            a Front End developer who loves to create new things
          </span>{" "}
          🤞
        </p>
        <ul className="list-disc space-y-4 justify ml-8 dot">
          <li>
            ✨ I spend my spare time building and developing free Apps and Web
            Applications because I want to continue growing and honing my skills
            😄.
          </li>{" "}
          <li>
            🤝 I&#39;m always excited to collaborate with others and contribute
            to different projects. If you have a project that needs an extra set
            of hands or fresh ideas, feel free to reach out to me!{" "}
          </li>
          <li>
            📬 If you come across anything interesting in my projects or have a
            project you&#39;d like me to collaborate on, please don&#39;t
            hesitate to get in touch. Let&#39;s create something awesome
            together!
          </li>
        </ul>
      </div>
    </section>
  );
}
