import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className={styles.Home}>
      <Box className={styles.Home__HeroImage}>
        <Image
          src={
            "https://images.unsplash.com/photo-1642022143908-fe7e3160a56e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          fill
          alt="logo"
        />
      </Box>
    </Box>
  );
}
