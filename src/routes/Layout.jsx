import { NavLink, Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";
import { Box, Container, Typography } from "@mui/material";

export default function Layout() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", gap: "50px", py: "15px" }}>
          <NavLink
            to="/albums"
            end={true}
            className={({ isActive }) =>
              isActive ? `${styles.selected} ${styles.link}` : styles.link
            }
          >
            <Typography variant="h6">Albums</Typography>
          </NavLink>
          <NavLink
            to="/users"
            end={true}
            className={({ isActive }) =>
              isActive ? `${styles.selected} ${styles.link}` : styles.link
            }
          >
            <Typography variant="h6">Users</Typography>
          </NavLink>
        </Box>
      </Box>
      <Box sx={{ my: "15px" }}>
        <Outlet />
      </Box>
      <footer>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Created by: Garkusha Nikita</Typography>
          <Typography>BSU: {new Date().getFullYear()}</Typography>
        </Box>
      </footer>
    </Container>
  );
}
