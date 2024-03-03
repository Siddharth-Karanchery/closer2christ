import * as React from "react";

import { Box, Typography } from "@mui/material";
import styles from "./Votd.module.css";
import { getVerseofDay } from "@/utils/votd";

import useMediaQuery from "@mui/material/useMediaQuery";

function Votd() {
  const [verse, setVerse] = React.useState<voutdType[]>();

  const isMobile = useMediaQuery("(max-width:450px)");

  React.useEffect(() => {
    getVerseofDay().then((data) => {
      setVerse(data);
    });
  }, []);

  let verseText: string = "";
  verse?.forEach((line) => {
    verseText += line.text;
  });

  return (
    <Box className={styles.Votd}>
      <Box className={styles.Votd__frame}>
        <Typography variant="h4">Verse of the day</Typography>
        {verse && (
          <Box className={styles.Votd__frame__body}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              fontWeight={"bold"}
            >{`${verse[0]?.bookname} ${verse[0]?.chapter}: ${verse[0]?.verse}-${
              verse[verse.length - 1]?.verse
            }`}</Typography>
            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              sx={{ textAlign: "justify" }}
            >{`"${verseText}"`}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Votd;
