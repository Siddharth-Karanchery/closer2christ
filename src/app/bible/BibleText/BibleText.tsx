import * as React from "react";

import styles from "./BibleText.module.css";
import { Box, Typography } from "@mui/material";

function BibleText(props: any) {
  console.log("props: ", props);
  let displayText = "";

  console.log(props.verse.slice(1));
  props.verse.slice(1).forEach((ele: any) => {
    console.log("ele: ", ele);
    if (ele.type === "text") {
      console.log("text: ", ele);
      displayText = displayText + ele.text;
    } else if (ele.type === "tag") {
      console.log("text: ", ele);
      displayText = displayText + ele.items[0].text;
    }
  });

  console.log("displayText: ", displayText);
  return (
    <Box className={styles.BibleText}>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginRight: "5px" }}
      >
        {props.verse[0].attrs.number}
      </Typography>
      <Typography>{displayText}</Typography>
      <br />
    </Box>
  );
}

export default BibleText;
