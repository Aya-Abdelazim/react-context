import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetup.jsx";
import NewMeetupPage from "./pages/NewMeetup.jsx";
import FavoritesPage from "./pages/Favorites.jsx";
import { FavoritesContextProvider } from "./store/Favorites-context.jsx";
import { NewContextProvider } from "./store/NewMeetups-context.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AllMeetupPage /> },
      { path: "/new-meetup", element: <NewMeetupPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <NewContextProvider>
        <RouterProvider router={router} />
      </NewContextProvider>
    </React.StrictMode>
  </FavoritesContextProvider>
);
