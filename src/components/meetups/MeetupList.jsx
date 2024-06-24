import { useContext } from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import NewContext from "../../store/NewMeetups-context";

const MeetupList = (props) => {
  const { meetupData } = useContext(NewContext);
  const combinedMeetups = [...props.meetups, ...meetupData];
  return (
    <ul className={classes.list}>
      {/* meetupData */}
      {combinedMeetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
