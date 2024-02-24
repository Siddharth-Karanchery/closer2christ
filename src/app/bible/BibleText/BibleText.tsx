import * as React from "react";

import styles from "./BibleText.module.css";
import { Box, Typography } from "@mui/material";

function BibleText(props: any) {
  let displayText = "";

  props.verse.forEach((ele: any) => {
    if (ele.type === "text") {
      displayText = displayText + ele.text;
    } else if (ele.type === "tag") {
      displayText = displayText + ele.items[0].text;
    }
  });

  function replaceNumberWithNewline(inputString: any) {
    var pattern = /\d+/g;
    var matches = inputString.match(pattern);

    var resultString = inputString;
    if (matches) {
      matches.forEach(function (number: string) {
        var replacement = "\n\n" + number + ". ";
        resultString = resultString.replace(number, replacement);
      });
    }

    return resultString;
  }

  return (
    <Box className={styles.BibleText}>
      <Typography
        style={{
          textAlign: "justify",
          marginBottom: "-20px",
          whiteSpace: "pre-line",
        }}
      >
        {replaceNumberWithNewline(displayText.replace("¶", ""))}
      </Typography>
    </Box>
  );
}

export default BibleText;
