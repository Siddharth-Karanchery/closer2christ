"use client";
import * as React from "react";

import { Box, Typography } from "@mui/material";
import styles from "./prayers.module.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

//@ts-ignore
import Flippy, { FrontSide, BackSide } from "react-flippy";
import FlipCard from "./FlipCard/FlipCard";

function Prayers() {
  const [prayerData, setPrayerData] = React.useState<{ [x: string]: any }[]>(
    []
  );
  const fetchPrayerData = async () => {
    await getDocs(collection(db, "Prayers")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log("data: ", data);
      setPrayerData(data);
    });
  };

  React.useEffect(() => {
    fetchPrayerData();
  }, []);

  return (
    <Box className={styles.prayers}>
      {prayerData.map((prayer) => (
        <Flippy
          key={prayer.name}
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
        >
          <FrontSide>
            <FlipCard text={prayer.name} type={"front"} />
          </FrontSide>
          <BackSide>
            <FlipCard text={prayer.prayer} type={"back"} />
          </BackSide>
        </Flippy>
      ))}
    </Box>
  );
}

export default Prayers;
