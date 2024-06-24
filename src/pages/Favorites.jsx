import { useContext } from "react";
import FavoritesContext from "../store/Favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const favContext = useContext(FavoritesContext);

  let content;

  if (favContext.totalFavorites === 0) {
    content = <p>No Favorites</p>;
  } else {
    content = <MeetupList meetups={favContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
