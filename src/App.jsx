import { RouterProvider } from "react-router";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Albums, { loader as albumsLoader } from "./routes/Albums";
import Users, { loader as usersLoader } from "./routes/Users";
import Layout from "./routes/Layout";
import User, { loader as userLoader } from "./routes/User";
import Album, { loader as albumLoader } from "./routes/Album";
import Error from "./routes/Error";
import { FetchService } from "./utils/fetch";

export const typicode = new FetchService(
  "https://jsonplaceholder.typicode.com"
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/users" />,
      },
      {
        path: "/users",
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: "/albums",
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: "/users/:id",
        loader: userLoader,
        element: <User />,
        errorElement: <Error />,
      },
      {
        path: "/albums/:id",
        loader: albumLoader,
        element: <Album />,
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
