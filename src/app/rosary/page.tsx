"use client";
import { Box, Paper, Typography } from "@mui/material";
import styles from "./rosary.module.css";
import { usePathname } from "next/navigation";

import { mysteriesData } from "@/data/mysteries";
import Link from "next/link";

function Rosary() {
  const pathname = usePathname();

  return (
    <Box className={styles.Rosary}>
      {mysteriesData.map((mystery) => (
        <Link
          href={`${pathname}/${mystery.path}`}
          key={mystery.name}
          className={styles.Rosary__ele}
        >
          <Paper className={styles.Rosary__card}>
            <Typography variant="h5" className={styles.Rosary__card__title}>
              {mystery.name}
            </Typography>
            <img
              className={styles.Rosary__card__image}
              src={mystery.imageLink}
              alt="mystery image"
            />
            <Typography
              variant="subtitle2"
              className={styles.Rosary__card__note}
            >
              {mystery.note}
            </Typography>
          </Paper>
        </Link>
      ))}
    </Box>
  );
}

export default Rosary;
