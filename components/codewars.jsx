import React from "react";
import Image from "next/image";

import SectionHeading from "./section-heading";

export default function Codewars() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Codewars Rank</SectionHeading>
      <a
        href="https://www.codewars.com/users/sergio-nezhigay"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to my codewars profile"
      >
        <Image
          src="https://www.codewars.com/users/sergio-nezhigay/badges/large"
          alt="Codewars Badge"
          width={400}
          height={100}
        />
      </a>
    </section>
  );
}
