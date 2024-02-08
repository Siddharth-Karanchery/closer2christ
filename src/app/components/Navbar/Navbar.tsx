import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Navtabs } from "../../../constants/Navtabs";

import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <Toolbar className="Navbar">
          <Image
            src={require("../../../assets/Logo.jpg")}
            className="Navbar__logo"
            alt="logo"
          />
          <Box className="Navbar__tabs">
            {Navtabs.map((tab) => (
              <Link key={tab.label} href={tab.path}>
                <Typography className="Navbar__tabs__tab">
                  {tab.label}
                </Typography>
              </Link>
            ))}
          </Box>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
