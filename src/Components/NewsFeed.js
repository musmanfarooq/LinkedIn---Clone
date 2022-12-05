import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React from "react";
import InputOptions from "./InputOptions";
import "./NewsFeed.css";

function NewsFeed() {
  return (
    <div className="feed">
      <div className="feed__InputContainer">
        <div className="feed__Input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__InputOption">
          <InputOptions Icon={Image} title="Photo" color="#70B5F9" />
          <InputOptions Icon={Subscriptions} title="Video" color="#5F9B41" />
          <InputOptions Icon={EventNote} title="Audio Event" color="#5F9B41" />
          <InputOptions
            Icon={CalendarViewDay}
            title="Write Article"
            color="#5F9B41"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
