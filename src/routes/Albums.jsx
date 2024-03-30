import { Divider, List, ListItem, Typography } from "@mui/material";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { typicode } from "../App";

export const loader = async () => {
  const albums = await typicode.getAlbums();
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <List>
      <Typography variant="h3" sx={{ marginBottom: "15px" }}>
        Albums
      </Typography>
      <Divider />
      {albums.map((album) => (
        <Link
          to={`/albums/${album.id}`}
          key={album.id}
          style={{ textDecoration: "none" }}
        >
          <ListItem button>
            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "black",
              }}
            >
              {album.title}
            </Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
