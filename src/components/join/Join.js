import React, { useState } from "react";
import io from "socket.io-client";

import Chat from "../chat/Chat";
import "./Join.css";

const ENDPOINT = "https://react-chat-application-1md3nd.herokuapp.com/";
const socket = io.connect(ENDPOINT);

function Join() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
        socket.emit('join_room', room);
        setShowChat(true);
        };
    }
  return (
    <div className="join-container">
      {!showChat ? (
        <div className="join-parent">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder="Name"
              className="join-input"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Room"
              className="join-input mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>

          <button className="button mt-20" onClick={joinRoom}>
            Join
          </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
};

export default Join;
