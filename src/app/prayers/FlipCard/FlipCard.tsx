import { Box, Typography } from "@mui/material";
import * as React from "react";

import styles from "./FlipCard.module.css";

function FlipCard(props: any) {
  let textVariant = props.type === "front" ? "h4" : "h6";
  return (
    <Box className={styles.FlipCard}>
      <Typography
        /*@ts-ignore*/
        variant={textVariant}
        className={styles.FlipCard__text}
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
}

export default FlipCard;
