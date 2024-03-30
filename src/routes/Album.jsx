import { Suspense } from "react";
import { useLoaderData } from "react-router";
import { Link, Await } from "react-router-dom";
import Error from "./Error";
import { Box, Grid, Typography } from "@mui/material";
import { typicode } from "../App";

export const loader = async ({ params: { id } }) => {
  const photosPromise = typicode.getPhotosByAlbumId(id);
  const album = await typicode.getAlbum(id);
  const user = await typicode.getUser(album.userId);
  return { photosPromise, album, user };
};

export default function Album() {
  const { photosPromise, album, user } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Typography variant="h4" sx={{ my: "15px" }}>
        {album.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          marginBottom: "35px ",
        }}
      >
        <Typography sx={{ fontSize: "1.1rem", color: "grey" }}>
          created by
        </Typography>
        <Link
          to={`/users/${user.id}`}
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "1.1rem",
          }}
        >
          <Typography sx={{ fontSize: "1.1rem" }}>{user.name}</Typography>
        </Link>
      </Box>
      <Await resolve={photosPromise} errorElement={<Error />}>
        {(photos) => (
          <Grid container spacing={2}>
            {photos.map((photo) => (
              <Grid item key={photo.id}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  style={{ maxWidth: "200px" }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Await>
    </Suspense>
  );
}
