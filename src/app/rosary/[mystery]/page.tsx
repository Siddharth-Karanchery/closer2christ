"use client";

import {
  gloriousMysteries,
  joyfulMysteries,
  luminousMysteries,
  sorrowfulMysteries,
} from "@/data/mysteries";

import styles from "./mystery.module.css";
import { Box, Card, Paper, Tooltip, Typography } from "@mui/material";
import { prayerGuidePrayers } from "@/data/prayers";

function Mystery({ params }: { params: { mystery: string } }) {
  let mysteryData: mysteryType[] = [];
  let mysteryTitle: string = "";

  switch (params.mystery) {
    case "joyful":
      mysteryData = joyfulMysteries;
      mysteryTitle = "The Five Joyful Mysteries";
      break;
    case "luminous":
      mysteryData = luminousMysteries;
      mysteryTitle = "The Five Luminous Mysteries";
      break;
    case "sorrowful":
      mysteryData = sorrowfulMysteries;
      mysteryTitle = "The Five Sorrowful Mysteries";
      break;
    case "glorious":
      mysteryData = gloriousMysteries;
      mysteryTitle = "The Five Glorious Mysteries";
      break;

    default:
      mysteryData = [];
      mysteryTitle = "";
  }

  return (
    <Box className={styles.Mystery}>
      <Typography variant="h4" className={styles.Mystery__Title}>
        {mysteryTitle}
      </Typography>
      <Box className={styles.Mystery__Panel}>
        <Box className={styles.Mystery__Left}>
          <iframe
            className={styles.Mystery__Spotify}
            title="Spotify Player"
            src="https://open.spotify.com/embed/playlist/7b9cGNBlYjCWEmrS3643Zf?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box className={styles.Mystery__Center}>
          {mysteryData.map((mystery) => (
            <Box className={styles.Mystery__Card} key={mystery.title}>
              <Typography variant="h4">{mystery.title}</Typography>
              <img
                src={mystery.imageLink}
                className={styles.Mystery__Card__img}
                alt="mystery image"
              />
              <Typography
                variant="h6"
                className={styles.Mystery__Card__reflection}
              >
                {mystery.reflection}
              </Typography>
              <Typography style={{ margin: "10px 0" }}>
                {mystery.note}
              </Typography>
            </Box>
          ))}
          <Typography variant="h5" margin={"20px 0 10px 0"}>
            After the 5th Mystery{" "}
          </Typography>
          <Box className={styles.Mystery__Card}>
            <Typography variant="h4">Hail Holy Queen (Salve Regina)</Typography>
            <img
              src="https://img.freepik.com/premium-photo/virgen-del-carmen-blessed-virgin-mary-faith-bible-theology-mother-god-christianity-carmel-mother-jesus-christ-one-central-figures-european-world-culture-generative-ai_887181-3576.jpg"
              className={styles.Mystery__Card__img}
              alt="mystery image"
            />

            <Typography
              variant="h6"
              className={styles.Mystery__Card__reflection}
            >
              Hail, holy Queen, Mother of mercy, our life, our sweetness and our
              hope. To thee do we cry, poor banished children of Eve. To thee do
              we send up our sighs, mourning and weeping in this valley of
              tears. Turn, then, most gracious advocate, thine eyes of mercy
              toward us, and after this, our exile, show unto us the blessed
              fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin
              Mary.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.Mystery__Right}>
          <Paper className={styles.Mystery__Right__card}>
            <Typography variant="h6">Rosary Reference</Typography>
            <Tooltip title="https://www.dummies.com/article/body-mind-spirit/religion-spirituality/christianity/catholicism/how-to-pray-the-rosary-192609/">
              <img
                src="https://www.dummies.com/wp-content/uploads/195875.image0.jpg"
                style={{ mixBlendMode: "multiply" }}
                alt="rosary reference"
              />
            </Tooltip>
          </Paper>
          {prayerGuidePrayers.map((prayer) => (
            <Paper key={prayer.name} className={styles.Mystery__Right__card}>
              <Typography variant="h6">{prayer.name}</Typography>
              <Typography variant="body1">{prayer.prayer}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Mystery;
