import { Box, List, ListItem, Typography } from "@mui/material";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { typicode } from "../App";

export const loader = async ({ params: { id } }) => {
  const [user, albums] = await Promise.all([
    typicode.getUser(id),
    typicode.getAlbumsByUserId(id),
  ]);
  return { user, albums };
};

export default function User() {
  const { user, albums } = useLoaderData();

  return (
    <Box>
      <Typography variant="h4" sx={{ my: "10px" }}>
        {user.name}
      </Typography>
      <Typography>Username: {user.username}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Box sx={{ my: "15px" }}>
        <List>
          {albums.map((album) => (
            <Link
              to={`/albums/${album.id}`}
              key={album.id}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.05rem",
              }}
            >
              <ListItem button>
                <Typography>{album.title}</Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
}
