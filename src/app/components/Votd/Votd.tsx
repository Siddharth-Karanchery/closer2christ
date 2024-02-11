import * as React from "react";

import { Box, Typography } from "@mui/material";
import styles from "./Votd.module.css";
import { getVerseofDay } from "@/utils/votd";

function Votd() {
  const [verse, setVerse] = React.useState<voutdType[]>();

  React.useEffect(() => {
    getVerseofDay().then((data) => {
      setVerse(data);
    });
  }, []);

  console.log("verse: ", verse);

  let verseText: string = "";
  verse?.forEach((line) => {
    console.log("line.text: ", line.text);
    verseText = verseText + line.text;
  });

  console.log("verseText: ", verseText);

  return (
    <Box className={styles.Votd}>
      <Box className={styles.Votd__frame}>
        <Typography variant="h3">Verse of the day</Typography>
        {verse && (
          <Box className={styles.Votd__frame__body}>
            <Typography variant="h4">{`${verse[0]?.bookname} ${
              verse[0]?.chapter
            }: ${verse[0]?.verse}-${
              verse[verse.length - 1]?.verse
            }`}</Typography>
            <Typography variant="h6">{verseText}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Votd;
