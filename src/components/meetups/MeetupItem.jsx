import FavoritesContext from "../../store/Favorites-context.jsx";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";

const MeetupItem = (props) => {
  const favContext = useContext(FavoritesContext);

  const itemIsFavorite = favContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favContext.removeFavorite(props.id);
    } else {
      favContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
