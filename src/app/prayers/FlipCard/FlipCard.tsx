import { Box, Typography } from "@mui/material";
import * as React from "react";

import styles from "./FlipCard.module.css";

function FlipCard(props: any) {
  let textVariant = props.type === "front" ? "h4" : "h6";
  return (
    <Box className={styles.FlipCard}>
      {props.text.map((line: string, index: number) => (
        <Typography
          key={index}
          /*@ts-ignore*/
          variant={textVariant}
          className={styles.FlipCard__text}
          style={{
            margin: "5px 0",
          }}
        >
          {line}
        </Typography>
      ))}
    </Box>
  );
}

export default FlipCard;
