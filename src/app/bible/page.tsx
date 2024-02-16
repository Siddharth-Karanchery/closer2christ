"use client";
import { Box, Select, MenuItem, InputLabel } from "@mui/material";
import axios from "axios";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

import styles from "./Bible.module.css";

function Bible() {
  const [bibles, setBibles] = React.useState<any[]>([]);
  const [selBible, setSelBible] = React.useState<string>("");
  const [books, setBooks] = React.useState<any[]>([]);
  const [selBook, setSelBook] = React.useState<string>("");
  const [chapters, setChapters] = React.useState<any[]>([]);
  const [selChapter, setSelChapter] = React.useState<string>("");
  const [verses, setVerses] = React.useState<any[]>([]);
  const [selVerse, setSelVerse] = React.useState<string>("");
  React.useEffect(() => {
    axios
      .get(`https://api.scripture.api.bible/v1/bibles`, {
        headers: { "api-key": "1bc71a5553447160556f92fa1b817af4" },
      })
      .then((res) => {
        console.log("bibles: ", res.data.data);
        setBibles(res.data.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://api.scripture.api.bible/v1/bibles/${selBible}/books`, {
        headers: { "api-key": "1bc71a5553447160556f92fa1b817af4" },
      })
      .then((res) => {
        console.log("books: ", res.data.data);
        setBooks(res.data.data);
      });
  }, [selBible]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/${selBible}/books/${selBook}/chapters`,
        {
          headers: { "api-key": "1bc71a5553447160556f92fa1b817af4" },
        }
      )
      .then((res) => {
        console.log("Chapters: ", res.data.data);
        setChapters(res.data.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selBook]);

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.scripture.api.bible//v1/bibles/${selBible}/chapters/${selChapter}/verses`,
  //       {
  //         headers: { "api-key": "1bc71a5553447160556f92fa1b817af4" },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("Verses: ", res.data.data);
  //       // setSections(res.data.data);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selChapter]);

  const handleBibleSelect = (e: any) => {
    setSelBible(e.target.value);
  };

  const handleBookSelect = (e: any) => {
    setSelBook(e.target.value);
  };

  const handleChapterSelect = (e: any) => {
    console.log("e:", e.target);
    setSelChapter(e.target.value);
  };
  return (
    <Box className={styles.Bible}>
      <Box className={styles.Bible__filterPanel}>
        <select
          className={styles.Bible__filterPanel__filter}
          title="test"
          onChange={handleBibleSelect}
        >
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
        <select
          className={styles.Bible__filterPanel__filter}
          title="test"
          onChange={handleBookSelect}
        >
          <option value="" disabled selected>
            <em>Select a Book</em>
          </option>
          {books.map((book) => (
            <option value={book.id} key={book.name}>
              {book.name}
            </option>
          ))}
        </select>
        <select
          className={styles.Bible__filterPanel__filter}
          onChange={handleChapterSelect}
          title="test"
        >
          <option value="" disabled selected>
            <em>Select a Chapter</em>
          </option>
          {chapters.map((chapter) => (
            <option value={chapter.id} key={chapter.number}>
              {chapter.number}
            </option>
          ))}
        </select>
        {/* <select className={styles.Bible__filterPanel__filter} title="test">
          <option value="" disabled selected>
            <em>Select a Verse</em>
          </option>
          {sections.map((section) => (
            <option value={bible.id} key={bible.label}>
              {bible.label}
            </option>
          ))}
        </select> */}
      </Box>
      Bible
    </Box>
  );
}

export default Bible;
