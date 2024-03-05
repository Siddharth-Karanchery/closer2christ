import * as React from "react";

import styles from "./aboutElement.module.css";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { aboutData } from "@/data/aboutData";
import { iconGenerator } from "../../../utils/iconGenerator";
import LinkIcon from "@mui/icons-material/Link";

function AboutElement(props: any) {
  const clickHandler = (link: string) => {
    window.open(link, "_blank");
  };

  //@ts-ignore
  let data = aboutData[props.selection];

  let objKeys = Object.keys(data).slice(1);
  let displayContent =
    props.selection === "about" ? (
      objKeys.map((item) => (
        <Typography
          key={item}
          variant={item === "title" ? "h4" : "h6"}
          style={{
            marginBottom: "20px",
            whiteSpace: "pre-line",
            textAlign: "justify",
          }}
          className={styles[`AboutEle__right__${item}`]}
        >
          {data[item]}
        </Typography>
      ))
    ) : (
      <>
        <Typography
          variant={"h4"}
          style={{ marginBottom: "20px" }}
          className={styles[`AboutEle__right__title`]}
        >
          {data["title"]}
        </Typography>
        <List>
          {data.list.map((listItem: any, index: number) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {iconGenerator(listItem.icon, "white")}
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    className={styles.AboutEle__listItem}
                  >
                    {listItem.text}
                    {listItem.url ? (
                      <LinkIcon
                        style={{ fontSize: "medium", marginLeft: "10px" }}
                        onClick={() => clickHandler(listItem.url)}
                      />
                    ) : null}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
    );
  return (
    <Box className={styles.AboutEle} id={props.flip ? styles["flip"] : ""}>
      <Box className={styles.AboutEle__left}>
        <img
          className={styles.AboutEle_left__image}
          src={data.imageLink}
          alt="people praying"
        />
      </Box>
      <Box className={styles.AboutEle__right}>{displayContent}</Box>
    </Box>
  );
}

export default AboutElement;
