"use client";

import Giscus from "@giscus/react";
import React from "react";

export default function Comment() {
  return (
    <Giscus
      repo="byanrkh/site"
      repoId="R_kgDONsSOxA"
      category="General"
      categoryId="DIC_kwDONsSOxM4CmaAO"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="transparent_dark"
      lang="en"
    />
  );
}
