import { createContext, useState } from "react";

const NewContext = createContext({
  meetupData: [],
  addMeetup: () => {},
});

export function NewContextProvider(props) {
  const [meetupData, setMeetupData] = useState([]);

  function addMeetup(meetup) {
    setMeetupData((prevMeetups) => [...prevMeetups, meetup]);
  }

  return (
    <NewContext.Provider value={{ meetupData, addMeetup }}>
      {props.children}
    </NewContext.Provider>
  );
}

export default NewContext;
