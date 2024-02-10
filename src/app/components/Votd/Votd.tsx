import * as React from "react";

import { Box, Typography } from "@mui/material";
import styles from "./Votd.module.css";
import { getVerseofDay } from "@/utils/votd";

function Votd() {
  const [verse, setVerse] = React.useState<voutdType>();

  React.useEffect(() => {
    getVerseofDay().then((data) => {
      setVerse(data);
      console.log("data: ", data);
    });
  }, []);

  return (
    <Box className={styles.Votd}>
      <Box className={styles.Votd__frame}>
        <Typography variant="h3">Verse of the day</Typography>
        <Box className={styles.Votd__frame__body}>
          <Typography variant="h4">{`${verse?.bookname} ${verse?.chapter}: ${verse?.verse}`}</Typography>
          <Typography variant="h5">{verse?.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Votd;
