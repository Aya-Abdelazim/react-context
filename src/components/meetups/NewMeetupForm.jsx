import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupFrom.module.css";
import { Form } from "react-router-dom";
import newContext from "../../store/NewMeetups-context";

const NewMeetupForm = () => {
  const { addMeetup } = useContext(newContext);

  function submitHandler(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const image = event.target.image.value;
    const address = event.target.address.value;
    const description = event.target.description.value;
    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    addMeetup(newMeetup);
    event.target.reset();
  }

  return (
    <Card>
      <Form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            name="description"
            required
            rows={5}
            id="description"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </Form>
    </Card>
  );
};

export default NewMeetupForm;
