"use client";
import { prayerData } from "@/data/prayers";
import { Box, Typography } from "@mui/material";
import styles from "./prayers.module.css";

//@ts-ignore
import Flippy, { FrontSide, BackSide } from "react-flippy";

function Prayers() {
  return (
    <Box className={styles.prayers}>
      {prayerData.map((prayer) => (
        <Flippy
          key={prayer.name}
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{
            width: "30rem",
            height: "20rem",
            backgroundColor: "rgb(120, 120, 120)",
          }} /// these are optional style, it is not necessary
        >
          <FrontSide>
            <Typography variant={"h4"}>{prayer.name}</Typography>
          </FrontSide>
          <BackSide>
            <Typography variant={"h6"} sx={{ cursor: "pointer" }}>
              {prayer.prayer}
            </Typography>
          </BackSide>
        </Flippy>
      ))}
    </Box>
  );
}

export default Prayers;
