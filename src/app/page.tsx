"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Votd from "./components/Votd/Votd";

export default function Home() {
  return (
    <Box className={styles.Home}>
      <img
        className={styles.Home__image}
        src="https://images.unsplash.com/photo-1642022143908-fe7e3160a56e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="open bible"
      />
      <Votd />
    </Box>
  );
}
