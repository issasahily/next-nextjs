import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";
const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt="Meetup image" />
      <p>{props.description}</p>
      <h2> {props.title}</h2>
      <h1>{props.id}</h1>
      <h3>{props.adress}</h3>
    </section>
  );
};

export default MeetupDetail;
