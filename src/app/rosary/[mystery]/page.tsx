"use client";

import {
  gloriousMysteries,
  joyfulMysteries,
  luminousMysteries,
  sorrowfulMysteries,
} from "@/data/mysteries";

import styles from "./mystery.module.css";
import { Box, Typography } from "@mui/material";

function Mystery({ params }: { params: { mystery: string } }) {
  let mysteryData: mysteryType[] = [];

  switch (params.mystery) {
    case "joyful":
      mysteryData = joyfulMysteries;
      break;
    case "luminous":
      mysteryData = luminousMysteries;
      break;
    case "sorrowful":
      mysteryData = sorrowfulMysteries;
      break;
    case "glorious":
      mysteryData = gloriousMysteries;
      break;

    default:
      mysteryData = [];
  }

  return (
    <Box className={styles.Mystery}>
      <Box className={styles.Mystery__Left}>Left</Box>
      <Box className={styles.Mystery__Center}>
        {mysteryData.map((mystery) => (
          <Box className={styles.Mystery__Card} key={mystery.title}>
            <Typography variant="h4">{mystery.title}</Typography>
            <img
              src={mystery.imageLink}
              className={styles.Mystery__Card__img}
              alt="mystery image"
            />
            <Typography
              variant="h6"
              className={styles.Mystery__Card__reflection}
            >
              {mystery.reflection}
            </Typography>
            <Typography style={{ margin: "10px 0" }}>{mystery.note}</Typography>
          </Box>
        ))}
      </Box>
      <Box className={styles.Mystery__Right}>Right</Box>
    </Box>
  );
}

export default Mystery;
