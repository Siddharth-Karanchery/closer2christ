import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Navtabs } from "../../../constants/Navtabs";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <Box className={styles.Footer}>
      <Box className={styles.Footer__panel}>
        <Box className={styles.Footer__panel__ele}>
          <Typography variant="h4">Closer to Christ</Typography>
          <Typography>
            “Rejoice in hope, be patient in tribulation, be constant in prayer.”
            - Romans 12:12
          </Typography>
        </Box>
        <Box className={styles.Footer__panel__ele}>
          {Navtabs.map((tab) => (
            <Link key={tab.label} href={tab.path}>
              <Typography className={styles.Navbar__tabs__tab}>
                {tab.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
      <Typography variant="caption">Closer to Christ, 2024</Typography>
    </Box>
  );
}

export default Footer;
