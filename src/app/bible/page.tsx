"use client";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { API_KEY } from "../../data/data";

import styles from "./Bible.module.css";
import BibleText from "./BibleText/BibleText";

function Bible() {
  const [bibles, setBibles] = React.useState<any[]>([]);
  const [selBible, setSelBible] = React.useState<string>("");
  const [books, setBooks] = React.useState<any[]>([]);
  const [selBook, setSelBook] = React.useState<string>("");
  const [chapters, setChapters] = React.useState<any[]>([]);
  const [selChapter, setSelChapter] = React.useState<string>("");
  const [verses, setVerses] = React.useState<any[]>([]);
  const [selVerse, setSelVerse] = React.useState<string>("");
  const [passage, setPassage] = React.useState<any[]>([]);
  React.useEffect(() => {
    axios
      .get(`https://api.scripture.api.bible/v1/bibles`, {
        headers: { "api-key": API_KEY },
      })
      .then((res) => {
        let sorted = res.data.data.sort((a: any, b: any) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        ); // b - a for reverse sort

        console.log("bibles: ", sorted);
        setBibles(sorted);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://api.scripture.api.bible/v1/bibles/${selBible}/books`, {
        headers: { "api-key": API_KEY },
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
          headers: { "api-key": API_KEY },
        }
      )
      .then((res) => {
        console.log("Chapters: ", res.data.data);
        setChapters(res.data.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selBook]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/${selBible}/chapters/${selChapter}/verses`,
        {
          headers: { "api-key": API_KEY },
        }
      )
      .then((res) => {
        console.log("Verses: ", res.data.data);
        setVerses(res.data.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selChapter]);

  const handleBibleSelect = (e: any) => {
    setSelBible(e.target.value);
  };

  const handleBookSelect = (e: any) => {
    setSelBook(e.target.value);
  };

  const handleChapterSelect = (e: any) => {
    setSelChapter(e.target.value);
  };

  const handleVerseSelect = (e: any) => {
    setSelVerse(e.target.value);
  };

  const handleSearch = (e: any) => {
    const passageID = selVerse ? selVerse : selChapter;
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/${selBible}/passages/${passageID}?content-type=json&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`,
        {
          headers: { "api-key": API_KEY },
        }
      )
      .then((res) => {
        console.log("Passage: ", res.data.data.content);
        setPassage(res.data.data.content);
      });
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
        <select
          className={styles.Bible__filterPanel__filter}
          title="test"
          onChange={handleVerseSelect}
        >
          <option value="" disabled selected>
            <em>Select a Verse</em>
          </option>
          {verses.map((verse) => (
            <option value={verse.id} key={verse.id}>
              {verse.id.split(".")[2]}
            </option>
          ))}
        </select>
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
          disabled={!selChapter}
        >
          Search
        </Button>
      </Box>
      <Box className={styles.Bible__passage}>
        {passage &&
          passage.map((element, index) => {
            console.log("element: ", element);
            return <BibleText key={index} verse={element.items} />;
          })}
      </Box>
    </Box>
  );
}

export default Bible;
