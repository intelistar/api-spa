import { Divider, List, ListItem, Typography } from "@mui/material";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { typicode } from "../App";

export const loader = async () => {
  const users = await typicode.getUsers();
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();
  return (
    <List sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography variant="h3" sx={{ marginBottom: "15px" }}>
        Users
      </Typography>
      <Divider />
      {users.map((user) => (
        <Link
          to={`/users/${user.id}`}
          key={user.id}
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "1.05rem",
          }}
        >
          <ListItem button>
            <Typography>{user.name}</Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
