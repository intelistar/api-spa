import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h3">404</Typography>
      <Typography variant="h2">PAGE NOT FOUND</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Typography variant="h6">go to page: </Typography>
        <Link to="/users">
          <Typography variant="h6">Users</Typography>
        </Link>
      </Box>
    </Box>
  );
}
