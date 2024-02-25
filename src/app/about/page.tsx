"use client";

import * as React from "react";

import styles from "./about.module.css";
import { Box } from "@mui/material";

import AboutElement from "./AboutElement/AboutElement";

function About() {
  return (
    <Box className={styles.About}>
      <AboutElement flip={false} selection={"about"} />
      <AboutElement selection={"credits"} flip={true} />
    </Box>
  );
}

export default About;
