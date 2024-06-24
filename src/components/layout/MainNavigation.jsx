import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/Favorites-context";

const MainNavigation = () => {
  const favContext = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetup</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={"/favorites"}>
              My Favorites
              <span className={classes.badge}>{favContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
