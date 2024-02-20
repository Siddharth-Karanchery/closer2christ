"use client";

import * as React from "react";

import styles from "./about.module.css";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box className={styles.About}>
      <Box className={styles.About__left}>
        <img
          className={styles.About_left__image}
          src={
            "https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="people praying"
        />
      </Box>
      <Box className={styles.About__right}>
        <Typography variant="h4" className={styles.About__right__title}>
          About
        </Typography>
        <Typography variant="h6" style={{ margin: "20px 0" }}>
          I was once a lost sheep of Christ. Who strayed far from Him, was
          tempted to challenge Him, to question Him. I lived most of my life in
          this way. However, He will never let His sheep stray for too long. He
          came for me, He made me see the err of my ways. Picked me up even
          though I did not deserve it and loved me even thought I hadn&apos;t
          earned it.
          <br />
          <br />
          Over the past couple of years, I have spent my time in learning more
          about our Lord and saviour Jesus Christ, about The Holy Trinity, the
          teachings of the Catholic Church and anything about my faith, that
          would bring me closer to Christ. And I came to realise that there
          might be others out there who are lost and have been found. So I set
          out to use my God given skills as a web developer to help my fellow
          brothers and sisters in Christ in order make their journey to get
          closer to Christ, a bit easier.
          <br />
          <br />
          Please feel free to reach out with thoughts, feedback and suggestions.
          May the peace of our Lord be with you always
        </Typography>
        <Typography variant="subtitle1" className={styles.About__right__sign}>
          - Sid
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
