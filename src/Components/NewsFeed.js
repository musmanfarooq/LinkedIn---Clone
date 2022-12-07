import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import InputOptions from "./InputOptions";
import "./NewsFeed.css";
import Post from "./Post";

function NewsFeed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(
        snapshot.docs.map((doc) => ({
          id: docs.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  function sendPostHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="feed">
      <div className="feed__InputContainer">
        <div className="feed__Input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit" onClick={sendPostHandler}>
              Send
            </button>
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
      {post.map((post) => (
        <Post />
      ))}
      <Post
        name="Usman Farooq"
        description="description"
        message="this is body message"
      />
    </div>
  );
}

export default NewsFeed;
