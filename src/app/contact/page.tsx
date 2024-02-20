"use client";

import * as React from "react";

import styles from "./contact.module.css";
import { Box, MenuItem, TextField, Button } from "@mui/material";
import { ContactOptions } from "../../constants/ContactOptions";

function Contact() {
  const handleSubmit = (e: any) => {
    const { Name, Email, Subject, Message } = e.target;
    console.log("Name: ", Name.value);
    console.log("Email: ", Email.value);
    console.log("Subject: ", Subject.value);
    console.log("Message: ", Message.value);
  };
  return (
    <Box className={styles.Contact}>
      <Box className={styles.Contact__left}>
        <img
          className={styles.Contact_left__image}
          src={
            "https://images.pexels.com/photos/4477208/pexels-photo-4477208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="people praying"
        />
      </Box>
      <Box className={styles.Contact__right}>
        <form className={styles.Contact__right__form} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="Name"
            className={styles.Contact__right__input}
          />
          <TextField
            label="Email"
            name="Email"
            className={styles.Contact__right__input}
          />
          <TextField
            label="Subject"
            name="Subject"
            select
            className={styles.Contact__right__input}
          >
            {ContactOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Message"
            name="Message"
            className={styles.Contact__right__input}
            multiline
            rows={8}
          />
          <Box className={styles.Contact__right__form__buttonPanel}>
            <Button variant="outlined" type="reset">
              Clear
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
