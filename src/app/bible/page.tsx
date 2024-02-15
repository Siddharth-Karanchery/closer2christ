"use client";
import { Box, Select, MenuItem, InputLabel } from "@mui/material";
import axios from "axios";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

import styles from "./Bible.module.css";

function Bible() {
  const [bibles, setBibles] = React.useState<any[]>([]);
  React.useEffect(() => {
    axios
      .get(`https://api.scripture.api.bible/v1/bibles`, {
        headers: { "api-key": "1bc71a5553447160556f92fa1b817af4" },
      })
      .then((res) => {
        console.log("res.data: ", res.data.data);
        setBibles(res.data.data);
      });
  }, []);

  const bibleData = [
    { label: "Bible 1", id: 1, dbId: 1 },
    { label: "Bible 2", id: 2, dbId: 2 },
    { label: "Bible 3", id: 3, dbId: 3 },
    { label: "Bible 4", id: 4, dbId: 4 },
    { label: "Bible 5", id: 5, dbId: 5 },
  ];

  return (
    <Box className={styles.Bible}>
      <Box className={styles.Bible__filterPanel}>
        <select className={styles.Bible__filterPanel__filter} title="test">
          <option value="" disabled selected>
            <em>Select a bible</em>
          </option>
          {bibles &&
            bibles.map((bible) => (
              <option value={bible.id} key={bible.name}>
                {bible.name}
              </option>
            ))}
        </select>
        <select className={styles.Bible__filterPanel__filter} title="test">
          <option value="" disabled selected>
            <em>Select a Book</em>
          </option>
          {bibleData.map((bible) => (
            <option value={bible.id} key={bible.label}>
              {bible.label}
            </option>
          ))}
        </select>
        <select className={styles.Bible__filterPanel__filter} title="test">
          <option value="" disabled selected>
            <em>Select a Chapter</em>
          </option>
          {bibleData.map((bible) => (
            <option value={bible.id} key={bible.label}>
              {bible.label}
            </option>
          ))}
        </select>
        <select className={styles.Bible__filterPanel__filter} title="test">
          <option value="" disabled selected>
            <em>Select a Verse</em>
          </option>
          {bibleData.map((bible) => (
            <option value={bible.id} key={bible.label}>
              {bible.label}
            </option>
          ))}
        </select>
      </Box>
      Bible
    </Box>
  );
}

export default Bible;
