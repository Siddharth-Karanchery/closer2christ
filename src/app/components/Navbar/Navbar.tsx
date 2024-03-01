"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Navtabs } from "../../../constants/Navtabs";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarMob from "../NavbarMob/NavbarMob";

export default function Navbar() {
  const isMobile = useMediaQuery(`(max-width:${450}px)`);

  let navBarElements = isMobile ? (
    <NavbarMob />
  ) : (
    Navtabs.map((tab) => (
      <Link key={tab.label} href={tab.path}>
        <Typography className={styles.Navbar__tabs__tab}>
          {tab.label}
        </Typography>
      </Link>
    ))
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <Toolbar className={styles.Navbar}>
          <Image
            src={require("../../../assets/Logo.jpg")}
            className={styles.Navbar__logo}
            alt="logo"
          />
          <Box className={styles.Navbar__tabs}>{navBarElements}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
