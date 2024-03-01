import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styles from "./NavbarMob.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Navtabs } from "@/constants/Navtabs";

export default function NavbarMob() {
  const [showDrawer, setShowDrawer] = React.useState(false);

  return (
    <>
      <MenuIcon onClick={() => setShowDrawer(true)} />
      <Drawer
        anchor={"right"}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <List className={styles.NavbarMob}>
          {Navtabs.map((tab, index) => (
            <ListItem key={tab.label} disablePadding>
              <ListItemButton href={tab.path}>
                <ListItemText
                  primary={tab.label}
                  className={styles.NavbarMob__tabs}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
